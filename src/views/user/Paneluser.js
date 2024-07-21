import React, {useState,useEffect, useContext} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    ScrollView,
    Image,BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid

} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


import Icon from "react-native-vector-icons/MaterialIcons";
import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from '../../components/Header';
import { Context } from '../../components/Context';
import { usefetchuser } from '../../components/usefetchuser';
import { ActivityIndicator } from 'react-native-paper';
import { JDate ,JTime} from '../../components/JDate';
import { useNetInfo } from '@react-native-community/netinfo';
import {ComponentLoading} from "../../components/ComponentLoading"
const Paneluser=()=>{

    //const cameraViewRef = React.useRef(null);

    const [number,setnumbr]=useState('')
    const [messages,setmessages]=useState('')
    const [isloading,setisloading]=useState(false)
    const [data,setdata]=useState([])
    const {reload,setreload}=useContext(Context)

    const navigation=useNavigation()
    console.log("reeeeeeeeeeeeloadpanllllluser",reload)
    const {request} = usefetchuser('dashboard/home')
/////////////////////////////////////////////////////////////




// const netinfo = useNetInfo();

//   useEffect(() => {
//     if (netinfo.isConnected) {
//       // اتصال به اینترنت برقرار است، کد مرتبط با شروع پخش لایو را اینجا قرار دهید
//     //  console.log('اتصال به اینترنت برقرار است.');
//     //  Alert.alert('اتصال به اینترنت برقرار است.');
//     } else {
//       // اتصال به اینترنت قطع شده است، می‌توانید پیغام یا کدهای دیگر مرتبط با قطع اتصال را اینجا قرار دهید
//      // console.log('اتصال به اینترنت قطع شده است.');
//       Alert.alert('اتصال به اینترنت قطع شده است.');
//     }
//   }, [netinfo]);



/////////////////////////////////////////////////////////////

    const Go=(id)=>{
      //  console.log("idddddddddddpanleuserrr===>",id)
        navigation.navigate('live',{id:id})
    }

    // const setAPI=()=>{
    //     request().then(res=>{

    //         console.log('res--panel ---dashboard/home----->',res.data.readySections )

    //         if(res.error == true){
    //             alert(res.message)
    //         }
    //         else{
    //             if(res.data.readySections == []  || res.data.readySections == undefined || typeof res.data.readySections == 'undefined'){
    //                 setmessages('کلاسی برای برگزاری نیست ')
    //             }else {
    //                 setdata(res.data.readySections)

    //             }
    //         }

    //     })
    // }





    const setAPI = async () => {
        try {
            setisloading(true)
            const res = await request();
    
            console.log('res--panel ---dashboard/home----->', res.data.readySections);
    
            if (res.error === true) {
                Alert.alert(res.message);
                setisloading(false)
            } else {
                if (!res.data.readySections || res.data.readySections.length === 0) {
                    setmessages('کلاسی برای برگزاری نیست ');
                    setisloading(false)
                } else {
                    setdata(res.data.readySections);
                    setisloading(false)
                }
            }
        } catch (error) {
            console.error("خطا در اجرای تابع setAPI:", error);
            // اقدامات مناسب برای مدیریت خطا مانند نمایش پیام به کاربر
        }
    };
    


//////////////////////////////////////////////////////////////////////////////////////////////////
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
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



    useFocusEffect(
        React.useCallback(()=>{
           setAPI()
            requestCameraPermission()

           
        },[!reload])
     )


    useEffect(() => {
        const backAction = () => {
            Alert.alert('خارج شدن ', 'ایا میخواهید خارج شوید ', [
                {
                    text: 'نه',
                    onPress: () => null,
                    style: 'cancel',
                },
                {text: 'بله', onPress: () => BackHandler.exitApp()},
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
             backAction,
        );

        return () => backHandler.remove();
    }, []);



    return(

        <View style={Styles.container}>

            <Header/>
{/* <Text  style={{color:"#fff",fontSize:RFValue(28)}}>paneleuser</Text> */}
            <Text style={{fontSize:RFValue(20),color:'#D570D9',alignSelf:'center'}}>{messages}</Text>



            {isloading?<ComponentLoading isFetching={isloading}/>:(<>
<ScrollView>

{
    data ==[] ? <ActivityIndicator size={50} style={{
        flex: 1,
    }}/> : data.map((item,i)=>{
        return(

            <View style={Styles.pakegmahsa} key={i}>

            <Text style={{color:'#000',fontSize:RFValue(16),marginVertical:'5%',alignSelf:'center',fontWeight:"bold"}}>{item.title}</Text>

            <View style={Styles.parentdatestaetend}>

            <Text style={[ {
               // color:"#D570D9",
                color:"#000",
                },Styles.textdate]} >{JDate(item.date)}</Text>


            <Text style={[ {color:"#000",},Styles.textdate]}>تاریخ</Text>
 </View>
            <View style={Styles.parentdatestaetend}>
            <Text style={[ {color:"#000",},Styles.textdate]}>{JTime(item.start_at)} </Text>
    
            <Text style={[ {color:"#000",},Styles.textdate]}>شروع  کلاس  </Text>
 </View>
            <View style={Styles.parentdatestaetend}>
                <Text style={[ {color:"#000",},Styles.textdate]}> {JTime(item.end_at)} </Text>
                <Text  style={[ {color:"#000",},Styles.textdate]}>پایان کلاس  </Text>

            </View>

            <TouchableOpacity  onPress={()=>Go(item.id)}  style={Styles.submitpakege}>
                <Text style={Styles.texsubmitpakege}>  پخش زنده  </Text>

            </TouchableOpacity>
            </View>
        )
    })
}

</ScrollView></>)}


        </View>

    )


}


export {Paneluser}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        
      //  backgroundColor:'#5221BD'
        backgroundColor:'#fff'
    },

    parents:{
        width: '80%',
        
        backgroundColor:' #F5F5F5',
      
        alignSelf:'center',
        height:(Dimensions.get('window').height /100 )*25,
        marginVertical:'2%',
        borderRadius:10
    },

    titlearticle:{
        color:'black',
        fontSize:RFValue(14),
        alignSelf:'flex-end',
        marginHorizontal:'5%',
        marginVertical:'4%'
    },

    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:(Dimensions.get('window').height /100 )*7,
        backgroundColor:'white'
    },
    logo:{
        width:50,
        height:50
    },
    Viewalert:{
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        backgroundColor: '#5220BD',
        borderRadius:5,
        marginVertical:'2%',

    },
    textalert:{
        color:'white',
        fontSize:RFValue(12),
        width:'95%',
        marginVertical:'1%'
    },
    mainparentalert:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'95%',
        alignSelf:'center',
    },
    parentoptions:{
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:'3%'
    },
    options:{
        borderRadius:10,
        borderColor:'#5220BD',
        borderWidth:2,
        width:'45%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:(Dimensions.get('window').height /100 )*12,
        backgroundColor:'white'
    },
    pakegmahsa:{
      //  backgroundColor:'#5220BD',
   //   backgroundColor:'#f5f5f5',
      backgroundColor:'#fff',
        borderRadius:10,
        width:'85%',
        alignSelf: 'center',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:'3%',

          
shadowColor: '#2196F3',

shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 10,

    },
    txtpakegs:{
        color:'bleck',fontSize:RFValue(19),fontWeight:'bold',marginVertical:'5%',alignSelf:'center'
    },
    parentdatestaetend:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'95%',
    },
    textdate:{
        fontSize:RFValue(14),marginVertical:'2%',alignSelf:'center',
        //fontWeight:"bold"
    },
    submitpakege:{
        width:'90%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
      
       //backgroundColor:"#FFD119",
       backgroundColor:"#B828B9",
       
      
        marginVertical:'2%'
    }
,texsubmitpakege:{
        color:'#fff',fontSize:RFValue(16),marginVertical:'2%',alignSelf:'center',fontWeight:"bold"

    },
    needs:{
        width:'95%',
        backgroundColor:'white',
        alignSelf:'center'
    },
    parentneeds:{
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:'5%'
    },
    neddoption:{
        borderRadius:10,
        width:'45%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
newArticle:{
    width:'95%',
    backgroundColor:'white',
    alignSelf:'center',
    marginVertical:"3%"
},
imagenewArticle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    marginVertical:'3%'
},

maintex:{
    width:'90%',
    alignSelf:'center',
    marginVertical:'10%'

},
childArticle:{
    borderColor:'#5220BD',
    borderWidth:2,
    borderRadius:10,
    width:'95%',
    alignSelf:'center',
    marginVertical:'4%'

},
containu:{
    color:'#5220BD',
    fontSize:RFValue(14),
    alignSelf:'flex-end',
    marginHorizontal:'5%',
    marginVertical:'4%'
},


})



