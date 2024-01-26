import { View, Text,TextInput, SafeAreaView, Platform, 
  StatusBar, StyleSheet, TouchableOpacity, FlatList, 
  KeyboardAvoidingView,
  ScrollView,
  Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../utls/Colors';
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Heading from '../../components/Heading';
import GlobalApi from '../utls/GlobalApi';
import {useUser} from '@clerk/clerk-expo'
import { compareAsc, format } from "date-fns";
export default function Message({servicesId}) {
  const navigation = useNavigation();
  const [message ,setMessage]=useState()
  const {user} = useUser()
  
 console.log('servicesId',servicesId)
  
  const createBookingServices=()=>{
      if(!message){
          Alert.alert('date or time not selected!')
          return;
      }
      const data ={
          userName:user?.fullName,
          userEmail:user?.primaryEmailAddress.emailAddress,
          message:message,
          servicesId:servicesId
      }
    
      GlobalApi.CreateMessage(data).then(
          response=>{
              console.log('resp',response)
              Alert.alert('Inbox','message send successfully!')
              navigation.goBack();
          }
      )
  }
  useEffect(()=>{
      
     
  },[]) 

  return (
  <SafeAreaView style={styles.AndroidSafeArea}>
 
      
      <TouchableOpacity
         onPress={() => {
           navigation.goBack();
         }}
         className={"absolute flex flex-row z-10 p-4 rounded-md mt-6"}
       >
         <Ionicons
           name="arrow-back-outline"
           size={24}
           color={Colors.SECONDARY}
         />
         <Text className='text-[24px]'>Inbox</Text>
       </TouchableOpacity>
     {/*  CalendarPicker  */}

       <View className ='mt-6'>
        <Heading title='Message box '/>
       <TextInput 
         placeholder='Message for services provider'
         textAlignVertical='top'
         numberOfLines={3}
         onChangeText={setMessage}
         className='p-2 text-left rounded-md 
         border-2 text-[16px]
          border-gray-500 m-4'/>
       </View>
         {/*  button  */}

       <View>
         <TouchableOpacity
          style={styles.bookingbtn}
          onPress={()=>createBookingServices()}>
             <Text
             className='p-2 text-white text-[17px] text-center'>
                 Send Message</Text>
         </TouchableOpacity>
       </View>
      
     
     
     
  </SafeAreaView>
)
}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
bookingbtn:{
  padding:15,
  backgroundColor:Colors.SECONDARY,
  borderWidth:1,
  borderColor:'white',
  borderRadius:40,
  margin:12,
  elevation:2
}
})