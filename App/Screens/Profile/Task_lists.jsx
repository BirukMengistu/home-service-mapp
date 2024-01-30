import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import React ,{ useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PageHeading from "../../components/PageHeading";
import { AntDesign,Ionicons } from "@expo/vector-icons";
import { stateofTask,initialTask } from "../utls/Tasks";
import SelectDropdown from 'react-native-select-dropdown'

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
      (item)=>item.id===id?{...item, isCompleted:!(item.isCompleted)} :item
     )
   
    AsyncStorage.setItem('savedtasks',
    JSON.stringify(newData)).then(()=>
    {
     setTasks(newData);
    }).catch(err=>console.log(err))
  }

  const HandleUpdate=(data)=>{
    
    const newData = tasks.map(
     (item)=>item.id===data?.id?{...item, title:data?.title, note:data?.note} :item
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
          <RenderFlatlist index={index} item={item} 
           handleDeleteTask={handleDeleteTask} 
           HandleDone={HandleDone}
           HandleUpdate={HandleUpdate}
          />
          </View>}
      />

      
    </SafeAreaView>
  );
}
const RenderFlatlist = ({ item, index ,
  handleDeleteTask,HandleDone,HandleUpdate
 
}) => {
  const [showModal, setShowModal] = useState(false)
  const [title , setTitle] =useState(item.title)
  const [note , setNote] =useState(item.note)
  //const isCompleteOption=['false' ,'true']
  const update=()=>{
   const newData={
    title,
    note,
    id:item?.id
   }
   HandleUpdate(newData)
   setShowModal(false)
  }
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
          <Ionicons name="checkmark-done-circle" size={24} color={item?.isCompleted?'#FEF9C3':"lightgreen"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>setShowModal(true)}>
          <AntDesign name="edit" size={24} color="#d2a81e" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(item?.id)}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
              
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}>
       <View style={styles.centeredView}>
       <View 
        style={styles.modalView}
        className='flex flex-col justify-center items-center w-full'>
         <TextInput 
         className='p-2 w-3/4 bg-gray-200 text-center rounded-md m-2 text-[24px]'
          placeholder={item.title}
         onChangeText={setTitle}/>
         <TextInput 
         className='p-4 w-3/4 bg-gray-200 text-center rounded-md m-2 text-[15px]'
         numberOfLines={3} placeholder={item.note}
         onChangeText={setNote}/>
        
       <TouchableOpacity
       onPress={()=>update()}
       
       className='p-3 w-3/4 bg-[#d2a81e] rounded-md m-3'>
       <Text
        className='text-center text-white  rounded-md text-[18px]'>
         Save</Text>
       </TouchableOpacity>
       </View>
        </View> 
      
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  }
});
