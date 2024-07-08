import React, {useState,useEffect, useContext} from 'react';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
    Button, View, StyleSheet, Text, Animated, Dimensions, TouchableOpacity, ActivityIndicator, PermissionsAndroid, ScrollView, Alert,BackHandler,ToastAndroid
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";
import { usefetchuser } from '../../components/usefetchuser';
import { NodeCameraView } from 'react-native-nodemediaclient';
import { JDate ,JTime} from '../../components/JDate';
import Modal from "react-native-modal";
import { s } from "react-native-wind";
import { Context } from '../../components/Context';


const Live=(props)=>{
    const navigation=useNavigation()
    const {id} = props.route.params;
    console.log("idddddddddddliveeeeeeeeeeeeeee===>",id)
  const [coment,setcoment]=useState([])
    const [fadeAnimation] = useState(new Animated.Value(0))
    const [statuslive,setstatuslive]=useState('')
    const [status,setstatus]=useState('')
    const [hide,sethide]=useState(true)
    const {request:finish} = usefetchuser('live/finish-live')
    const {request:coments} = usefetchuser('live/get-comments')
    const {request:startlive} = usefetchuser('live/start-live')
    const [isModalVisible, setModalVisible] = useState(false);
const {reload,setreload}=useContext(Context)




// const Stop=()=>{
//     cameraViewRef.current.stop()
//     setModalVisible(true)
//    // navigation.navigate('user',{screen:'paneluser'})
// }







useEffect(() => {
    const backAction = () => {
        Alert.alert('', 'بازگشت به لیست جلسات ', [
           
            {text: 'خیر', onPress: () => null},
            {
                text: 'بله',
                onPress: () => navigation.navigate("paneluser"),
                style: 'cancel',
            },
        ]);
        return true;
    };

    const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
         backAction,
    );

    return () => backHandler.remove();
}, []);




const Close=()=>{
setModalVisible(false)
    setstatuslive('')
}
const Backscreen=()=>{
    navigation.navigate('paneluser')
   // navigation.navigate('user',{screen:'paneluser'})
    setreload(!reload)
    //finished()

    

}



    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnimation, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true
                }),
                Animated.timing(fadeAnimation, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true
                })
            ])
        ).start();
    }, [])


    const finished=()=>{
        if(status == 'start'){
            setstatuslive('لایو را متوقف کنید')
        }else if (status == 'stop'){

            finish({
                id:id
            }).then(res=>{
                console.log('res---finish--->',res)
                if(res.error == true){
                    alert(res.message)
                }else {
                    navigation.navigate('paneluser')
                }
            })
        }
else {
            navigation.navigate('paneluser')
        }



    }


    const cameraViewRef = React.useRef(null);

    const [state,setstate]=useState({
        inputUrl:null,
        cameraId:null,
        cameraFrontMirror:null,
        bitrate:null,
        profile:null,
        samplerate:null,
        preset:null,
        videbitrate:null,
        videprofile:null,
        fps:null,
        videoFrontMirror:null,
    })

    const requestCameraPermissions = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
   
    const Startedlive=()=>{

        if(id == ''){
                 alert('خطا در برقراری ارتباط ')
        }
        else{
         startlive({
            id:id
        }).then(res=>{
            console.log('strt------live------->',res)
            if(res.error == true){
                alert(res.message)
            }
            else{
                setstate({inputUrl:res.data.input_url})
            }
        })
        }
    }


   
    useFocusEffect(
        React.useCallback(()=>{
            const setIntervalUsers=setInterval(()=>{
                coments({
                    id:id
                }).then(res=>{
                    console.log('res--name-->',res.data.comments)
                    if(res.error == true){
                        alert(res.error)
                    }
                    else {
                        setcoment(res.data.comments)
      
                    }
                })
            },40000)


            return()=>{
    
                clearInterval(setIntervalUsers)
            }

        },[])
       
     )
   
    useFocusEffect(
        React.useCallback(()=>{
            Startedlive()
            requestCameraPermissions()
           
 

        },[])
     )



    return(
        <View style={Styles.container}>

    <View style={Styles.mainheader}>

    <View style={Styles.header}>
                <TouchableOpacity onPress={()=> cameraViewRef.current.start()} style={Styles.start} >
                <Text style={Styles.texoute}>start</Text>
                <Icon name={'play-arrow'} size={RFValue(24)} color={"white"} style={{margin: '2%'}}/>
                 </TouchableOpacity>


       
   
        





        <TouchableOpacity onPress={
            ()=> cameraViewRef.current.stop()
          //  Stop
            
            } style={Styles.close} >
            <Text style={Styles.texoute}>stop </Text>
            <Icon name={'close'} size={RFValue(24)} color={"white"} style={{margin: '2%'}}/>
        </TouchableOpacity>


                        
<TouchableOpacity onPress={()=>sethide(!hide)} style={Styles.start} >
                        
                        {hide?<Text 
                        numberOfLines={2}
                        style={Styles.texoute}>
                            عدم نمایش نظرات  </Text>
                            
                        :<Text 
                       
                        style={Styles.texoute}>
                            نمایش نظرات  </Text>}
                        
                             <Icon name={'comment'} size={RFValue(24)} color={"white"} style={{margin: '2%'}}/> 
                        </TouchableOpacity>
                        


    </View>
    <Animated.View style={{ opacity: fadeAnimation,alignSelf:"center" }}>

<Text style={{fontSize: 20,color:'green',borderRadius:10,fontWeight:'bold'}}>
    {statuslive}</Text>
</Animated.View>
    </View>
    
    

    

<View style={Styles.componentlive}>

{

                (state.inputUrl == '' || state.inputUrl == null ) ? <ActivityIndicator size={50} style={{
                    flex: 1,
                    }}/> :
                    <>
                        <NodeCameraView
                            style={{ width: '100%', height: '100%' ,backgroundColor:'gray'}}
                            ref={cameraViewRef}
                            outputUrl={state.inputUrl}
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

                    </>


            }
</View>
          <View style={Styles.coment}>
              {
                  coment == [] ? <><ActivityIndicator size={20} style={{flex: 1,}}/></>
                      :  hide?<>
                     
                     

                          <ScrollView 
                           ind
                          >
                            
                             
                              {
                                  coment.map((item,index)=>{
                                      return(
                                        //  <>
<View key={index}
style={{backgroundColor: 'rgba(255,255,255, 0.4)',padding:"2%",borderRadius:10,marginVertical:'3%'}} >
    <View style={{flexDirection:"row-reverse",alignSelf:"center"}}>
    <Text  style={{color:'#00f',
            fontSize:RFValue(12),
        }}>{item.user.name} </Text>

        <Text  style={{color:'#00f',
            fontSize:RFValue(12),
        }}>{item.user.lastname} </Text>


    </View>

    <Text  style={Styles.comenttex}>{item.text}</Text>
    <View style={Styles.parenttex}>
    
        <Text  style={{color:'#000',
            fontSize:RFValue(12),
        }}>{item.name} </Text>
        <Text style={{        color:'#000',
            fontSize:RFValue(8),
      }}>{JDate(item.date)} </Text>
    </View>


</View>

                                       //   </>
                                      )
                                  })
                              }

                          </ScrollView>
                      </>:null


              }


        </View>

        <View style={{ flex: 1 }}>
      

      <Modal isVisible={isModalVisible}>
      <View style={Styles.viwemodal1}>
        <View  style={Styles.viwemodal2}>
   <View   style={Styles.viewmodal3}>
   <Text style={{fontSize:20,color:'#000',borderRadius:10,fontWeight:'bold'}}>
                {statuslive}</Text>
   </View>
       


<View  style={{flexDirection:"row",
         justifyContent:"space-around",
         alignItems:"center",
         width:"95%",height:"40%",
         
         
         
         }}>
<TouchableOpacity
           style={s`py-3 bg-yellow-400 rounded-2xl w-16  `}
          onPress={finished}>


<Text style={s`  font-bold text-center text-gray-700 text-l`}>
           ذخیره </Text>


          </TouchableOpacity>

          <TouchableOpacity
           style={s`py-3 bg-yellow-400 rounded-2xl w-16  `}
          onPress={Backscreen}>


<Text style={s`  font-bold text-center text-gray-700 text-l`}>
            بازگشت </Text>


          </TouchableOpacity>
          
          <TouchableOpacity
          onPress={Close}
           style={s`py-3 bg-yellow-400 rounded-2xl w-16  `}
          >


<Text style={s`  font-bold text-center text-gray-700 text-l`}>
           بستن </Text>


          </TouchableOpacity>
          
</View>
          
          
        </View>
        </View>
      </Modal>
    </View>



        </View>

    )
}

