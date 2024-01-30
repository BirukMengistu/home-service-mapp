import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../utls/Colors";
import {  useNavigation } from "@react-navigation/native";
export default function Services({ item }) {
  const navigation = useNavigation();
  return (
    <View className=" p-1 bg-white rounded-md mx-2">
     <TouchableOpacity 
     onPress={
      ()=>navigation.navigate(
        'service-detali',{
          item:item
         } 
      )
     }>
    <Image
        source={{ uri: item?.images?.url }}
        style={{
          width: 200,
          height: 100,
          borderRadius: 10,
          objectFit: "cover",
        }}
      />
      </TouchableOpacity>
      <View className='flex gap-1'>
        <Text className="font-semibold py-1">{item?.contactPerson}</Text>
        <Text 
        className="text-[16px] text-[#120f0b] bg-[#f7efd4] p-1 flex-initial rounded-md">
          {item?.category.name}
        </Text>
      </View>
    </View>
  );
}
