
import { View, Text, StyleSheet, Image } from 'react-native'
import { React, useRef, useState } from 'react'
import Video1 from "react-native-video"
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { baseUrl, imageUrl } from "../components/Addresses";


import { RFValue } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/MaterialIcons";

const AudioPlayer = ({ source }) => {


    //  console.log("source",source)
    // The video we will play on the player.
    //const video = require('../assets/video.mp4');

    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);

    //const [ScreenType,setScreenType] = useState("contain");
    const [ScreenType, setScreenType] = useState("contain");
    const onSeek = (seek) => {
        videoPlayer?.current.seek(seek);
    };

    const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
    };

    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };

    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {

        videoPlayer.current.seek(0); // this will set first frame of video as thumbnail
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);

    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };


    const enterFullScreen = () => { };

    const onFullScreen = () => {

        // setIsFullScreen(isFullScreen)
        // if(ScreenType="contain")
        // setScreenType("cover")
        // else setScreenType("contain")




        if (ScreenType == 'contain') {
            setScreenType('cover');
        }

        else {
            setScreenType('contain');
        }






    }



    return (
        <View
        //style={{alignItems:"center",top:0,position:"relative"}}
        >

            <Image style={{ width: 300, height: 200, }}
                //blurRadius={10} 
                resizeMode='stretch' resizeMethod='resize'
                source={require('../assets/images/logomahsa2.jpg')} />


            {/* {/* <Icon name='play-circle-filled' size={RFValue(60)} style={{ color: "#000",position:"absolute",alignSelf:"center",}} /> */}
            <Video1
                onEnd={onEnd}
                //  onError={onError}
                onLoad={onLoad}
                // onLoad={() => {
                //   videoPlayer.current.seek(0); // this will set first frame of video as thumbnail
                // }}
                onLoadStart={onLoadStart}
                posterResizeMode={'cover'}
                onProgress={onProgress}
                paused={paused}
                ref={(ref) => (videoPlayer.current = ref)}
                resizeMode={'contain'}
                source={{ uri: `${baseUrl}${imageUrl}/${source}` }}
                //  thumbnail={require('../assets/images/logomahsa2.jpg')}
                style={styles.backgroundVideo}
            //source={{uri:"https://mahsaonlin.com/upload/chats/6__VIDEO__1693406577.mp4"}}
            />


            <MediaControls
                isFullScreen={false}
                duration={duration}
                isLoading={isLoading}
                progress={currentTime}
                onPaused={onPaused}
                onReplay={onReplay}
                onSeek={onSeek}
                onSeeking={onSeeking}
                mainColor={"red"}
                playerState={playerState}
                //  onFullScreen={onFullScreen}

                sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
            />








        </View>

    )
}

export { AudioPlayer }





var styles = StyleSheet.create({





    backgroundVideo: {


        height: 140,

        width: 270,




    },
    mediaControls: {

        height: 30,

        alignSelf: 'center',
        paddingVertical: 20
    },
});