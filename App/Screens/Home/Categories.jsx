import { View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native'
import  React, { useEffect ,useState } from 'react'
import GlobalApi from '../utls/GlobalApi'
import Heading from '../../components/Heading'
import {useNavigation} from '@react-navigation/native'
export default function Categories() {
    const [categories ,setCategories] =useState()
    const navigation = useNavigation()
    const getCategories=()=>{
        GlobalApi.getCategories().then(
            (resp =>{
                setCategories(resp?.categories)
            })
        )
    }
    useEffect(()=>{
        getCategories();
    },[])
  return (
    <View>
        
        <Heading title='Categories' isViewAll={true}/>
    <View className='items-center'>
    <ScrollView>
      <FlatList
      data={categories}
      horizontal={true}
      renderItem={({item,index}) =>
        (
        <TouchableOpacity 
          onPress={()=>{navigation.push('service-list',{
            category:item?.name
          })}}>
            <View className='mx-2 '>
           <Image source={{uri:item.icon.url}} 
             style={{width:80, height:80 ,
              borderRadius:50,
              borderWidth:2,
              objectFit:'contain'}}/>
              <Text className='text-center mt-2 font-semibold'>{item?.name}</Text>
           </View> 
        </TouchableOpacity>
         
           
        )}
      /> 
    </ScrollView>
    </View>
     
    </View>
  )
}