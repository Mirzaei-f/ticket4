    import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { usefetchuser } from '../components/usefetchuser';
import Entypo from 'react-native-vector-icons/Entypo';
import { RFValue } from "react-native-responsive-fontsize";

import { Issset } from "../components/isset"

import DocumentPicker from 'react-native-document-picker'





const uploadFile = async (formdata) => {
    console.log("formdatauploadfile",formdata)
    let fileName;
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
    console.log("uploadfileresponse",responsejson)
    if (responsejson.error !== true && responsejson.error !== 1) {
        fileName = responsejson.data.file
     
    }
    
    return fileName
}

// const handleChoosePhoto = async (type) => {
//     let image;
//     const options = {
//         noData: true,
//     };
//     const images = await launchImageLibrary(options)
//     const formdata = new FormData();
//     formdata.append("data", {
//         uri: images.assets[0].uri,
//         type: images.assets[0].type,
//         name: images.assets[0].fileName,
//     });

//     formdata.append("fileType", type);
//     uploadFile(formdata).then(fileName => {
//         image = fileName
//     });

//     console.log("fileName========555=>", image)
//     return image;
// }





const handleChoosePhoto = (type) => {
    return new Promise(async (resolve, reject) => {
        let image;
        const options = {
            noData: true,
        };

        try {
            const images = await launchImageLibrary(options);
            
            if (images.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('شما هیچ عکسی انتخاب نکرده اید !');
                                                
              } else{
            console.log("imagepickerresponse",images)
            const formdata = new FormData();
            formdata.append("data", {
                uri: images.assets[0].uri,
                type: images.assets[0].type,
                name: images.assets[0].fileName,
            });                                               
            formdata.append("fileType", type);

            uploadFile(formdata)
                .then(fileName => {
                    image = fileName;
                    console.log("fileName========555=>", image);
                    resolve(image);
                })
                .catch(error => {
                    reject(error);
                });


            }
        } catch (error) {
            reject(error);
        }
    });
};

///////////////////////444444444444444444444444444444444444//////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////


const handleChooseaudio = (uri) => {
    console.log("Uploading " + uri);

    return new Promise(async (resolve, reject) => {
        let audio;
        const options = {        
            noData: true,
        };

        try {
            // const images = await launchImageLibrary(options);
            // const formdata = new FormData();
            // formdata.append("data", {
            //     uri: images.assets[0].uri,
            //     type: images.assets[0].type,
            //     name: images.assets[0].fileName,
            // });
          
            let uriParts = uri.split('.');
            console.log("uriParts",uriParts)
            let fileType = uriParts[uriParts.length - 1];
            console.log("fileType",fileType)
          
            let formdata = new FormData();
            formdata.append('data', {
                uri:uri,
                name: `recording.${fileType}`,
                type: `video/mp4`,
            });
            formdata.append("fileType", "audio");

            uploadFile(formdata)
                .then(fileName => {
                    audio = fileName;
                    console.log("fileName========audiorecord=>",audio);
                    resolve(audio);
                })
                .catch(error => {
                    reject(error);
                });
        } catch (error) {
            reject(error);
        }
    });
};

///////////////////document///////////////////////////


function Document1() {
    
    return new Promise((resolve, reject) => {
      let doc;
        try {
            DocumentPicker.pick({ type: [DocumentPicker.types.docx, DocumentPicker.types.pdf] }).then(document => {

                console.log("documentpicker",document)
                
              ///  document.forEach(response => {
                    const formdata = new FormData();
                    formdata.append("data", {
                        uri: document[0].uri,
        
                       name:  document[0].name,
                       type:  document[0].type,
                       
                    });
                    formdata.append("fileType", "document");
                    // formdata.append("fileType", "document");
                    console.log("formsatadocument",formdata)
                    uploadFile(formdata).then(fileName => {
                        doc = fileName;
                        console.log("fileName=======document=>", doc);
                        resolve(doc);
                        
                    })
                })
          //  }).catch(e => console.log(e))
          
        } catch (error) {
            reject({
                error: error,
               // message: error.message
            })
        }
    })
}

//////////////////////////////////////////////////////ausiodoc/////////////////////////////////

function  Audio1() {
    

    return new Promise((resolve, reject) => {
        let audio1;
        try {
            DocumentPicker.pick({ type: DocumentPicker.types.audio }).then(audio => {
                console.log("documentpicker",audio)
               // console.log("documentpicker",audio)
                audio.forEach(response => {
                    console.log("first1111",response)
                    const  formdata = new FormData();
                    formdata.append("data", {
                        uri: response.uri,
                        name: response.name,
                        type: response.type,
                       
                      
                    });
                    formdata.append("fileType", "audio");
                    uploadFile(formdata).then(fileName => {
                        audio1=fileName;
                        resolve(audio1)
                    })
                })
            }).catch(e => console.log(e))
        } catch (error) {
            reject({
                error: error,
               // message: error.message
            })
        }
    })
}


//////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////uploadvideo//////////////////////////////////////////////////


const handleChooseVideo = (type) => {
    return new Promise(async (resolve, reject) => {
        let video;
        const options = {
          // noData: true,
          mediaType: 'video',

        };

        try {
            const video1 = await launchImageLibrary(options);
            console.log("videopickerresponse",video1)
            const formdata = new FormData();
        //    let type2 = video1.type.split('/')
            formdata.append("data", {
                uri: video1.assets[0].uri,
                type:video1.assets[0].type,
               name:video1.assets[0].fileName,
              //  name: `${video1.assets[0].fileName}.${type2[1]}`,
            });




            formdata.append("fileType", type);

            uploadFile(formdata)
                .then(fileName => {
                    video= fileName;
                    console.log("fileName========555=>",  video);
                    resolve( video);
                })
                .catch(error => {
                    reject(error);
                });
        } catch (error) {
            reject(error);
        }
    });
};
 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export { handleChoosePhoto,handleChooseaudio,Document1, Audio1 ,handleChooseVideo};