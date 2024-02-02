import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../utls/Colors";
import {  useNavigation } from "@react-navigation/native";
export default function SearchResult({ item }) {
  console.log('item',item)
  const navigation = useNavigation();
  return (
    <View className=" flex flex-row p-1 bg-white rounded-md m-2">
     <TouchableOpacity 
     onPress={
      ()=>navigation.navigate(
        'informationDetails',{
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
      <View className='flex gap-1 px-4 overflow-hidden'>
        <Text numberOfLines={2} className="font-semibold py-1 w-2/3 ">
            {(item?.title)?.slice(0,40)}</Text>
        <Text style={{color:Colors.PRIMARY}}
        className="text-[16px] text-gray-900 bg-[#f6f0dc] w-2/3 p-1 flex-initial rounded-md">
          {item?.tag?.name}
        </Text>
      </View>
       
    </View>
  );
}
