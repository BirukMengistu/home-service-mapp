import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../utls/Colors";

export default function Services({ item }) {
    
  return (
    <View className=" p-1 bg-white rounded-md mx-2">
      <Image
        source={{ uri: item?.images?.url }}
        style={{
          width: 200,
          height: 100,
          borderRadius: 10,
          objectFit: "cover",
        }}
      />
      <View className='flex gap-1'>
        <Text className="font-semibold py-1">{item?.contactPerson}</Text>
        <Text style={{color:Colors.PRIMARY}}
        className="text-[16px] text-gray-900 bg-blue-200 p-1 flex-initial rounded-md">
          {item?.category.name}
        </Text>
      </View>
    </View>
  );
}
