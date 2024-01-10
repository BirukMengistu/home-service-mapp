
import React from 'react'
import {NavigationContainer} from'@react-navigation/native'
import MainTabs from './TabNavigation'
export default function Navigation() {
  return (
    <NavigationContainer>
        <MainTabs/>
    </NavigationContainer>
  )
}