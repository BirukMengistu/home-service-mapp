import { View, Text , Image} from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../utls/Colors'
export default function ServiceByCategory({item}) {
  return (
    <View className='flex flex-row p-3 rounded-md   bg-gray-300 mx-2 mb-4'>
        <Image source={{uri:item?.images?.url}}
        className='w-32 h-30 object-cover rounded-md' />
        <View className =' flex gap-1 ml-2'>
        <Text className='text-[16px] font-normal'>{item?.name}</Text>
        <Text className='text-[20px] font-medium'>{item?.contactPerson}</Text>
        <Text className='text-[15px] font-medium'>
             <Ionicons style={{
                marginRight:10
             }} name='ios-location-sharp' size={20} color={Colors.SECONDARY}/>
            {item?.address}</Text>
        <Text className='text-[16px] font-medium text-blue-500'>{item?.email}</Text>
        </View>
      
    </View>
  )
}