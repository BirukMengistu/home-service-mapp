import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'
import Colors from '../Screens/utls/Colors';
export default function PageHeading({title}) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className={" flex flex-row z-10 p-4 rounded-md m-4"}
          >
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.SECONDARY}
            />
            <Text className='text-[25px] text-blue-600 font-medium'>{title}</Text>
          </TouchableOpacity>
  )
}