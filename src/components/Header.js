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
import {RFValue} from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";


const Header=()=>{

    const navigation=useNavigation()

return(
    
    <View style={Styles.header}>

                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name={'menu'} size={RFValue(39)} color={"#FFF"} style={{margin: '2%'}}/>
                           
                        </TouchableOpacity>
    
    </View>
)
}
export {Header}

const Styles=StyleSheet.create({

    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        height:(Dimensions.get('window').height /100 )*7,
        //backgroundColor:'white'
        backgroundColor:' #5220BD'
       
    },})