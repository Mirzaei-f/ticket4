
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const   ComponentLoading= ({ isFetching }) => {
  const [blackIndex, setBlackIndex] = useState(0);

  useEffect(() => {
    if (isFetching) {
      const intervalId = setInterval(() => {
        setBlackIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 1000); // تغییر دایره مشکی هر 1 ثانیه

      return () => clearInterval(intervalId);
    }
  }, [isFetching]);

  if (!isFetching) return null; // اگر isLoading = false باشد، کامپوننت را نمایش نده

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: blackIndex === 0 ? '#F2BA08' : "#B828B9" }]} />
      <View style={[styles.circle, { backgroundColor: blackIndex === 1 ? '#F2BA08' : "#B828B9" }]} />
      <View style={[styles.circle, { backgroundColor: blackIndex === 2 ? '#F2BA08' : "#B828B9"}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});



export  {ComponentLoading}