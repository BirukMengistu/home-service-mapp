import { View, Text, SafeAreaView, StatusBar, Platform ,StyleSheet} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea} 
    className='mt-2'>
      <Text>Profile</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});