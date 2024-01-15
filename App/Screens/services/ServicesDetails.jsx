import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utls/Colors";
export default function ServicesDetails() {
  const [item, setItem] = useState({});
  const param = useRoute()?.params;
  const navigation = useNavigation();
  useEffect(() => {
    setItem(param.item);
  }, [param]);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className={"absolute z-10 p-4 bg-cyan-400 rounded-md m-4"}
      >
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color={Colors.SECONDARY}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: item?.images?.url }}
        className="w-full h-60 object-cover rounded-md relative "
      />

      <View className="p-5 flex gap-2">
        <Text className="font-bold text-[24px]">{item?.name}</Text>
        
        <View className='flex flex-row'>
        <Text className="text-blue-500 font-semibold text-[20px] mr-2">
          {item?.contactPerson}
        </Text>
        <Text
          style={{
            fontWeight:'300',
            color: 'white',
            backgroundColor: Colors.SECONDARY,
            width: 80,
            borderRadius: 8,
            padding: 4,
            textAlign:'center',
            marginRight:3
          }}
        >
          {item?.category?.name}
        </Text>
        </View>
        <View className='flex justify-center'>
        <Text className='space-y-4 items-center justify-center align-middle text-[24px] text-gray-500 mb-3'>
          {'  '}
          <Ionicons
            style={{
              marginRight: 10,
            }}
            name="ios-location-sharp"
            size={32}
            color={Colors.SECONDARY}
          />
          {item?.address}
        </Text>
        <View style={{borderWidth:0.6,color:'gray',  alignItems: 'center'}} />
        <View>
            <Text className='font-bold text-[24px] py-2'>About</Text>
            <Text className=''>
                {item.about}
            </Text>
        </View>
        <View className='py-3'>
            <Text className='font-bold text-[24px] py-2'>Contact Address</Text>
            <Text className=''>
                {item.email}
            </Text>
            <Text className=''>
                {item.telephone}
            </Text>
        </View>
      </View>
      </View>
      
    </SafeAreaView>
  ); // className='font-boldbg-cyan-500 w-auto p-2 rounded-md'
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
