import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View className="flex bg-blue-700  rounded-b-[15px] ">
        <View className="flex flex-row justify-between items-center p-3">
                <View className="flex flex-row pl-4 pt-5 ">
                <Image
                    source={{ uri: user?.imageUrl }}
                    className="w-[50px] h-[50px] rounded-full mr-3"
                />
                <View>
                    <Text className="text-[16px] ld text-white">Welcome</Text>
                    <Text className="text-[20px] font-semibold text-white">
                    {user?.fullName}
                    </Text>
                </View>
                </View>
                <FontAwesome name="bookmark-o" size={44} color="white" />
        </View>
       
      
       {/*  search bar section */}
       <View className='flex flex-row px-2 justify-center items-center mb-2'>
          < TextInput placeholder="search"
           className='p-2 mr-1 w-[75%] text-[20px] bg-white px-2 rounded-md'/>
           <TouchableOpacity>
            <FontAwesome name="search" size={24} color="white" />
           </TouchableOpacity>
       </View>
      </View>
    )
  );
}
