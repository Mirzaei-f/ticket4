// import {TouchableOpacity ,View,Text} from "react-native"
// import * as ImagePicker from "react-native-image-picker"
// //import { baseUrl, url } from "./Address"
// //import { isSet } from "./isSet"
// //import DocumentPicker from 'react-native-document-picker'

// const UploadFiles = () => {




// ///////////////////////////////////////////////////////////////////////////

//     const uploadFile = async (data) => {
//         console.log("photo0000000000000000000000000000000000000000000000000000000000000000000000",data)
//         let fileName;
//         await fetch("https://mahsaonlin.com/admin/guest/main/upload", {
//             method: 'POST',
//             body: data
//         }).then(response => response.json())
//             .then(file => {
//                 if (isSet(file["data"])) {
//                     if (file["res"] == 1) {
//                         fileName = file["data"]["name"]
//                     }
//                 }
//             })
//         return fileName
//     }

//     function Library(type) {
//         return new Promise((resolve, reject) => {
//             try {
//                 ImagePicker.launchImageLibrary({
//                     mediaType: type
//                 }).then(async response => {
//                     if (!response.didCancel) {
//                         response.assets.forEach(file => {
//                             const fileApi = new FormData();
//                             if (type == 'video') {
//                                 let type2 = file.type.split('/')
//                                 fileApi.append("fileApi", {
//                                     uri: file.uri,
//                                     name: `${file.fileName}.${type2[1]}`,
//                                     type: file.type,
//                                 });
//                             } else {
//                                 fileApi.append("fileApi", {
//                                     uri: file.uri,
//                                     name: file.fileName,
//                                     type: file.type,
//                                 });

//                             }
//                             uploadFile(fileApi).then(fileName => {
//                                 resolve({
//                                     status: 'uploaded',
//                                     image: fileName
//                                 })
//                             })
//                         })
//                     }
//                 })
//             } catch (error) {
//                 reject({
//                     error: error,
//                     message: error.message
//                 })
//             }
//         })
//     }












//   return (
//     <View>
//       <TouchableOpacity 


//       onPress={Library("photo")}>
//        <Text>UploadFiles</Text> 
//         </TouchableOpacity >
//     </View>
//   )
// }

// export {UploadFiles}







// import React, { useState } from 'react';
// import { View, Text, Image, Button } from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';

// const UploadFiles = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // تابع برای باز کردن گالری عکس و انتخاب تصویر
//   const selectImage = () => {
//     const options = {
//       title: 'انتخاب تصویر',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     ImagePicker.launchImageLibrary(options, (response) => {
//         console.log("rtttttttt",response)
//       if (response.didCancel) {
//         console.log('11111111کاربر انتخاب تصویر را لغو کرد');
//       } else if (response.error) {
//         console.log('222222222خطا در انتخاب تصویر: ', response.error);
//       } else {
//         // تصویر انتخاب شده را در وضعیت برنامه ذخیره می‌کنیم
//         setSelectedImage({ uri: response.uri });
//         console.log("jjjjjjj",response.uri)
//       }
//     });
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>انتخاب تصویر و نمایش آن</Text>
//       <Button title="انتخاب تصویر" onPress={selectImage} />
//       {selectedImage && <Image source={selectedImage} style={{ width: 200, height: 200 }} />}
//     </View>
//   );
// };

// export {UploadFiles}




// import React, {useState} from 'react';
// import {Header, Image} from 'react-native-elements';
// import {StyleSheet, View, ActivityIndicator} from 'react-native';
// //import defaultAvatar from './profile.png';
// import ImagePicker from 'react-native-image-picker';

// const UploadFiles = () => {
//   const [avatar, setAvatar] = useState(defaultAvatar);

//   const handlePicker = () => {
//     // console.log('edit');
//     ImagePicker.showImagePicker({}, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         setAvatar({uri: response.uri});
//         // here we can call a API to upload image on server
//       }
//     });
//   };

//   return (
//     <View>
//       {/* <Header
//         centerComponent=
//         rightComponent=
//       /> */}
//       <View style={styles.imageContainer}>
//         <Image
//           source={avatar}
//           PlaceholderContent={<ActivityIndicator />}
//          // style=
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//   },
//   imageContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   body: {flex: 1},
// });

// export {UploadFiles}




import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet,TouchableOpacity } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { usefetchuser } from '../components/usefetchuser';
import Entypo from 'react-native-vector-icons/Entypo';
import { RFValue } from "react-native-responsive-fontsize";
const UploadFiles = (id) => {
console.log("idupload",id)
    const [photo, setphoto] = useState(null)

    const [filename, setfilename] = useState()
    const [messages, setmessages] = useState('')
    const [datasend,setdatasend] = useState([])

    const {request:requestsend} = usefetchuser('tickets/send-message')
    




    handleChoosePhoto = async () => {
        const options = {
            noData: true,
        };
        // launchImageLibrary(options, (response) => {
        //     console.log('Image Picker response', response);
        //   if (response.uri) {  
        //     setphoto(response)
        //   }
        // });

        const images = await launchImageLibrary(options)

        console.log("first", images.assets[0])

        const formdata = new FormData();
        formdata.append("data", {
            uri: images.assets[0].uri,
            type: images.assets[0].type,
            name: images.assets[0].fileName,
        });
        formdata.append("fileType", "image");

        console.log('formdata', formdata);

        let res = await fetch("https://mahsaonlin.com/admin/guest/main/upload",
            {
                method: "post",
                body: formdata,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )



        let responsejson = await res.json()
        console.log("responsejson", responsejson.data.file)
        setfilename( responsejson.data.file)
        

    };

    console.log('first', photo)
    ///////////////////////////////////////////////////////////////////////////
    
    const uploadImage= () => {
        // Library('image').then((image) => {
        requestsend(
            {
                id:id,
                text: "",
               //image: image["image"],
               image:filename,
                video: '',
                audio: '',
                document: ''
            }


        ).then(res => {


            console.log('uploadimage----->', res.data)
        
            if (res.error == true) {
                alert(res.message)
            }
            else {
                if (res.data == [] || res.data == undefined || typeof res.data == 'undefined') {
                    setmessages('error')
                } else {


                    setdatasend(res.data)

                }
            }

        })

   // })
        


    }



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* {photo && (
          <Image
         
        )} */}
            <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
            <Text>{filename}</Text>

{/*//////////////////////////////////////////////////////////////////////////////  */}

             <TouchableOpacity 
   onPress={uploadImage}
   //  style={styles.modalSec}
     >
                                <Entypo name='images' 
                                style={Styles.modalIcons}
                                 />
                                <Text 
                                style={Styles.modalTexts}
                                >تصویر</Text>
                            </TouchableOpacity> 






        </View>
    );

}
export { UploadFiles }


const Styles=StyleSheet.create({



    modalIcons: {
        fontSize: RFValue(25),
        color: "gray"
    },
    modalTexts: {
        fontSize: RFValue(12),
     //   color: Gray,
     color: "gray"
        //fontFamily: "BYekan"
    },



})