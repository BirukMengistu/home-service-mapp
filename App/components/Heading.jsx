import { View, Text } from 'react-native'
import React from 'react'

export default function Heading({title ,isViewAll=false}) {
  return (
    <View className='flex flex-row mx-4 justify-between items-center bg-gray-100'>
        <Text className='font-semibold text-[20px]  my-2'>{title}</Text>
         {isViewAll ?  <Text className='text-[18px] '>View All</Text> :null}
    </View>
  )
}