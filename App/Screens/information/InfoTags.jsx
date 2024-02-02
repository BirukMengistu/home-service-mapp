import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import Heading from '../../components/Heading'
import GlobalApi from '../utls/GlobalApi'

import {useNavigation} from '@react-navigation/native'

/**
* @author InfoTags
* @function 
**/
 const  InfoTags = () => {
    const [taglist ,setTaglist]=useState()
    const navigation = useNavigation()
    const getTagslist=()=>{
    GlobalApi.getTags()
    .then(resp =>
        setTaglist(resp?.tags))
      }

      useEffect(()=>{
          getTagslist()
      },[])
 return(
    <View className='mt-2'>
    <Heading title={'Tags ..'} isViewAll={true} />
    
    <ScrollView>
      <FlatList
      data={taglist}
      horizontal={true}
      renderItem={({item,index}) =>
        (
        <TouchableOpacity 
          onPress={()=>{navigation.push('service-list',{
            category:item?.tag?.name
          })}}>
            <View className='mx-2 '>
           <Image source={{uri:item.icon.url}} 
             style={{width:60, height:60 ,
              borderRadius:50,
              borderWidth:2,
              objectFit:'contain'}}/>
              <Text className='text-center text-[12px] mt-2 font-semibold'>{item?.tag?.name}</Text>
           </View> 
        </TouchableOpacity>
         
           
        )}
      /> 
    </ScrollView>

   
  </View>
  )
}

export default InfoTags

