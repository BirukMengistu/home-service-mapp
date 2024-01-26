import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useUser , useAuth } from "@clerk/clerk-expo";
export default function Profile() {
  const navigation = useNavigation();
  const { user, isLoading } = useUser();
  const { signOut } = useAuth();

 const signout=()=>{
    signout()
    navigation.navigate('home')
 }
    
  return (
    <SafeAreaView style={styles.AndroidSafeArea} className="mt-2">
     <View className='flex flex-col justify-center items-center mt-10'>
   
     <Image
            source={{ uri: user?.imageUrl }}
            
            style={{
              width: 100,
              height: 100,
              //Below lines will help to set the border radius
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 15,
              overflow: 'hidden',
            }}/>
        
     <Text className='text-[24px]'>Hello {user?.firstName}</Text>
     </View>
     <View className='border-b-4 m-6 border-gray-500'/>
     <View className='flex flex-col justify-center m-4'>
     <Text className='text-[24px] mb-2'>UserName - {user?.fullName}</Text>
     
     <Text className='text-[24px]'>email - {user?.primaryEmailAddress.emailAddress}</Text>
     </View>

     <View className='absolute bottom-[-400] left-20
     flex flex-col justify-center m-4'>
      
      <TouchableOpacity
      onPress={
       ()=> navigation.goBack()
      }
      className=' bg-white rounded-md p-2 border-[#A0DFF9] m-2'>
      <Text className='text-[24px] text-center text-[#A0DFF9] mb-2'>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={
       ()=> signOut()
      }
      className=' bg-[#A0DFF9]  rounded-md p-2  m-2'>
      <Text className='text-[24px] text-center text-white mb-2'>signout</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={
       ()=> navigation.navigate('inbox')
      }
      className=' bg-[#A0DFF9]  rounded-md p-2  m-2'>
      <Text className='text-[24px] text-center text-white mb-2'>Inbox</Text>
      </TouchableOpacity>
     
      <TouchableOpacity
      className='bg-red-500 rounded-md p-2 m-2'>
      <Text className='text-[24px] text-center text-gray-50 mb-2'>Delete Profile</Text>
      </TouchableOpacity>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
