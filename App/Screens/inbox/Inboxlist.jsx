import { View, Text , Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import {Ionicons ,AntDesign} from '@expo/vector-icons'
import Colors from '../utls/Colors'
import {useNavigation } from "@react-navigation/native"
export default function Inboxlist({item, inboxes }) {
    const navigation = useNavigation()
    
  return (
    <View >
        <TouchableOpacity className='flex flex-row  p-3 rounded-md   bg-gray-300 mx-2 mb-4'
           onPress={()=>navigation.navigate('service-detali',{
            item:item
           })}>
        
          <Image source={{uri:item?.images?.url}}
         className='w-32 h-30 object-cover rounded-md' />
        
        
        <View className =' flex gap-1 ml-2'>
        <Text className='text-[20px] font-medium'>To - {item?.contactPerson}</Text>
         <Text className='rounded-md p-2 text-[24px] text-blue-500'>{inboxes?.servicesLists?.category?.name} </Text> 
        <Text className='text-[20px] font-medium'>{inboxes?.message}</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}