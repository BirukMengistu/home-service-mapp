import { View, Text ,SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'

export default function Home() {
  return (
    <View >
        {/* header component */}
      <Header/>
       {/* slider component */}
       <Slider/>
       <Categories/>
    </View>
  )
}