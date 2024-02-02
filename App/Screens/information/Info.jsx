import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import PageHeading from '../../components/PageHeading';
import {FontAwesome} from '@expo/vector-icons'
import InfoTags from './InfoTags';
import Informations from './Informations';
import Informationlist from './Informationlist';
import GlobalApi from '../utls/GlobalApi';
import SearchResult from './InfoSearch';
//import InfoTags from './InfoTags';
export default function Info() {
    const[searchKey ,setSearchKey] = useState('')
    const[searchResult ,setSearchResult] = useState([])
    const HandleSearch=(key)=>{
        if(!searchKey)
        {   
         Alert.alert('Search',
            'Please provide valid value!!')
            return
        }
        GlobalApi.getSearchInformation(searchKey).then(
            response => (setSearchResult(response?.information)))
    }
   console.log(searchResult)
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PageHeading title='Tags' />
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
       <InfoTags/>
       
      <Informationlist />
      {
        searchResult.length !== 0 &&
       searchResult.map((item) =>  <SearchResult item = {item} />)
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });