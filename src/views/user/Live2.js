import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    PermissionsAndroid,
    StyleSheet,
    useWindowDimensions,
    Text,
    Animated,
    FlatList,
    ToastAndroid,
    Linking,
    ActivityIndicator,
    Modal,
} from 'react-native';
import { NodeCameraView } from 'react-native-nodemediaclient';
import { RFValue } from 'react-native-responsive-fontsize';
import { isSet, Loading, useFetch } from '../../components/Issset';
import { Black, Blue, Gray, White } from '../../components/Colors';

import LiveStreamActionButton from '../../components/LiveStreamActionButton'
import { StatusView } from '../../Components/User_Component/Live_components/StatusView';

const Live2 = (props) => {
    const cameraViewRef = React.useRef(null);
    const [status, setStatus] = useState(0)
    const { idDataCourse } = props.route.params;
    const { width, height } = useWindowDimensions();
    const { replace } = useNavigation();
    const [messages, setMessages] = useState([])
    const [viewer, setWiewer] = useState(0)
    const [heart, setHeart] = useState({
        red: 0,
        black: 0
    });
    const { data } = useFetch('live/start-live', false, 'POST', {
        id: props.route.params.id,
       
    });

    // const { data: infoLive, doFetch: getInfo } = useFetch('activitypro/info_live', true);
    // useEffect(() => {
    //     if (isSet(infoLive["data"])) {
    //         isSet(infoLive["data"]["comment"]) &&
    //             setMessages(infoLive["data"]["comment"])

    //         isSet(infoLive["data"]["countView"]) &&
    //             setWiewer(infoLive["data"]["countView"])

    //         isSet(infoLive["data"]["likeRed"]) &&
    //             isSet(infoLive["data"]["likeBlack"]) &&
    //             setHeart({
    //                 black: infoLive["data"]["likeBlack"],
    //                 red: infoLive["data"]["likeRed"]
    //             })
    //     }
    // }, [infoLive])


    // if (status == 2001) {
    //     setTimeout(() => {
    //         getInfo({
    //             idDataCourse: idDataCourse
    //         })
    //     }, 30000)
    // }

    const { data: deleteLive, doFetch, loading } = useFetch('live/finish-live', true)
    useEffect(() => {
        if (isSet(deleteLive)) {
            if (deleteLive["res"] == 1) {
                ToastAndroid.showWithGravity(
                    'پخش زنده پایان یافت. خسته نباشید ...',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                )
                replace('user', { screen: 'LiveToday' })
            } else {
                Alert.alert(
                    'خطا !!!',
                    deleteLive["msg"][0],
                    [
                        {
                            text: 'تماس با پشتیبانی',
                            onPress: () => { Linking.openURL('tel:09101700676') },
                            style: 'destructive'
                        },
                        {
                            text: 'باشه',
                            onPress: () => { }
                        },

                    ]
                )
            }
        }
    }, [deleteLive])

    return (
        <View style={{ ...styles.container, width: width, height: height }}>
            {
                isSet(data["data"]) &&
                    data["res"] == 1 ?
                    // <NodeCameraView
                    //     style={{ width: width, height: height }}
                    //     ref={cameraViewRef}
                    //     outputUrl={data["data"]["dataCurse"]["inputUrl"]}
                    //     camera={{
                    //         cameraId: data["data"]["cameraConfig"]["cameraId"],
                    //         cameraFrontMirror: data["data"]["cameraConfig"]["cameraFrontMirror"]
                    //     }}
                    //     audio={{
                    //         bitrate: data["data"]["audioConfig"]["bitrate"],
                    //         profile: data["data"]["audioConfig"]["profile"],
                    //         samplerate: data["data"]["audioConfig"]["samplerate"],
                    //     }}
                    //     video={{
                    //         preset: data["data"]["videoConfig"]["preset"],
                    //         bitrate: data["data"]["videoConfig"]["bitrate"],
                    //         profile: data["data"]["videoConfig"]["profile"],
                    //         fps: data["data"]["videoConfig"]["fps"],
                    //         videoFrontMirror: data["data"]["videoConfig"]["videoFrontMirror"],
                    //     }}
                    //     scaleMode={"ScaleAspectFit"}
                    //     onStatus={(status, message) => {
                    //         setStatus(status)
                    //         console.log({
                    //             status: status,
                    //             message: message
                    //         })
                    //     }}
                    //     autopreview={true}
                    // />

                    <NodeCameraView
                    style={{ width: '100%', height: '100%' ,backgroundColor:'gray'}}
                    ref={cameraViewRef}
                    outputUrl={data["data"]["dataCurse"]["inputUrl"]}
                    camera={{
                        cameraId: 1 ,
                        cameraFrontMirror:true
                    }}
                    audio={{
                        bitrate:32000,
                        profile:1,
                        samplerate:44100,
                    }}
                    video={{
                        preset:1,
                        bitrate:1000000,
                        profile:1,
                        fps:30,
                        videoFrontMirror:true,
                    }}
                    scaleMode={"ScaleAspectFit"}
                    onStatus={(status, message) => {
                        console.log('---status--Camer-->', status)
                        console.log('---message--Camer-->', message)
                        if(status == 2000){
                            setstatuslive('در حال اتصال')
                        }
                          else if (status == 2001) {
                            setstatuslive(' پخش زنده')
                            setstatus('start')

                        } else if (status == 2005 ){
                          
                          Alert.alert("اتصال به اینترنت را بررسی نمایید ")
                        //  ToastAndroid.showWithGravity(
                        //     'پخش زنده پایان یافت. خسته نباشید ...',
                        //     ToastAndroid.SHORT,
                        //     ToastAndroid.BOTTOM
                        // )
                        }else if ( status == 2004){
                            setstatus('stop')
                            setModalVisible(true)
                            setstatuslive(' توقف پخش زنده')
                          
                        }
                        
                        
                        
                        else {
                            setstatuslive('اینترنت ضعیف احتمال قطعی ')
                        }

                    }}
                    autopreview={true}
                />


                    :
                    <View style={{ width: width, height: height, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'BYekan', fontSize: RFValue(14), color: Black, margin: 10, textAlign: 'center', lineHeight: 25 }}>{data["msg"]}</Text>
                    </View>

            }
            <View style={{ position: 'absolute', width: width, height: height }}>
                {
                    isSet(data["data"]) &&
                    data["res"] == 1 && <LiveStreamActionButton
                        viewer={viewer}
                        doFetch={doFetch} props={props} cameraViewRef={cameraViewRef} status={status} />
                }
                {
                    StatusView(status)
                }
            </View>
            {/* <View style={{ ...styles.messageContainer, height: height / 2 }}>
                <FlatList data={messages} keyExtractor={x => x.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => <ChatItem {...{ item, index }} />} inverted contentContainerStyle={styles.listStyle} />
            </View>
            <View style={styles.heartIconContainer}>
                <View style={styles.heartIcon}>
                    <AntDesign name='heart' style={styles.heartIcons} />
                    <Text style={styles.heartCount}>{heart.black}</Text>
                </View>
                <View style={styles.heartIcon}>
                    <AntDesign name='heart' style={{ ...styles.heartIcons, color: 'red' }} />
                    <Text style={styles.heartCount}>{heart.red}</Text>
                </View>
            </View> */}
            <Modal visible={loading}>
                <Loading />
            </Modal>
        </View>
    )
}

