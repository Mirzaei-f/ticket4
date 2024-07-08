     import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Splash } from "../views/user/Splash";
import { Login } from "../views/user/Login";
import { Signup } from "../views/user/Signup";
import { Code } from "../views/user/Code";



const Stack = createNativeStackNavigator();


const Guest=()=>{

    return(

        <Stack.Navigator initialRouteName={'splash'} screenOptions={{headerShown: false}}>
            <Stack.Screen name={'splash'} component={Splash}/>
        <Stack.Screen name={'login'} component={Login}/>
        <Stack.Screen name={'signup'} component={Signup}/>
        <Stack.Screen name={'code'} component={Code}/>
      
        </Stack.Navigator>

    )
}

export {Guest}
