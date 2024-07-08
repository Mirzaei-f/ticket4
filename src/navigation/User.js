import React from "react";
import {Text, View,SafeAreaView} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Paneluser} from "../views/user/Paneluser";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { Drawerpage } from "../views/user/Drawer";
import { Live } from "../views/user/Live";
import { Test } from "../views/user/Test";
import {TicketList } from "../views/user/TicketList";
import {Ticket}  from "../views/user/Ticket"
import { UploadFiles } from "../components/UploadFiles";
const Drawer=createDrawerNavigator()

const Stack=createNativeStackNavigator()

const User=()=>{

    return(
        <Drawer.Navigator  
       // initialRouteName={'callmahsapage'} 
        screenOptions={{headerShown: false,drawerPosition: 'right'}} drawerContent={()=><Drawerpage/>}>
    

 

             <Drawer.Screen 
              options={{ unmountOnBlur: true }} 
             name={'paneluser'} component={Paneluser}/> 
            <Drawer.Screen 
            options={{ unmountOnBlur: true }} 
            name={'live'} component={Live}/>
          
            <Drawer.Screen name={'test'} component={Test}/>
            <Drawer.Screen name={'uploadfiles'} component={UploadFiles}/>
            <Drawer.Screen     options={{ unmountOnBlur: true }}    name={'ticketlist'} component={TicketList}/>
          
            <Stack.Screen     options={{ unmountOnBlur: true }}   name={'ticket'} component={Ticket}/>
        </Drawer.Navigator>
    )
}

export {User}
