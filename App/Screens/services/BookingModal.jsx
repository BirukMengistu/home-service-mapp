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
export default function BookingModal({servicesId}) {
    const navigation = useNavigation();
    const [timeList ,setTimeList]=useState()
    const [selectedTime ,setSelectedTime]=useState()
    const [selectedDate ,setSelectedDate]=useState()
    const [notes ,setNote]=useState()
    const {user} = useUser()
    
    
    const getTime=()=>{
        const timeList=[]
        for(let i=8;i<=12;i++){
            timeList.push({
                time:i+':00 AM'
            })
            timeList.push({
                time:i+':30 AM'
            })
        }
        for(let i=1;i<=7;i++){
            timeList.push({
                time:i+':00 PM'
            })
            timeList.push({
                time:i+':30 PM'
            })
        }
        setTimeList(timeList);
    }

    const createBookingServices=()=>{
        if(!selectedDate || !selectedTime){
            Alert.prompt('date or time not selected!')
            return;
        }
        const data ={
            userName:user?.fullName,
            userEmail:user?.primaryEmailAddress.emailAddress,
            time:selectedTime,
            date:selectedDate,
            note:notes,
            servicesId:servicesId
        }
        console.log(data)
        GlobalApi.createbookingServices(data).then(
            response=>{
                console.log('resp',response)
                Alert.alert('Booking','Booking created successfully!')
                navigation.goBack();
            }
        )
    }
    useEffect(()=>{
        getTime()
       
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
           <Text className='text-[24px]'>Booking</Text>
         </TouchableOpacity>
       {/*  CalendarPicker  */}

      
       <View className='m-6'>
       <Heading title='Select Date'/>
       <View className='bg-blue-200 p-5 rounded-md'>
       <CalendarPicker
          
          onDateChange={(date)=>setSelectedDate(format(new Date(date),"yyyy-MM-dd"))}
          minDate={Date.now()}
          todayBackgroundColor={Colors.SECONDARY}
          todayTextStyle={{color:'white'}}
          selectedDayColor={Colors.SECONDARY}
          selectedDayTextColor={Colors.WHITE}
          width={350}/>
       </View>
      
          
       </View>
      
        <View>
        <Heading title='Select timr slot'/>
           <FlatList 
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           data={timeList}
           renderItem={({item, index}) =>
           (<TouchableOpacity
             onPress={()=>{
                setSelectedTime(item.time)
             }}
             className='m-1 ro'>
               <Text
               style={selectedTime===item.time?
                    styles.selectedIime:
                    styles.UnSelectedIime}>
                   {item.time}
               </Text>
           </TouchableOpacity>)
           }
           />
           
        </View>
         {/*  Not area  */}

         <View>
         <Heading title='Reminder Note '/>
         <TextInput 
           placeholder='Not for services provider'
           textAlignVertical='top'
           numberOfLines={3}
           onChangeText={setNote}
           className='p-2 text-left rounded-md 
           border-2 text-[16px]
            border-gray-500 m-2'/>
         </View>
           {/*  Not area  */}

         <View>
           <TouchableOpacity
            style={styles.bookingbtn}
            onPress={()=>createBookingServices()}>
               <Text
               className='p-2 text-white text-[17px] text-center'>
                   Confirm Book</Text>
           </TouchableOpacity>
         </View>
        
       
       
       
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
UnSelectedIime:{
    padding:12,
    borderWidth:1,
    borderColor:Colors.Black,
    borderRadius:10,
    paddingHorizontal:8,
    color:Colors.Black
},
selectedIime:{
    padding:12,
    borderWidth:1,
    borderColor:Colors.SECONDARY,
    borderRadius:20,
    paddingHorizontal:8,
    backgroundColor:Colors.SECONDARY,
    color:Colors.WHITE
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