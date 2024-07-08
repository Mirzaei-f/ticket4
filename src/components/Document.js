// import moment from 'jalali-moment';
// import React, { memo, useCallback, useEffect, useState } from 'react';
// import { Button, FlatList, Image, Pressable, ImageBackground, 
//     StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, ActivityIndicator, 
//     ToastAndroid } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { baseUrl, imageUrl } from "../components/Addresses";
// import Icon from "react-native-vector-icons/MaterialIcons";
// const Document = ({source}) => {

// console.log("document2",source)



//   return (
//     <View>
//       {/* <Text>Document</Text> */}
//       <Image style={{ width:200, height: 100, }} 
//       //blurRadius={10} 
//       resizeMode='stretch' resizeMethod='resize'
//        source={require('../assets/images/logomahsa2.jpg')} />
//             <Pressable onPress={() => { Linking.openURL(`${baseUrl}${imageUrl}/${source}`) }} 
//            style={styles.documentShow}
//             >
//                 <Icon name='file-download' size={RFValue(40)} style={{ color: "#000"}} />
                
//             </Pressable>
//     </View>
//   )
// }

// export { Document}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//      },
//     // bottom: {
//     //     backgroundColor: "#fff",
//     //     flexDirection: 'row',
//     //     alignItems: 'center',
//     //     paddingHorizontal: 8
//     // },
//     // input: {
//     //     flex: 1,
//     //     fontSize: RFValue(12),
//     //     padding: 10,
//     //     fontFamily: 'BYekan'
//     // },
//     // send: {
//     //     alignSelf: 'flex-end',
//     //     backgroundColor: 'rgba(105,185,246,1)',
//     // },
//     // receive: {
//     //     alignSelf: 'flex-start',
//     //     backgroundColor: White,
//     // },
//     // chatItemCommon: {
//     //     marginBottom: 8,
//     //     borderRadius: 10,
//     // },
//     // msgtxt: {
//     //     paddingHorizontal: 10,
//     //     paddingVertical: 8,
//     //     maxWidth: '90%',
//     //     fontSize: RFValue(12),
//     //     color: Black,
//     //     fontFamily: 'BYekan',
//     //     lineHeight: 25
//     // },
//     // listStyle: {
//     //     paddingHorizontal: 10,
//     //     paddingBottom: 20
//     // },
//     // sendIcon: {
//     //     transform: [{ rotate: '180deg' }],
//     // },
//     // fileContainer: {
//     //     width: windowWidth / 1.5, height: 250, margin: 5, borderRadius: 10, overflow: 'hidden'
//     // },
//     // audioContainer: {
//     //     width: windowWidth / 1.5, height: 70, margin: 5, borderRadius: 10, overflow: 'hidden'
//     // },
//     documentShow: {
//        position: 'absolute', 
//         width:190, height:110, justifyContent: 'center', alignItems: 'center',
//         //backgroundColor:"red",justifyContent:"center"
//     },
//     // fileModal: {
//     //     height: 200,
//     //     backgroundColor: White,
//     //     flexDirection: 'row'
//     // },
//     // modalSec: {
//     //     flex: 1,
//     //     justifyContent: 'center',
//     //     alignItems: 'center'
//     // },
//     // modalIcons: {
//     //     fontSize: RFValue(25),
//     //     color: Gray
//     // },
//     // modalTexts: {
//     //     fontSize: RFValue(12),
//     //     color: Gray,
//     //     fontFamily: "BYekan"
//     // }
// })
import moment from 'jalali-moment';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Button, FlatList, Image, Pressable, ImageBackground, 
    StyleSheet, Text, TextInput, TouchableOpacity, View, Linking, ActivityIndicator, 
    ToastAndroid } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { baseUrl, imageUrl } from "../components/Addresses";
import Icon from "react-native-vector-icons/MaterialIcons";
const Document = ({source}) => {

console.log("document2",source)



  return (
    <View>
      {/* <Text>Document</Text> */}
      <Image style={{ width:200, height: 100, }} 
      //blurRadius={10} 
      resizeMode='stretch' resizeMethod='resize'
       source={require('../assets/images/logomahsa2.jpg')} />
            <Pressable onPress={() => { Linking.openURL(`${baseUrl}${imageUrl}/${source}`) }} 
           style={styles.documentShow}
            >
                <Icon name='file-download' size={RFValue(40)} style={{ color: "#000"}} />
                
            </Pressable>
    </View>
  )
}

export {Document}


 const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//      },
    // bottom: {
    //     backgroundColor: "#fff",
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     paddingHorizontal: 8
    // },
    // input: {
    //     flex: 1,
    //     fontSize: RFValue(12),
    //     padding: 10,
    //     fontFamily: 'BYekan'
    // },
    // send: {
    //     alignSelf: 'flex-end',
    //     backgroundColor: 'rgba(105,185,246,1)',
    // },
    // receive: {
    //     alignSelf: 'flex-start',
    //     backgroundColor: White,
    // },
    // chatItemCommon: {
    //     marginBottom: 8,
    //     borderRadius: 10,
    // },
    // msgtxt: {
    //     paddingHorizontal: 10,
    //     paddingVertical: 8,
    //     maxWidth: '90%',
    //     fontSize: RFValue(12),
    //     color: Black,
    //     fontFamily: 'BYekan',
    //     lineHeight: 25
    // },
    // listStyle: {
    //     paddingHorizontal: 10,
    //     paddingBottom: 20
    // },
    // sendIcon: {
    //     transform: [{ rotate: '180deg' }],
    // },
    // fileContainer: {
    //     width: windowWidth / 1.5, height: 250, margin: 5, borderRadius: 10, overflow: 'hidden'
    // },
    // audioContainer: {
    //     width: windowWidth / 1.5, height: 70, margin: 5, borderRadius: 10, overflow: 'hidden'
   // },
    documentShow: {
       position: 'absolute', 
        width:190, height:110, justifyContent: 'center', alignItems: 'center',
        //backgroundColor:"red",justifyContent:"center"
    },
    // fileModal: {
    //     height: 200,
    //     backgroundColor: White,
    //     flexDirection: 'row'
    // },
    // modalSec: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // modalIcons: {
    //     fontSize: RFValue(25),
    //     color: Gray
    // },
    // modalTexts: {
    //     fontSize: RFValue(12),
    //     color: Gray,
    //     fontFamily: "BYekan"
    // }
 })