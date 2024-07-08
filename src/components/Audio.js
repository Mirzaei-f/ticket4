


import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import fs from 'react-native-fs'
import Icon2 from "react-native-vector-icons/FontAwesome";

import RNFetchBlob from 'rn-fetch-blob';
//import {baseUrl,url} from "./Addresses";

//import { useFetchUpload } from './useFetchUpload';




//const { request } =useFetchUpload('main/upload')
const audioRecorderPlayer = new AudioRecorderPlayer();

const Audio = () => {
    const [recordSecs, setRecordSecs] = useState(0);
    const [recordTime, setRecordTime] = useState('');
    const [currentPositionSec, setCurrentPositionSec] = useState(0);
    const [currentDurationSec, setCurrentDurationSec] = useState(0);
    const [playTime, setPlayTime] = useState('');
    const [duration, setDuration] = useState('');
    const [mp3FilePath, setMp3FilePath] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [extensions, setextensions] = useState(['mp4']);

    //const [data, setdata] = useState([])
    //const [datasend,setdatasend] = useState([])
    // const [messages, setmessages] = useState('')

    const name = new Date().getTime();

    const onStartRecord = async () => {
      
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




        // // Get the MP3 file path using rn-fetch-blob
        // const dirs = RNFetchBlob.fs.dirs;
        // const mp3Path = Platform.select({
        //     // ios: `${dirs.DocumentDir}/hello.m4a`,
        //     // android: `${dirs.CacheDir}/hello.mp3`,
        //     //ios: '${new Date().getTime()}.m4a',
        //     // android: `${dirs.CacheDir}/${new Date().getTime()}.mp3`,
        //     android: `${dirs.CacheDir}/${name}.mp3`,
        // });

        // setMp3FilePath(mp3Path);


        uploadMp3ToServer(result)
    };

    const onStartPlay = async () => {
        const _catch = await RNFetchBlob.fs.readFile('file:////data/user/0/com.ticket/cache/sound.mp4')
        console.log(_catch)
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



























    //   const uploadAudioFile = async () => {
    //     if (mp3FilePath) {
    //       const formData = new FormData();
    //       formData.append('audio', {
    //         uri:mp3FilePath,
    //         type: "audio/mp3",
    //         name: name,
    //       });

    //       try {

    //         request(
    //             {
    //                 formData
    //             }


    //         ).then(res => {


    //             console.log('Sendaudio----->', res.data)

    //             if (res.error == true) {
    //                 alert(res.message)
    //             }
    //             else {
    //                 if (res.data == [] || res.data == undefined || typeof res.data == 'undefined') {
    //                     setmessages('error')
    //                 } else {


    //                     setdata(res.data)

    //                 }
    //             }

    //         })

    //         ////////////////////////////////////////////////////////

    //       } catch (error) {
    //         // Handle network or other errors
    //         console.error('File upload error:', error);
    //       }
    //     }
    //   };

    const createFile = async (data) => {
        const catchDir = fs.CachesDirectoryPath;
        const dir = await fs.readDir(catchDir)

        console.log({ dir })
        return new Promise((res) => {
            const file = new FormData();
            // file.append('data', stream);
            // file.append('extensions', extensions);
            res(file)
        })
    }


    const uploadMp3ToServer = async (data) => {
        try {
            createFile(data).then(async file => {
                console.log({ file })
                const response = await fetch('https://mahsaonlin.com/admin/guest/main/upload', {
                    method: 'POST',
                    headers: {
                        'Content-Type': "multipart/form-data"
                    },
                    body: file
                });

                // Handle the server response as needed
                const _data = await response.json();
                console.log('Upload response:', _data);
            })


        } catch (error) {
            // Handle any errors that occur during the upload
            console.error('Error uploading MP3:', error);
        }
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




        // <View>
        //       <TouchableWithoutFeedback
        //         onPressIn={onStartRecord }
        //         onPressOut={onStopRecord }
        //       >
        //         <View>
        //           <Text>{isRecording ? 'Recording...' : 'Press and hold to record'}</Text>
        //         </View>
        //       </TouchableWithoutFeedback>

        //       {/* Display the MP3 file path */}
        //       <Text>MP3 File Path: {mp3FilePath}</Text>
        //     </View>

        <View>


            <TouchableOpacity  onPressIn={onStartRecord} onPressOut={onStopRecord}>
              <Icon2 style={{ padding: 10, }} name="microphone" size={28} color="#f0f" />
             </TouchableOpacity>
            <Button title="Start Playback" onPress={onStartPlay} />
            <Text style={{ color: "#fff" }}>{mp3FilePath}</Text>

        </View>



    );
};

export { Audio }
