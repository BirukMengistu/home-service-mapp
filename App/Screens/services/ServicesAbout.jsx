import { View, Text } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading'
export default function ServicesAbout({item}) {
 
  return (
    <View>
     
        <View>
           <Heading title={'About'} />
            <Text className='mb-4'>
                {item?.about}
            </Text>
        </View>
    </View>
  )
}