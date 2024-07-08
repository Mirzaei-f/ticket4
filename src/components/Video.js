// export default YourComponent;
import { View, Text ,StyleSheet,Image,Dimensions} from 'react-native'
import     { React,useRef,useState} from 'react'
import Video1 from "react-native-video"
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { baseUrl, imageUrl } from "../components/Addresses";


import { RFValue } from 'react-native-responsive-fontsize';
import Icon from "react-native-vector-icons/MaterialIcons";

const width=Dimensions.get("window").width;

const Video =({source}) => {



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
const [ScreenType,setScreenType] = useState("contain");
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


const enterFullScreen=()=>{};

const onFullScreen=()=>{

// setIsFullScreen(isFullScreen)
// if(ScreenType="contain")
// setScreenType("cover")
// else setScreenType("contain")




if (ScreenType == 'contain'){
  setScreenType('cover');
}

else{
  setScreenType('contain');
}






}








  return (
    <View   
    //style={{alignItems:"center",top:0,position:"relative"}}
    >
{/* 
<Image style={{ width:300, height: 200, }} 
      //blurRadius={10} 
      resizeMode='stretch' resizeMethod='resize'
       source={require('../assets/images/logomahsa2.jpg')} />  */}
{/* <Icon name='file-download' size={RFValue(40)} style={{ color: "#000",position:"absolute",alignSelf:"center",}} /> */}
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
                resizeMode={'stretch'}
              source={{uri:`${baseUrl}${imageUrl}/${source}`}}
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
                onFullScreen={onFullScreen}

                sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
            />








    </View>
  )
}

export {Video}





var styles = StyleSheet.create({
    // backgroundVideo: {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
    // },





    backgroundVideo: {


      height: 350,
     // width: '20%',
    //  width:270,
    width:width/1.5,
     // backgroundColor:"#f0f",
     borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopLeftRadius: 20,


  },
  mediaControls: {
     // height: '100%',
     height:350,
     // flex: 1,
      alignSelf: 'center',
  },
  });



