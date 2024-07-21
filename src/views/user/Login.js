         

import React, {useContext, useEffect, useState,useRef} from "react";
import {
    ActivityIndicator, Dimensions,
    FlatList,
    Image,
    ImageBackground, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    BackHandler
    
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Formik} from "formik";
import * as yup from "yup";
import {useNavigation} from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import Icon from "react-native-vector-icons/AntDesign";
import { useFetch } from "../../components/useFetch";

//import  Context from "../screens/Signupfolder/Context" 
import { Context } from "../../components/Context";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";


import Mahsa from "../../assets/images/logomahsa2.jpg"

const validation = yup.object().shape({
    phone: yup.string().required('لطفا شماره موبایل خود را وارد کنید '),
})
const   width=Dimensions.get("window").width;
const Login = () => {

    const navigation=useNavigation()
    const {phone,setphone}=useContext(Context)
   
const [err,seterr]=useState('')

useEffect(() => {
    const backAction =async () => {

        return true;
    };

    const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
    );

    return () => backHandler.remove();
}, []);
    

    return (
<View style={[s`flex-1 `,
    {
        //backgroundColor:"#5221BD"
        backgroundColor:"#b3d4dd"
       // backgroundColor:"#d4dfdb"

    }]}>

    <SafeAreaView  style={s`flex`}>

        <View style={s`flex-row justify-center rounded `} >

<Image  source={Mahsa} style={s` w-52 h-52  mt-6 mb-6 rounded-full `}  />

 </View>
</SafeAreaView>


<View 
style={[styles.p,s`flex-1 bg-white px-8 pt-8  `]}>
    <View  style={s` form space-y-2  `}>
        <Text  style={s` text-gray-900 ml-10  text-lg font-medium`}>شماره موبایل خود را وارد کنید:</Text>



        <Formik 
            validationSchema={validation} 
            initialValues={{phone: ''}}
             onSubmit={(values, {setSubmitting}) => {

                fetch('https://mahsaonlin.com/admin/guest/register/get-mobile',{
                    method:'post',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({
                        mobile:values.phone
                    })
                }).then(response=>response.json()).then(response=>{
                    console.log("mmmmmmmmmmm",response)
                    if (response.error === false){
                        setphone(values.phone)
                        navigation.navigate('code',{phone:values.phone})

                    }else {
                        seterr(response.message)
                    }

                })


                setSubmitting(false)
            }}>
                {({
                      handleChange,
                      handleBlur,
                      values,
                      handleSubmit,
                      errors

                  }) => <>
 <View
 
 
 style={{width:"100%",flexDirection:'column',justifyContent:'center',
        height:Dimensions.get("screen").width>576?"30%":"45%",
       alignItems:'center',   
       }}       
 >
 
               
 
     <TextInput
                            value={values.phone}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            placeholder="09"
                           // placeholderTextColor="#3f3f46"
                           placeholderTextColor="#D570D9"
                            // style={{fontSize:RFValue(24),
                            //    // marginBottom:"15%",
                            //     backgroundColor:'#d5d5d5',
                            //     width:(Dimensions.get("window").width/100)*80,borderRadius:10,color:"#000",textAlign:"center"}}
                            
    style={[s`  text-gray-700 rounded-2xl 
    w-full text-center
                            `,{borderWidth:1,borderColor:"#D570D9"}]}
                            />
                
 {/* {(errors.phone) && <Text  
                style={{color:"#f00",fontFamily:"vazir",
                fontSize:14,}} >{errors.phone}</Text>}  */}
              <Text style={{color:"#000",fontFamily:"vazir",color:"#f00",fontSize:14
           
            }}>{err}</Text> 
           
               
               </View>

               <TouchableOpacity  
               onPress={handleSubmit}
               style={[s`py-3  rounded-2xl `,{backgroundColor:"#B828B9"}]}>
                <Text style={[s`  font-bold text-center  text-xl`,{color:"#fff"}]}>
                    ادامه</Text>
               </TouchableOpacity>
 </>}

            </Formik>











    </View>

</View>

</View>


     )
}






const styles=StyleSheet.create({

    p:{
        borderTopRightRadius:50,
        borderTopLeftRadius:50
    },


    container:{
      flex:1,
      //backgroundColor: "#070125",
      backgroundColor: "#2D2B32",
  },
  body:{
    position:'relative',
   top:'2%',
   zIndex:2,
   borderBottomLeftRadius:14,
   borderBottomRightRadius:14,
   backgroundColor: "#2D2B32",
  },  
     
  // footer: {
  //   height: (Dimensions.get('window').height / 100) * 20,
  //   zIndex:1,
  //   width:'90%',
  //   flexDirection:'row',
  //   //backgroundColor:"yellow",
  // },
  parentinput:{
    alignItems:"center",
    //backgroundColor:"pink",
  
     
   height:(Dimensions.get('window').height/100)*18,
  },
  textname:{
    marginBottom:6,
         color:'white',
         fontSize:RFValue(12),
         fontFamily:'vazir'
     },
  textinput:{
    // width:"100%",
    color:"white",
    fontSize:24,
    width:"90%",
    padding:10,
    
    backgroundColor:"#54506B",
    borderWidth:1,
    borderColor:"#fff",
    borderRadius:10,
  },  
  line: {
    //width: '90%',
    width:Dimensions.get('window'). width>576?"90%":"70%",
    borderWidth: 1,
    borderColor: "#662d5c",
    alignSelf: 'center',
    marginTop:5,
    marginBottom:5,
  
  },   
  
  
   parentsubmit: {
  
      borderWidth: 1,
      borderColor: '#6efff0',
      width: '80%',
      alignSelf: 'center',
      borderRadius: 34,
      height: Dimensions.get('window').width > 576 ? 45 :45,
    // height: (Dimensions.get('window').height/100)*8,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:'3%',
    //marginTop:'2%',
  },
  submit: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  // iconsumbmit: {
  // 	width: Dimensions.get('window').width > 576 ? 43 : 33,
  // 	height: Dimensions.get('window').width > 576 ? 43 : 33,
  // },
  textsubmit: {
      color: '#00f7ff',
      fontSize: RFValue(25),
      width: '85%',
      textAlign: 'center',
      paddingLeft: '8%',
      fontFamily:'vazir'
  },
  errback:{
    alignSelf: 'center',
    color: 'red',
    fontSize: RFValue(14),
    fontFamily:'BYekan.ttf',
  },
  })

export {Login}