export {Live}


const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F5F5'
    },parenttex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'30%',
        alignSelf:'center'


    },
    componentlive:{
    height:(Dimensions.get('window').height /100 )*93,
      width:'100%',
position:'relative',
    },
    coment:{
        width:'98%',
        height:(Dimensions.get('window').height /100 )*35,
        position:'absolute',
        bottom:0,
        left:0,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-end',

    },
    comenttex:{
        color:'black',
        fontSize:RFValue(12),
        marginVertical:'1%'
    }
,

mainheader:{
    //flexDirection:'row',
   // alignItems:'center',
   // justifyContent:'space-between',
    height:(Dimensions.get('window').height /100 )*10,
    backgroundColor:'white'
},
header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:(Dimensions.get('window').height /100 )*6,
   // backgroundColor:'#f00'
},oute:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    borderRadius:7,
    marginHorizontal:'2%'
},start:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    borderRadius:7,
    marginHorizontal:'2%'
},close:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    borderRadius:7,
    marginHorizontal:'2%'
},
texoute:{
    color:'white',
    fontSize:RFValue(14),
},
    statusliveed:{
        color:'red',
        fontSize:RFValue(14),
    },
    centeredView1: {
        //flex: 1,
        width:"30%",
        height:"40%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight:"bold",
        fontSize:RFValue(20)
      },
      submitpakege:{
        width:'15%',
      //  height:'55%',
        marginRight:"2%",
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
       // backgroundColor: rgb(250, 204, 21),
        //backgroundColor: 'rgba(245,245,245, 0.5)',
       backgroundColor:"#FFD119",
       
       //backgroundColor:"#E0B100",
        // "#FFCC00 ",
       // backgroundColor:'yellow',
        marginVertical:'2%'
    }
,texsubmitpakege:{
        color:'black',fontSize:RFValue(12),
        marginVertical:'2%',alignSelf:'center'

    },
    viwemodal1:{
        flex:1 ,alignItems:"center",justifyContent:"center"
    },
    viwemodal2:{

        width:"70%",height:"30%",backgroundColor:"#fff",
          borderRadius: 20, shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
       alignItems:"center",justifyContent:"center"

    },
    viewmodal3:{
        flexDirection:"row",
         justifyContent:"space-around",
         alignItems:"center",
         width:"95%",height:"55%",
    },
      
})
