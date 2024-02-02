import { View, Text,Image, FlatList,ScrollView } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading'
import { useEffect } from 'react'
import { useState } from 'react'
import GlobalApi from '../utls/GlobalApi'
import Informations from './Informations'

export default function Informationlist() {
    const [informationlist ,setinFormationlist]=useState()
    const getInformationlist =()=>{
  GlobalApi.getInformationlist()
  .then(resp =>
    setinFormationlist(resp?.information))
    }
    useEffect(()=>{

        getInformationlist()
        
    },[])
    console.log('information',Informationlist)
  return (
    <View className='mt-2'>
      <Heading title={'latest List of formation '} isViewAll={true} />
      
            <ScrollView>
            <FlatList
            data={informationlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => 
                (
                <Informations item={item} key={index} />
                )}
            /> 
            </ScrollView>
  
     
    </View>
  )
}