import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import  React, { useEffect ,useState } from 'react'
import GlobalApi from '../utls/GlobalApi'
import Heading from '../../components/Heading'

export default function Categories() {
    const [categories ,setCategories] =useState()
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
         <View className='mx-2 '>
           <Image source={{uri:item.icon.url}} 
             style={{width:80, height:80 ,
              borderRadius:50,
              borderWidth:2,
              objectFit:'contain'}}/>
              <Text className='text-center mt-2 font-semibold'>{item?.name}</Text>
           </View> 
           
        )}
      /> 
    </ScrollView>
    </View>
     
    </View>
  )
}