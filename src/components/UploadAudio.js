

import React, { useState,useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import fs from 'react-native-fs'
import Icon2 from "react-native-vector-icons/FontAwesome";
import { handleChooseaudio} from "./UploadItems"



import {usefetchuser} from './usefetchuser';


const audioRecorderPlayer = new AudioRecorderPlayer();
const UploadAudio = (id) => {
console.log("idaudio,,,,,in id object ast v integer nist b log tavajoh kon",id)
    const [recordSecs, setRecordSecs] = useState(0);
    const [recordTime, setRecordTime] = useState('');
    const [endaudio,setendaudio] = useState();
    const [currentPositionSec, setCurrentPositionSec] = useState(0);
    const [currentDurationSec, setCurrentDurationSec] = useState(0);
    const [playTime, setPlayTime] = useState('');
    const [duration, setDuration] = useState('');
    // const [mp3FilePath, setMp3FilePath] = useState('');
    // const [isRecording, setIsRecording] = useState(false);
    // const [extensions, setextensions] = useState(['mp4']);
    const {request:requestsend} = usefetchuser('tickets/send-message')
    const { request } = usefetchuser('tickets/chat')
    const [Result, setResult] = useState();
    const [msg, setmsg] = useState('');
    const [data,setdata] = useState([]);

    
    const setAPI = async () => {
      try {
        const res = await request({
          id: id.id,
        });
    
       // console.log('audiosetapi----->', res.data);
        console.log('s333333----->', res.data.sender);
    
        if (res.error === true) {
          alert(res.message);
        } else {
          if (res.data === null || res.data === undefined || typeof res.data === 'undefined') {
            setmessages('error');
          } else {
            setdata(res.data);
          }
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    


    const onStartRecord = async () => {
    
      const result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
          setRecordSecs(e.currentPosition);
          setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
        });
       
    
        console.log("start-result-audio=>",result);
      };


      const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setRecordSecs(0);
         console.log("stop-result-audio=>",result);
       //  setResult(result)
         uploadaudio(result)
      };


      // const onStartPlay = async () => {
      //   console.log('onStartPlay');
      //   const msg = await audioRecorderPlayer.startPlayer();
      //   console.log(msg);
      //   audioRecorderPlayer.addPlayBackListener((e) => {
      //     setCurrentPositionSec(e.currentPosition);
      //     setCurrentDurationSec(e.duration);
      //     setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      //     setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      //   });
      // };



    //   const uploadImage = (result) => {
      
    //      handleChooseaudio(result).then((audio) => {
    //          console.log("audioname===>",audio)
    //          requestsend({
    //                  id:id,
                
    //                 image:"",
    //                 text:"",
    //                  video: '',
    //                  audio:audio,
    //                  document: ''
    //              })
    //          }).catch(error => {
    //              console.error("خطا ارسال  ", error);
    //          });
    //  }
 
////////////////////////////////////////////////////////////////////

const uploadaudio= async (result) => {

    console.log("resultaudio===>", result);
  try {
    const audio = await handleChooseaudio(result);
    console.log("audioname===>", audio);

    await requestsend({
      id: id.id,
      image: "",
      text: "",
      video: "",
      audio:audio,
      document: ""
    })
    // .then(res=>{
    //   console.log("audioend",res)
    //    setmsg(res.message)
    // })
 } catch (error) {
   console.error("خطا ارسال ", error);
   }
 //  setAPI()
};

////////////////////nnnnn/////////////////


/////44444444444444444444444444444444444444444444444444
// const  uploadaudio = (result) => {
//     console.log("ttttttt===>", result);
//     handleChooseaudio(result).then((audio) => {
//         console.log("audioname===>", audio);


//         setendaudio(audio)
//          requestsend({
//                  id:id,
//                 image: '',
//                 text:'',
//                  video: '',
//                  audio:audio,
//                  document: ''
//              })
//          }).catch(error => {
//              console.error("خطا در انتخاب : ", error);
            
//           });
         
     
 //}
///////////////////////////////////////////////////








/////////////////////////////////
//  useEffect(() => {
//   // Perform side effects or data fetching here based on 'someProp'
//   // For example, you can use the fetch API for data fetching
//   requestsend({
//     id:id,
//    image: '',
//    text:'',
//     video: '',
//     audio:endaudio,
//     document: ''
// }).then(response => response.json())
//     .then(data => {
//      // setData(data); // Update the state with the fetched data
//      console.log("end=>",data)
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }, [endaudio]); // The effect will re-run whenever 'someProp' changes




//0000000000000000000000000000000000000000000000000000
// const uploadaudio = (result) => {
//     return new Promise((resolve, reject) => {
//       console.log("ttttttt===>", result);
      
//       handleChooseaudio(result)
//         .then((audio) => {
//           console.log("audioname===>", audio);
//           return requestsend({
//             id: id,
//             image: '',
//             text: '',
//             video: '',
//             audio: audio,
//             document: ''
//           });
//         })
//         .then((response) => {
//           resolve(response); // Resolve the promise with the response from requestsend
//         })
//         .catch(error => {
//           console.error("خطا در انتخاب : ", error);
//           reject(error); // Reject the promise with the error
//         });
//     });
//   }
  



/////////////////////////////////////////////////////////////////////

    //  const onPressOut = async () => {
    //     try {
    //       //await onStopRecord();
    //       await onStopRecord;
    //     //   //await uploadImage();
    //     //   await uploadImage;
    //     } catch (error) {
    //       // Handle any errors that may occur during onStopRecord or uploadImage.
    //       console.error(error);
    //     }
    //   };
      


  return (
    <View>
   <TouchableOpacity  onPressIn={onStartRecord} onPressOut={onStopRecord}>
              <Icon2 style={{ padding: 10, }} name="microphone" size={28} color="#f0f" />
             </TouchableOpacity>
            {/* <Button title="Start Playback" onPress={onStartPlay} /> */}
            <Text style={{color:"#fff"}}>{Result}</Text>
            <Text style={{color:"#fff"}}>{msg}</Text>
    </View>
  )
}

export {UploadAudio}










