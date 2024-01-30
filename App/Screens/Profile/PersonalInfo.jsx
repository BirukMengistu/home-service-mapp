import { View, Text, SafeAreaView, StyleSheet ,Platform,StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { useUser , useAuth } from "@clerk/clerk-expo";
import Heading from '../../components/Heading';
import PageHeading from '../../components/PageHeading';
import {
    Entypo,
    AntDesign
  } from "@expo/vector-icons";
export default function PersonalInfo() {
    const { user, isLoading } = useUser();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
     
      <PageHeading title='Personal Info' />
      
      <TouchableOpacity
        onPress={() => navigation.navigate("PersonalInfo")}
        className="flex flex-row space-y-2 justify-between bg-slate-300 m-2 rounded-md "
      >
        <View className="flex flex-row space-y-2 justify-start ml-4 my-2 mr-2">
          <AntDesign name="user" size={32} color={'#d2a81e'} />
          <Text className='font-medium ml-2 text-[18px] muted'> {user.fullName}</Text>
        </View>
       
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("PersonalInfo")}
        className="flex flex-row space-y-2 justify-between bg-slate-300 m-2 rounded-md "
      >
        <View className="flex flex-row space-y-2 justify-start ml-4 my-2 mr-2">
          
          <Entypo name="email" size={32} color={'#d2a81e'} />
          <Text className='font-medium ml-2 text-[18px] muted'> {user?.primaryEmailAddress.emailAddress}</Text>
        </View>
       
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });
  
