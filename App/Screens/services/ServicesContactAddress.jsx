import { View, Text } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading'
export default function ServicesContactAddress({item}) {
  return (
    <View className='mt-2'>
     
           <Heading title={'Contact Address'} />
            <Text className="text-blue-500 font-normal text-[20px] mr-2">
                Email :- {item.email}
            </Text>
            <Text className="text-blue-500 font-normal text-[20px] mr-2 ">
               Telephone :- {item.telephone !==undefined ? item.telephone : 'Not Provided'}
            </Text>
     
    </View>
  )
}