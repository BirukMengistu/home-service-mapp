import { View, Text, SafeAreaView ,StyleSheet, Platform, StatusBar, FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../utls/GlobalApi'
import {useUser} from '@clerk/clerk-expo'
import PageHeading from '../../components/PageHeading'
import Inboxlist from './Inboxlist'

export default function Inbox() {
  const {user} = useUser()
  const [myInbox, setMyInbox]=useState()
  const getMyBooking =()=>{
    GlobalApi.getMyInbox(user?.primaryEmailAddress?.emailAddress).then(
      response=>(setMyInbox(response?.inboxes))
    )
  }
 
  useEffect(()=>{
   getMyBooking()
  },[user])

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PageHeading title='Inboxes' />
      
      <View>
         <FlatList 
          data={myInbox}
          onRefresh={getMyBooking()}
          renderItem={({item,index})=>
            <Inboxlist item={item?.servicesLists}
             inboxes={item}/>}/>
        </View>
      
      
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});