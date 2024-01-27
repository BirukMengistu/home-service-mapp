import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../utls/Colors'
import {useNavigation } from "@react-navigation/native"
export default function ServiceByCategory({item}) {
    const navigation = useNavigation()
  return (
    <View >
        <TouchableOpacity className='flex flex-row  p-3 rounded-md   bg-gray-300 mx-2 mb-4'
           onPress={()=>navigation.push('service-detali',{
            item:item
           })}>
        <Image source={{uri:item?.images?.url}}
        className='w-32 h-30 object-cover rounded-md' />
        
        <View className =' flex gap-1 ml-2'>
        <Text className='text-[16px] font-normal'>{item?.name}</Text>
        <Text className='text-[20px] font-medium'>{item?.contactPerson}</Text>
        <Text className='text-[15px] font-medium'>
             <Ionicons style={{
                marginRight:10
             }} name='ios-location-sharp' size={20} color={Colors.SECONDARY}/>
            {(item?.address).slice(0 ,20)} ..</Text>
        <Text className='text-[16px] font-medium text-[#d2a81e]'>{item?.email}</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}