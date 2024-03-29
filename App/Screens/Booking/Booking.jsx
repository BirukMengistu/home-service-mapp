import { View, Text, SafeAreaView ,StyleSheet, Platform, StatusBar, FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import GlobalApi from '../utls/GlobalApi'
import {useUser} from '@clerk/clerk-expo'
import ServiceByCategory from '../ServicelistByCategory/ServiceByCategory'

export default function Booking() {
  const {user} = useUser()
  const [myBookingList, setMyBookingList]=useState()
  const getMyBooking =()=>{
    GlobalApi.MyBooking(user?.primaryEmailAddress?.emailAddress).then(
      response=>(setMyBookingList(response?.bookingservice))
    )
  }
 
  useEffect(()=>{
   getMyBooking()
  },[user])
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PageHeading title='My Booking' />
      
      <View>
         <FlatList 
          data={myBookingList}
          renderItem={({item,index})=>
            <ServiceByCategory item={item?.servicesLists}
             booking={item}/>}/>
        </View>
      
      
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});