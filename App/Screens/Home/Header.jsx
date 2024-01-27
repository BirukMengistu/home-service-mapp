import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
export default function Header() {
  const { user, isLoading } = useUser();
  const[searchKey ,setSearchKey] = useState()
  const navigation = useNavigation();
  return (
    user && (
      <View className="flex bg-[#d2a81e]  rounded-b-[15px] ">
        <View className="flex flex-row justify-between items-center p-3">
                <View className="flex flex-row pl-4 pt-5 ">
                <Image
                    source={{ uri: user?.imageUrl }}
                    className="w-[50px] h-[50px] rounded-full mr-3"
                />
                 <TouchableOpacity
             onPress={()=>{navigation.navigate('profile')}}>
                <View>
                    <Text className="text-[16px] ld text-white">Welcome</Text>
                    <Text className="text-[20px] font-semibold text-white">
                    {user?.fullName}
                    </Text>
                </View>
                </TouchableOpacity>
                </View>
                
        </View>
       
      
       {/*  search bar section */}
       <View className="flex flex-row px-2 justify-center items-center mb-8">
          <TextInput
            placeholder="search"
            onChangeText={setSearchKey}
            className="p-2 mr-1 w-[80%] text-[20px] bg-white px-2 rounded-md"
          />
          <TouchableOpacity className="bg-white p-2 rounded-md"
             onPress={()=>navigation.navigate('search',
              search={searchKey})}>
            <FontAwesome name="search" size={32} color="#d2a81e" />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}
