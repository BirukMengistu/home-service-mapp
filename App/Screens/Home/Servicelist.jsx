import { View, Text,Image, FlatList,ScrollView } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading'
import { useEffect } from 'react'
import { useState } from 'react'
import GlobalApi from '../utls/GlobalApi'
import Services from './Services'

export default function Servicelist() {
    const [servicelist ,setServicelist]=useState()
    const getServiclist =()=>{
  GlobalApi.getServiceLists()
  .then(resp =>
    setServicelist(resp?.servicesList))
    }
    useEffect(()=>{
        getServiclist()
        
    },[])
  return (
    <View className='mt-2'>
      <Heading title={'latest List of Services '} isViewAll={true} />
      
            <ScrollView>
            <FlatList
            data={servicelist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) =>
                (
                <Services item={item} key={index} />
                )}
            /> 
            </ScrollView>
  
     
    </View>
  )
}