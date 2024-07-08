import React, { useEffect,useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Formik} from "formik";
import {Text, View, TouchableOpacity, StyleSheet, TextInput, BackHandler, Image, Dimensions} from "react-native";
//import { useFetch } from "../../components/useFetch";
import { Context } from "../../components/Context";
import { useNavigation } from "@react-navigation/native";
import {RFValue} from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import * as yup from "yup";


const validation = yup.object().shape({
    phone: yup.string().required('لطفا شماره موبایل خود را وارد کنید '),
  })

  
const Signup = () => {

    
    //   const {request}=UseFetch('register/signup');
     // const {phone,setauth}=useContext(Context)
      const {setauth}=useContext(Context)
     const navigation=useNavigation();
      const [err,seterr]=useState('')
    
     
    
    const setasync = async (key, value) => {
      await AsyncStorage.setItem(key, value)
      console.log(value);
    }
    
      return (
        <View style={[s`flex-1 `,{backgroundColor:"#5221BD"}]}>
       {/* <Text style={{color:"red",fontSize:44}}>sighnup</Text> */}
        <SafeAreaView  style={s`flex`}>
       
            <View style={s`flex-row justify-center rounded `} >
    
    {/* <Image  source={Mahsa} style={s` w-52 h-52  mt-6 mb-6 rounded-full `}  /> */}
    
     </View>
    </SafeAreaView>
    
    
    <View 
    style={[styles.p,s`flex-1  px-8 pt-8  `]}>
        <View  style={s` form space-y-2  `}>
      
            <Text  style={s` text-gray-900 ml-16 mb-12 mt-12 text-lg font-medium`}>اطلاعات کاربری را وارد کنید</Text>
    
    
            
    
            <Formik 
                validationSchema={validation} 
                initialValues={{phone: '',name:'',family:''}}
                 onSubmit={(values, {setSubmitting}) => {
    
                    fetch('https://mahsaonlin.com/admin/guest/register/signup',{
                        method:'post',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
    
                        },
                        body: JSON.stringify({
                            mobile:values.phone,
                           name:values.name,
                            lastname:values.family,
                            email:'',
                            role:'coach',
                        })
                    }).then(response=>response.json()).then(response=>{
                        console.log("signupresponse====>",response)
                       // console.log("auuuuuuthhhhsignup11",response.data.auth)
                        if (response.error === false){
                          //  setphone(values.phone)
                          setauth(response.data.auth)
                          setasync('auth',response.data.auth)
                         console.log("auuuuuuthhhhsignup",response.data.auth)
                           // navigation.navigate('Apptimestamp')
                           navigation.navigate('user',{screen:'paneluser'})
    
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
          // backgroundColor: "#f0f",
           }}
     >
     
                   
     
         <TextInput
                                value={values.phone}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                placeholder="موبایل"
                                placeholderTextColor="#3f3f46"
                                // style={{fontSize:RFValue(24),
                                //    // marginBottom:"15%",
                                //     backgroundColor:'#d5d5d5',
                                //     width:(Dimensions.get("window").width/100)*80,borderRadius:10,color:"#000",textAlign:"center"}}
                                
        style={s`  bg-gray-300 text-gray-700 rounded-2xl 
        w-full text-center my-4
                                `}
                                />
                                 <Text style={styles.line}> </Text>
    {/*                 
     {(errors.phone) && <Text  
                    style={{color:"#f00",fontFamily:"vazir",
                    fontSize:14,}} >{errors.phone}</Text>} 
                  <Text style={{color:"#000",fontFamily:"vazir",color:"#f00",fontSize:14
               
                }}>{err}</Text> 
               
                    */}
               <TextInput
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                placeholder="نام"
                                placeholderTextColor="#3f3f46"
                                
        style={s`  bg-gray-300 text-gray-700 rounded-2xl 
        w-full text-center my-4
                                `}
                                />
                                 <Text style={styles.line}> </Text>
    
    {/* {(errors.name) && <Text  
                    style={{color:"#f00",fontFamily:"vazir",
                    fontSize:14,}} >{errors.name}</Text>} 
                  <Text style={{color:"#000",fontFamily:"vazir",color:"#f00",fontSize:14
               
                }}>{err}</Text>  */}
    
    
    <TextInput
                                value={values.family}
                                onChangeText={handleChange('family')}
                                onBlur={handleBlur('family')}
                                placeholder="نام خانوادگی"
                                placeholderTextColor="#3f3f46"
                                
        style={s`  bg-gray-300 text-gray-700 rounded-2xl 
        w-full text-center my-4
                                `}
                                />
    
    <Text style={styles.line}> </Text>
    
    {(errors.family) && <Text  
                    style={{color:"#f00",fontFamily:"vazir",
                    fontSize:14,}} >{errors.family}</Text>} 
                  <Text style={{color:"#000",fontFamily:"vazir"
                  ,color:"#f00",fontSize:14,marginTop:"2%",marginBottom:"5%"
               
                }}>{err}</Text> 
    
    
    
    
    
                   </View>
    
                   <TouchableOpacity  
                   onPress={handleSubmit}
                   style={s`py-3 bg-yellow-400 rounded-2xl my-16 `}>
                    <Text style={s`  font-bold text-center text-gray-700 text-xl`}>
                        ادامه</Text>
                   </TouchableOpacity>
     </>}
    
                </Formik>
    
    
    
    
    
    
    
    
    
    
    
        </View>
    
    </View>
    
    </View>
    
    
    )
    }
    
    ////09128528585
    
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
     width: '95%',
     borderTopWidth: 2,
     borderColor: "#fff",
     alignSelf: 'center',
     height: 0,
    //marginVertical:'2%'
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
    
      
    export {Signup};
