// 







////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   PermissionsAndroid,
// } from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// const audioRecorderPlayer = new AudioRecorderPlayer();



// const Test = () => {




//   const [isRecording, setIsRecording] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   const requestPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       ]);

//       if (
//         granted['android.permission.RECORD_AUDIO'] === 'granted' &&
//         granted['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
//       ) {
//         console.log('Permissions granted.');
//       } else {
//         console.log('Permissions denied.');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   // const startRecording = async () => {
//   //   const result = await audioRecorderPlayer.startRecorder();
//   //   console.log(result);
//   //   setIsRecording(true);
//   // };

//   // const stopRecording = async () => {
//   //   const result = await audioRecorderPlayer.stopRecorder();
//   //   console.log(result);
//   //   setIsRecording(false);
//   // };

//   // const startPlaying = async () => {
//   //   const path = audioRecorderPlayer.getPath().replace('file://', '');
//   //   const result = await audioRecorderPlayer.startPlayer(path);
//   //   console.log(result);
//   //   setIsPlaying(true);
//   // };

//   // const stopPlaying = async () => {
//   //   const result = await audioRecorderPlayer.stopPlayer();
//   //   console.log(result);
//   //   setIsPlaying(false);
//   // };

// const[recordSecs,setrecordSecs]=useState(0) 
// const[recordTime,setrecordTime]=useState(0)
 
// onStartRecord = async () => {
//   const result = await audioRecorderPlayer.startRecorder();
//   audioRecorderPlayer.addRecordBackListener((e) => {
    

//        setrecordSecs(e.currentPosition)
//     setrecordTime(audioRecorderPlayer.mmssss(
//         Math.floor(e.currentPosition)))
    
  

//   });
//   console.log(result);


//   setIsRecording(true);

// };

// onStopRecord = async () => {
//   const result = await audioRecorderPlayer.stopRecorder();
//   audioRecorderPlayer.removeRecordBackListener();
//   setrecordSecs(0)
//   setIsRecording(false);
//   console.log(result);
// };

// onStartPlay = async () => {
//   console.log('onStartPlay');
//   const msg = await audioRecorderPlayer.startPlayer();
//   console.log(msg);
//   audioRecorderPlayer.addPlayBackListener((e) => {
//     this.setState({
//       currentPositionSec: e.currentPosition,
//       currentDurationSec: e.duration,
//       playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
//       duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
//     });
//     return;
//   });
// };

// onPausePlay = async () => {
//   await audioRecorderPlayer.pausePlayer();
// };

// onStopPlay = async () => {
//   console.log('onStopPlay');
//   audioRecorderPlayer.stopPlayer();
//   audioRecorderPlayer.removePlayBackListener();
// };


//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Audio Recorder and Player</Text>
//     <TouchableOpacity
//       onPress={() => (isRecording ? stopRecording() : startRecording())}>
//       <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       onPress={() => (isPlaying ? stopPlaying() : startPlaying())}>
//       <Text>{isPlaying ? 'Stop Playing' : 'Start Playing'}</Text>
//     </TouchableOpacity>
//   </View>
//   )
// }

// export  {Test}






/////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { View, TouchableOpacity, Text} from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// const audioRecorderPlayer = new AudioRecorderPlayer();

//  const Test = () => {
//  const onStartRecord = async () => {
//   await audioRecorderPlayer.startRecorder();
//   audioRecorderPlayer.addRecordBackListener(e => {
//     console.log('Recording . . . ', e.current_position);
//      return;
//     });
//   };

//  const onStopRecord = async () => {
//   const audio = await audioRecorderPlayer.stopRecorder();
//   audioRecorderPlayer.removeRecordBackListener();
//   };

//  return (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'space-between'}}>
//    <TouchableOpacity onPress={onStartRecord}>
//      <Text>Start</Text>
//    </TouchableOpacity>

//    <TouchableOpacity onPress={onStopRecord}>
//      <Text>Stop</Text>
//    </TouchableOpacity>
//   </View>
//  );
// };


// export  {Test}



////////*****************************************************************
///*************************///////////****************************************************
///////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import RNFetchBlob from 'rn-fetch-blob';
const audioRecorderPlayer = new AudioRecorderPlayer();

const Test = () => {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('');
  const [duration, setDuration] = useState('');
  const [mp3FilePath, setMp3FilePath] = useState('');

  const [isRecording, setIsRecording] = useState(false);

  const name=new Date().getTime();

  const onStartRecord = async () => {

    
    // const dirs = RNFetchBlob.fs.dirs;
    // const path = Platform.select({
    //   ios: '${new Date().getTime()}.m4a',
    //   android: `${dirs.CacheDir}/${new Date().getTime()}.mp3`,
    //   // ios: `audio-${new Date().getTime()}.m4a`,
    //   // android: `sdcard/audio-${new Date().getTime()}.mp3`
    // });


  // // Use rn-fetch-blob to create the file before recording
  // const uri = await audioRecorderPlayer.startRecorder(path);


  const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
    });
   
    //console.log("uriii",uri);
    console.log(result);
  };





  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);




// Get the MP3 file path using rn-fetch-blob
const dirs = RNFetchBlob.fs.dirs;
const mp3Path = Platform.select({
  // ios: `${dirs.DocumentDir}/hello.m4a`,
  // android: `${dirs.CacheDir}/hello.mp3`,
  ios: '${new Date().getTime()}.m4a',
 // android: `${dirs.CacheDir}/${new Date().getTime()}.mp3`,
 android: `${dirs.CacheDir}/${name}.mp3`,
});

setMp3FilePath(mp3Path);







    console.log("stop-result==>",result);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e) => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
    });
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const onStopPlay = () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  return (
    // <View>
    //   <Button title="Start Recording" onPress={onStartRecord} />
    //   <Button title="Stop Recording" onPress={onStopRecord} />
    //   <Button title="Start Playback" onPress={onStartPlay} />
    //   <Button title="Pause Playback" onPress={onPausePlay} />
    //   <Button title="Stop Playback" onPress={onStopPlay} />

    //   <View>
    //     <Text>Recorded Time: {recordTime}</Text>
    //     <Text>Current Position: {playTime}</Text>
    //     <Text>Duration: {duration}</Text>
    //      {/* Display the MP3 file path */}
    //   <Text>MP3 File Path: {mp3FilePath}</Text>
    //   </View>
    // </View>





<View>
      <TouchableOpacity
        onPressIn={onStartRecord }
        onPressOut={onStopRecord }
      >
        <View>
          <Text>{isRecording ? 'Recording...' : 'Press and hold to record'}</Text>
        </View>
      </TouchableOpacity>


      <Button title="Start Playback" onPress={onStartPlay} />
      <Button title="Pause Playback" onPress={onPausePlay} />
      <Button title="Stop Playback" onPress={onStopPlay} />




      {/* Display the MP3 file path */}
      <Text>MP3 File Path: {mp3FilePath}</Text>
    </View>




  );
};

export  {Test}
