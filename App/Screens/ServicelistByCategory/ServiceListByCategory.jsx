import { View, Text,  StatusBar, SafeAreaView,StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useRoute ,useNavigation } from "@react-navigation/native";
import GlobalApi from "../utls/GlobalApi";
import React, { useState, useEffect } from "react";
import {Ionicons} from '@expo/vector-icons'
import Colors from "../utls/Colors";
import ServiceByCategory from "./ServiceByCategory";
export default function ServiceListByCategory() {
  const params = useRoute();
  const naviation = useNavigation()
  const [servicelist, setServicelist] = useState([]);
  const category = params?.params?.category;
  const getServiclist = () => {
    GlobalApi.getServicelistByCategory(category).then((resp) =>
      setServicelist(resp?.servicesList)
    );
  };
  useEffect(() => {
    getServiclist();
  }, []);
  
  return (
    <SafeAreaView style={styles.AndroidSafeArea} 
       className='bg-gray-100'>
      <TouchableOpacity  onPress={()=> naviation.goBack()}>
      <View className='p-5 pt-7 flex flex-row items-center'>
        <Ionicons name='arrow-back-outline' size={30} color={Colors.SECONDARY}/>
        <Text className='text-[25px] text-blue-300 font-medium'>{category}</Text>
      </View>
      </TouchableOpacity>
     
       {servicelist?.length>0 ?
       <FlatList 
       showsHorizontalScrollIndicator={false}
       data = {servicelist}
       renderItem={({item,index})=>
       <ServiceByCategory item={item}/>
       }/>:
       <View>
         <Text className='text-red-700
           text-[32px] font-bold text-center mt-[20%]'>
          No service provider Found!!</Text>
       </View>}
        
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});