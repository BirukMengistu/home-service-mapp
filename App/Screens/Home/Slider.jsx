import { View, Text ,ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import GlobalApi from '../utls/GlobalApi'
import { useEffect } from 'react'
import { useState } from 'react'
import Heading from '../../components/Heading'
export default function Slider() {
    const [slider ,setSlider] =useState()
    const getSlider=()=>{
        GlobalApi.getSlider().then(
            (resp =>{
                setSlider(resp?.sliders)
            })
        )
    }
    useEffect(()=>{
        getSlider();
    },[])
  return (
    <ScrollView>
      <Heading title ='Offers for you' />
      <FlatList
      data={slider}
      horizontal={true}
      renderItem={({item,index}) =>
        (
         <View className='mx-2'>
           <Image source={{uri:item.image.url}} 
             style={{width:250, height:120 ,
              borderRadius:20,
              borderWidth:2,
              objectFit:'contain'}}/>
           </View> 
        )}
      /> 
    </ScrollView>
  )
}