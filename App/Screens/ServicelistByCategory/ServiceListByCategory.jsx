import { View, Text } from 'react-native'
import {useRoute} from '@react-navigation/native'
import GlobalApi from '../utls/GlobalApi'
import React,{ useState,useEffect } from 'react'
export default function ServiceListByCategory() {
    const params = useRoute()
    const [servicelist ,setServicelist]=useState()
    const category = params?.params?.category
    const getServiclist =()=>{
  GlobalApi.getServicelistByCategory(category)
  .then(resp =>
    setServicelist(resp?.servicesList))
    }
    useEffect(()=>{
        getServiclist()
       
    },[])
    console.log(servicelist)
  return (
    <View>
      <Text>ServiceListByCategory</Text>
    </View>
  )
}