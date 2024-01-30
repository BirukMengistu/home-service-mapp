import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import React ,{ useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PageHeading from "../../components/PageHeading";
import { AntDesign,Ionicons } from "@expo/vector-icons";
import { stateofTask,initialTask } from "../utls/Tasks";
export default function Tasklist() {
  const [tasks , setTasks]= useState()
  const loading = tasks?true:false
  const handleDeleteTask=(id)=>{
    const newTask=[...tasks]
    const taskIndex= tasks.findIndex(
        (task)=>task?.id===id
    )
    newTask.splice(taskIndex,1)
    AsyncStorage.setItem('savedtasks',
    JSON.stringify(newTask)).then(()=>
    {
     setTasks(newTask);
    }).catch(err=>console.log(err))
  }
  
  const HandleDone=(id)=>{
     const newData = tasks.map(
      (item)=>item.id===id?{...item, isCompleted:true} :item
     )
   
    AsyncStorage.setItem('savedtasks',
    JSON.stringify(newData)).then(()=>
    {
     setTasks(newData);
    }).catch(err=>console.log(err))
  }
useEffect(()=>{

  AsyncStorage.getItem('savedtasks').then(
    (data)=> data && setTasks(JSON.parse(data))
  )
},[])
  
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PageHeading title=" Task list" />
      <FlatList
        horizontal= {false}
        nestedScrollEnabled={true}
        data={tasks}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        renderItem={({ item ,index }) => <View 
            className='flex flex-col justify-center items-center'>
          <RenderFlatlist index={index} item={item} handleDeleteTask={handleDeleteTask} HandleDone={HandleDone} />
          </View>}
      />
    </SafeAreaView>
  );
}
const RenderFlatlist = ({ item, index ,handleDeleteTask,HandleDone }) => {
  return (
    <View key={index} 
    style={{
        backgroundColor:item?.isCompleted?'lightgreen':'#FEF9C3'
    }}
    className="flex w-[80%] p-3 m-3 rounded">
      <Text className="text-[16px] font-medium">{item?.title}</Text>
      <Text className="text-[13px] font-normal text-gray-600">{item?.note}</Text>
      <View className="flex flex-row justify-end items-center p-2 gap-2">
        <TouchableOpacity
         onPress={()=>HandleDone(item.id)}>
        
          <Ionicons name="checkmark-done-circle" size={24} color="lightgreen" />
        </TouchableOpacity>
        <TouchableOpacity
         >
          <AntDesign name="edit" size={24} color="#d2a81e" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(item?.id)}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
