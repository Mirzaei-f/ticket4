import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler } from "react-native";
    


import {Formik} from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";
import { useFetch } from "../../components/useFetch";
import { Context } from "../../components/Context";
//import Apptimestamp from './timestamp/Apptimestamp';

import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import Mahsa from "../../assets/images/logomahsa2.jpg";

// const validation = yup.object().shape({
//     code: yup.string().required('لطفا کد تایید خود را وارد کنید '),
// })

const Code = (props) => {


 const {request}=useFetch('register/verify')
 const {request:requestv}=useFetch('register/resend-code')
 
const {phone}=props.route.params
 const [pass,setpass]=useState('')
 const [err,seterr]=useState('')
 const navigation=useNavigation()
 const [starttimer, setstarttimer] = useState(false);
 const [state,setstate]=useState({number:35})

 
 const mycode=()=>{
    requestv({
            mobile:phone
            //mobile:"09379661534"
        }).then(response => {
            console.log(response)
        })
    }

    
useEffect(()=>{
 setInterval(()=>{
          setstate(old=>({number: old.number - 1}))
      },1000)
  
  },[starttimer])
  
  
    useEffect(() => {
        const backAction =() => {

                navigation.navigate('login')

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
   
    
    
    const setasync = async (key, value) => {
        await AsyncStorage.setItem(key, value)
        console.log(value);
    }
   
        const Removeauth = async (key) => {
              
          try {
              await AsyncStorage.removeItem(key);
              
      navigation.navigate('login')
              return console.log("removed");
      
          } catch (error) {
              console.error("error ", error);
          }
      }
      
          
const Exit=()=>{
    Removeauth('auth');
    //navigation.navigate("Splash")
    
  }     

    return (

<View style={[s`flex-1 `,{backgroundColor:"#5221BD",}]}>

<SafeAreaView  style={[s`flex`,{height:Dimensions.get("window").width>576?"47%":"45%"}]}>

    <View style={s`flex-row justify-center rounded `} >

 {/* <Image  source={Mahsa} style={s` w-36 h-36  mt-1 mb-2 rounded-full `}  />  */}

 <Image  source={Mahsa} 
style={[s`  rounded-full `,{height:Dimensions.get("window").width>576? 144:250,
width:Dimensions.get("window").width>576?144:250,marginTop:Dimensions.get("window").width>576? "1%":"5%",
marginBottom:Dimensions.get("window").width>576? "1%":"5%",
}]}  /> 

</View>
</SafeAreaView>


<View 
style={[{
   // height:Dimensions.get("window").width>576?"5%":"80%",
borderTopRightRadius:50,
        borderTopLeftRadius:50,
},s`flex-1 bg-white px-8  `,{paddingTop:Dimensions.get("window").width>576? "2%":"5%"}]}>
<View  style={s` form   `}>
    <Text  style={[s` text-gray-900 ml-12   text-lg font-medium`,{
marginBottom:Dimensions.get("window").width>576? "4%":"2%"

    }]}>کد تایید را وارد کنید</Text>



    <Formik 
       // validationSchema={validation} 
        initialValues={{code: ''}}
         onSubmit={(values, {setSubmitting}) => {

             request({
      mobile:phone,
       //code:pass
       code:values.code
}).then(response => {
    console.log('response--->',response)
  //  console.log('response--autch--page-code--->',response.data.auth)
    if(response.error === false){
      
       // setauth(response.data.auth_key)
        if(response.data.signup === false){
            setasync('auth', response.data.auth)
            navigation.navigate('user',{screen:'paneluser'})
        }
        else {
           // navigation.navigate('Profile')
          
           navigation.navigate('signup')
        }
    }else {
        console.log('response.message--->',response.message)
        seterr(response.message)
    }
}).catch(error => {
    console.log('error---cach',error)
    seterr(response.message)

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
                        value={values.code}
                        onChangeText={handleChange('code')}
                        onBlur={handleBlur('code')}
                        //placeholder="09"
                        placeholderTextColor="#3f3f46"
                        // style={{fontSize:RFValue(24),
                        //    // marginBottom:"15%",
                        //     backgroundColor:'#d5d5d5',
                        //     width:(Dimensions.get("window").width/100)*80,borderRadius:10,color:"#000",textAlign:"center"}}
                        
style={s`  bg-gray-300 text-gray-700 rounded-2xl 
w-full text-center 
                        `}
                        />
{/*             
{(errors.code) && <Text  
            style={{color:"#f00",fontFamily:"vazir",
            fontSize:14,}} >{errors.code}</Text>}  */}
          <Text style={{color:"#000",fontFamily:"vazir",color:"#f00",fontSize:14
       
        }}>{err}</Text> 
       
           
           </View>

           <TouchableOpacity  
           onPress={handleSubmit}
           style={[s` bg-yellow-400 rounded-2xl `,
           {
            paddingVertical:Dimensions.get("window").width>576? "1%":"5%",
           marginBottom:Dimensions.get("window").width>576? "10%":"5%",
           marginTop:Dimensions.get("window").width>576? "2%":"5%"
           }]}>
            <Text 
            
            style={s`  font-bold text-center text-gray-700 text-xl`}>
                ادامه</Text>
           </TouchableOpacity>

           {   state.number > 0 ? <>

                                <Text style={[styles.timer,{display: state.number > 1 ?  null : 'none'}]}> {state.number}</Text>
                            </> :<>

                                   <TouchableOpacity onPress={()=>{
                                       setstate({number:35})
                                       mycode()
                                   }} >
                                       <Text style={styles.textagaintimer}>دریافت مجدد کد تایید</Text>
                                   </TouchableOpacity>

                                    </>
                        }



</>}

        </Formik>
{/* 

<>
<TouchableOpacity 
  //onPress={() => Removeauth('auth') }
  onPress={Exit }
  
  style={styles.touch}>
  <Text style={styles.txt}>خروج از حساب کاربری</Text>
</TouchableOpacity>
</> */}
        







</View>

</View>

</View>





    );
};




const styles=StyleSheet.create({
    timer:{
        fontSize:RFValue(23),
        color:'black'
    },
    textagaintimer:{
        color:'black',
         fontSize:RFValue(16),
         fontFamily:'BYekan.ttf'
     },

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
      marginBottom:'7%',
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




export {Code};


