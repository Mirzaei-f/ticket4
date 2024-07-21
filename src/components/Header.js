import React, {useState,useEffect} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    ScrollView,
    Image,BackHandler,Alert
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {RFValue} from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import Group396 from "../assets/images/Group396.png"

const Header=()=>{

    const navigation=useNavigation()

return(
    
    // <View style={}>

                        <TouchableOpacity  style={ Styles.header}  
                         onPress={() => navigation.openDrawer()}>
                            {/* <Icon name={'menu'} size={RFValue(39)} color={"#B828B9"} style={{margin: '2%'}}/> */}
                            <Entypo name={'dots-three-vertical'} size={RFValue(32)} color={"#B828B9"} style={{margin: '2%'}}/>
                            <Image source={Group396} style={{width:"40%",height:"70%"}}/>
                           
                        </TouchableOpacity>
    
    // </View>
)
}
export {Header}

const Styles=StyleSheet.create({

    header:{
        width:"100%",   
        flexDirection:'row-reverse',
                         alignItems:'center',
        justifyContent:'space-between',
       paddingHorizontal:"2%",
        height:(Dimensions.get('window').height /100 )*7,
        //backgroundColor:'red'
    
       
    },})