import { View, Text ,SafeAreaView, ScrollView, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import Servicelist from './Servicelist'

export default function Home() {
  return (
    <SafeAreaView >
        <ScrollView>
             {/* header component */}
      <Header/>
       {/* slider component */}
       <Slider/>
       {/* Categories component */}
       <Categories/>
       {/* Servicelist component */}
       <Servicelist/>
        </ScrollView>
       
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});