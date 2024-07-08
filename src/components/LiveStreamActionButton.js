import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Animated, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Gray, White } from '../../InitialValue/Colors';

const LiveStreamActionButton = ({ status, cameraViewRef, doFetch, props, viewer }) => {
  const [fadeAnimation] = useState(new Animated.Value(0))
  const { replace } = useNavigation();
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        })
      ])
    ).start();
  }, [])

  let backgroundColor;
  let text;
  let onPresss;
  let opacity;

  switch (status) {
    case 2001:
      backgroundColor = '#e74c3c';
      text = 'توقف';
      onPresss = () => cameraViewRef.current.stop();
      opacity = fadeAnimation;
      break;
    case 2002:
      backgroundColor = '#e74c3c';
      text = 'توقف';
      onPresss = () => cameraViewRef.current.stop();
      opacity = fadeAnimation;
      break;
    case 2004:
      backgroundColor = '#9b59b6';
      text = 'شروع پخش زنده';
      onPresss = () => cameraViewRef.current.start();
      opacity = 1
      break;
    case 2005:
      backgroundColor = '#e74c3c';
      text = 'توقف';
      onPresss = () => cameraViewRef.current.stop();
      opacity = fadeAnimation;
      break;
    case 2100:
      backgroundColor = '#e74c3c';
      text = 'توقف';
      onPresss = () => cameraViewRef.current.stop();
      opacity = fadeAnimation;
      break;
    case 0:
      backgroundColor = '#9b59b6';
      text = 'شروع پخش زنده';
      onPresss = () => cameraViewRef.current.start();
      opacity = 1
      break;
    default:
      ToastAndroid.showWithGravity(
        'اینترنت ضعیف احتمال قطعی',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      )
      break;
  }

  return (
    <View style={styles.container}>
      {
        !status == 2004 || !status == 0 &&
        <TouchableOpacity onPress={() => {
          Alert.alert(
            'اتمام و حذف پخش زنده',
            'توجه داشته باشید که اگر قبول کنید دیگر قادر به ادامه دادن پخش زنده امروز نخواهید بود. آیا مطمئن هستید ؟',
            [
              {
                text: "اتمام پخش زنده",
                onPress: () => {
                  doFetch({
                    idDataCourse: props.route.params.idDataCourse
                  })
                }
              },
              {
                text: "انصراف",
                style: 'cancel',
                onPress: () => { }
              }
            ]
          )


        }} style={styles.btnClose}>
          <Image
            style={styles.icoClose}
            source={require('../../../assets/images/close.png')}
            tintColor="white"
          />
        </TouchableOpacity>
      }
      <Animated.View style={{ opacity: opacity }}>
        <Image
          resizeMode={'contain'}
          resizeMethod={'resize'}
          source={require('../../../assets/images/ico_live.png')}
        />
      </Animated.View>
      <View style={{ ...styles.viewerIcon }}>
        <Image
          style={styles.icon}
          resizeMode={'contain'}
          resizeMethod={'resize'}
          source={require('../../../assets/images/ico_view.png')}
          tintColor="white"
        />
        <Text style={styles.viewerCount}>{viewer}</Text>
      </View>
      <TouchableOpacity onPress={onPresss} style={[styles.btnBeginLiveStream, { backgroundColor }]}>
        <Text style={styles.beginLiveStreamText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LiveStreamActionButton;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  btnBeginLiveStream: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 30,
    paddingVertical: 5,
  },
  beginLiveStreamText: {
    fontSize: RFValue(12),
    fontWeight: '600',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icoClose: { width: 28, height: 28 },
  viewerIcon: {
    backgroundColor: Gray,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    opacity: 0.7,
    borderRadius: 10
  },
  icon: {
    width: 30,
    height: 30,
  },
  viewerCount: {
    color: White,
    margin: 5,
    fontFamily: 'BYekan'
  },

})