
import React from 'react'
import {NavigationContainer} from'@react-navigation/native'
import MainTabs from './TabNavigation'
import { SafeAreaView } from 'react-native'
export default function Navigation() {
  return (
    
      <NavigationContainer>
        <MainTabs/>
    </NavigationContainer>
 
    
  )
}