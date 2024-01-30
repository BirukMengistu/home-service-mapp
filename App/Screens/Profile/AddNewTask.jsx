import { View, Text, TouchableOpacity, TextInput ,SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import Heading from '../../components/Heading';
import PageHeading from '../../components/PageHeading';
import { initialTask } from '../utls/Tasks';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function AddNewTask() {
  const [title , setTitle] =useState('')
  const [note , setNote] =useState('')
  const navigation = useNavigation();
  const [tasks, setTasks]=useState()
  const { user, isLoading } = useUser();
  //save method
  const handleSave=()=>{
    const newTask = {
      title,
      note,
      id:tasks?.length + 1,
      isCompleted:false,
      user:user.fullName
    }
    const newdata = [...tasks ,newTask]
    AsyncStorage.setItem('savedtasks', JSON.stringify(newdata))
    console.log(tasks)
    navigation.navigate('tasklist')
  }
  
  useEffect(()=>{
    AsyncStorage.getItem('savedtasks').then(
      (data)=> data && setTasks(JSON.parse(data)))
  },[])
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PageHeading title=' Add New Task' />
       
        <View className='flex flex-col bg-gray-300 justify-center items-center m-6 rounded-lg p-4'>
         <TextInput 
         className='p-2 w-3/4 bg-gray-200 text-center rounded-md m-2 text-[24px]'
          placeholder='Title'
         onChangeText={setTitle}/>
         <TextInput 
         className='p-4 w-3/4 bg-gray-200 text-center rounded-md m-2 text-[15px]'
         numberOfLines={3} placeholder='Task Note'
         onChangeText={setNote}/>
        <TouchableOpacity
        onPress={handleSave}
        
        className='p-3 w-3/4 bg-[#d2a81e] rounded-md m-3'>
        <Text
         className='text-center text-white  rounded-md text-[18px]'>
          Save</Text>
      </TouchableOpacity>
        </View>
       
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
