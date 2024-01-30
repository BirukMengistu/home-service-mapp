import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Platform, StatusBar, Alert, ScrollView, FlatList } from 'react-native'
import React,{useState, useEffect} from 'react'
import { useNavigation ,useRoute } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Heading from '../../components/Heading';
import GlobalApi from '../utls/GlobalApi';
import Services from '../Home/Services';
import SearchResult from './SearchResult'
export default function Search() {
    const params= useRoute()
    const[searchKey ,setSearchKey] = useState(params?.params?.searchKey)
    const[searchResult ,setSearchResult] = useState({})
    const navigation = useNavigation();
    
    const HandleSearch=(key)=>{
        if(!searchKey)
        {   
         Alert.alert('Search',
            'Please provide valid value!!')
            return
        }
        GlobalApi.getSearchServices(searchKey).then(
            response => (setSearchResult(response.servicesList)))
    }
    useEffect(()=>{
     HandleSearch(searchKey)
    },[])
   
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      
      <Heading title={'Search Result'}/>
      {/*  search bar section */}
      <View className="flex flex-row px-2 m-2 justify-center items-center mb-8">
          <TextInput
            placeholder="search"
            value={searchKey}
            onChangeText={setSearchKey}
            className="p-2 mr-1 w-[80%] text-[20px] bg-white px-2 rounded-md"
          />
          <TouchableOpacity className="bg-white p-2 rounded-md"
            onPress={()=> HandleSearch(searchKey)} >
            <FontAwesome name="search" size={32} color="#d2a81e" />
          </TouchableOpacity>
        </View>
        {
            searchResult!==null ?
            <View>
              
            <FlatList
            data={searchResult}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => 
                (

                index < 5 && <SearchResult item={item} key={index} />
                )}
            /> 
             <View className='border-b-5 boeder-gray-200 my-3'/>
            </View>
            :
            <View className='flex-1 justify-center items-center'>
                <Text className='font-bold
                 text-[24px] decoration-from-font'>
                    Search not found
                </Text>
            </View>
        }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  });