function ChatItem({ item }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View style={[styles.chatItemCommon, styles.receive]}>
                <Text style={{ ...styles.msgtxt, color: Blue, fontSize: RFValue(12) }}>{`${item["profile"]["name"]} ${item["profile"]["lName"]}`}</Text>
                <Text style={{ ...styles.msgtxt, color: Black, lineHeight: 25 }}>{item["comment"]}</Text>
            </View>
            <View style={{ width: 50, height: 50, backgroundColor: 'rgba(239,161,238,0.69)', borderRadius: 50, margin: 5 }} />
        </View>
    )
}

export default React.memo(Live2)

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        backgroundColor: '#3498db',
    },
    messageContainer: {
        position: 'absolute', bottom: 0, right: 0, left: 0
    },
    receive: {
        backgroundColor: "rgba(255,255,255,0.3)",
    },
    chatItemCommon: {
        marginBottom: 8,
        borderRadius: 10,
        maxWidth: '60%',
        padding: 5
    },
    msgtxt: {
        padding: 5,
        // maxWidth: '80%',
        fontSize: RFValue(14),
        color: Black,
        textAlign: 'right',
        fontFamily: 'BYekan',
        // lineHeight: 25
    },
    listStyle: {
        paddingHorizontal: 10,
        paddingBottom: 20
    },
    heartIcons: {
        fontSize: RFValue(35),
        margin: 10,
    },
    heartIconContainer: {
        position: 'absolute', bottom: 0, margin: 10
    },
    heartIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heartCount: {
        fontFamily: 'BYekan',
        fontSize: RFValue(16),
        color: White,
        position: 'absolute'
    }
})