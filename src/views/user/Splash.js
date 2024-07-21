   import React, {useContext, useEffect} from "react";
import {View, Text, ActivityIndicator,Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../../components/Context";
import { useNetInfo } from "@react-native-community/netinfo";
import logomain from "../../assets/images/logomahsa2.jpg";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import {RFValue} from "react-native-responsive-fontsize";

const Splash = () => {
   


   // const {request}=UseFetch('dashboard/home')
   const netinfo = useNetInfo()
   const navigation=useNavigation()
  const{setauth}=useContext(Context)

  useEffect(()=>{
      if (netinfo.isConnected) {
          get('auth')
      }
      else{

      }
  },[netinfo])

const get = async (key) => {
  const value = await AsyncStorage.getItem(key)
  if (value == null) {
      navigation.navigate('login')
  } else {
      setauth(value)
       //console.log('spalsh--->',response)
           
             // navigation.navigate('Apptimestamp')
             navigation.navigate('user',{screen:'paneluser'})
          
          }
  // console.log("-------auth------>", value)
}







  return(

<View style={{flex:1,justifyContent:'center',alignItems:'center',
  //backgroundColor:'#5221BD'}}>
  backgroundColor:'#b3d4dd'}}>

{/* <Image source={logomain} style={{width:"80%",height:"50%" ,marginLeft:5,}}/> */}
<Image style={s` w-52 h-52  mt-6 mb-6 rounded-full `} source={logomain}/>
          {
              netinfo.isConnected ?
                  <ActivityIndicator color={'#fff'} size={'large'} /> :
                  <Text style={{ fontSize: RFValue(15), color: '#fff' }}>اتصال به اینترنت خود را بررسی کنید</Text>
          }

      </View>
  )
}
   

    

export {Splash}







