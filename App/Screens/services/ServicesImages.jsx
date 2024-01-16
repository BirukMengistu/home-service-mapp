import { View,Image,FlatList} from 'react-native'
import React, { useState } from 'react'
import Heading from '../../components/Heading'

export default function ServicesImages({item}) {
  const [newItem ,setNewItem]= useState(item)

  
  return  <View className='mb-4'>
      <Heading title={'Services Photos'} />
      <FlatList
      data={newItem?.imageslist}
      numColumns={2}
      renderItem={({item})=>(
       <Image source={{uri: item?.url}} 
        style= {{width:'100%', flex: 1,
        borderRadius:6,margin:5,
        height:120}}/>
        )} 
        /> 
    </View>
    
  
}