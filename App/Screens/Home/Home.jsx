import { View, Text ,SafeAreaView, ScrollView, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import Servicelist from './Servicelist'
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import * as Animatable from "react-native-animatable";
export default function Home() {
  const navigation = useNavigation()
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
          {/* info tags component */}
           <Animatable.View 
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
           className='flex flex-row justify-center m-2 p-4'>
             <TouchableOpacity
             onPress={()=>navigation.navigate('info')}
             className='flex-row space-x-2 bg-[#d2a81e] p-3 rounded-md'>
             <Ionicons name="information-circle-outline" size={32} color="white" /> 
             <Text className='text-white text-[24px]'>Information</Text>
            </TouchableOpacity>  
          </Animatable.View>
          
          
    </ScrollView>
       
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});