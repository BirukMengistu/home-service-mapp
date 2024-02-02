import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useUser, useAuth } from "@clerk/clerk-expo";
import PersonalInfo from "./PersonalInfo";
import {
  MaterialIcons,
  Zocial,
  EvilIcons,Entypo,
  AntDesign,FontAwesome5
} from "@expo/vector-icons";
import PageHeading from "../../components/PageHeading";
import Heading from "../../components/Heading";
export default function Profile() {
  const navigation = useNavigation();
  const { user, isLoading } = useUser();
  const { signOut } = useAuth();

  const signout = () => {
    signout();
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea} className="mt-2">
      <View className="flex flex-col justify-center items-center mt-10">
        <Image
          source={{ uri: user?.imageUrl }}
          style={{
            width: 100,
            height: 100,
            //Below lines will help to set the border radius
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 15,
            overflow: "hidden",
          }}
        />

        <Text className="text-[24px]">Hello {user?.firstName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("PersonalInfo")}
        className="flex flex-row space-y-2 justify-between bg-slate-300 m-2 rounded-md "
      >
        <View className="flex flex-row space-y-2 justify-start ml-4 my-2 mr-2">
          <Zocial name="persona" size={32} color={'#d2a81e'}/>
          <Text> Personal Info</Text>
        </View>
        <View className=" space-y-2 mr-2">
          <EvilIcons name="arrow-right" size={32} color={'#d2a81e'} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("privacy")}
        className="flex flex-row space-y-2 justify-between bg-slate-300 m-2 rounded-md "
      >
        <View className="flex flex-row space-y-2 justify-start ml-4 my-2 mr-2">
          
          <MaterialIcons name="privacy-tip" size={32} color={'#d2a81e'} />
          <Text> Privacy Policy</Text>
        </View>
        <View className=" space-y-2 mr-2">
          <EvilIcons name="arrow-right" size={32} color={'#d2a81e'} />
        </View>
      </TouchableOpacity>
      <View className="flex flex-col  justify-between bg-slate-300 m-2 rounded-md p-4 ">
        <Text className="text-[24px] font-semibold">Saved notes</Text>
        
        <TouchableOpacity onPress={()=>navigation.navigate('tasklist')}
        className="flex flex-row space-x-2 justify-start  my-2 mr-2">
          <FontAwesome5 name="tasks" size={24} color={'#d2a81e'} />
          <Text>Task lists </Text>
        </TouchableOpacity>
       
      
        <TouchableOpacity
        className="flex flex-row space-x-2 justify-start  my-2 mr-2" 
        onPress={()=>navigation.navigate('addNewTask')}>
         <AntDesign name="pluscircleo" size={24} color={'#d2a81e'} />
          <Text> add New Task </Text>
          </TouchableOpacity>
       
       
      </View>
       
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex flex-row space-y-2 justify-between bg-slate-300 m-2 rounded-md "
      >
        <View className="flex flex-row space-y-2 justify-start ml-4 my-2 mr-2">
          <AntDesign name="home" size={32}  color={'#d2a81e'}/>
          <Text className='space-y-2'> Go Back</Text>
        </View>
        <View className=" space-y-2 mr-2">
          <EvilIcons name="arrow-left" size={32} color={'#d2a81e'} />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex flex-row space-y-2 justify-between bg-slate-300 m-2 rounded-md "
      >
        <View className="flex flex-row space-y-2 justify-start ml-4 my-2 mr-2">
         
          <Entypo name="log-out" size={32} color={'#d2a81e'} />
          <Text className='space-y-2 font-medium'> SignOut</Text>
        </View>
        <View className=" space-y-2 mr-2">
          <EvilIcons name="arrow-left" size={32} color={'#d2a81e'} />
        </View>
      </TouchableOpacity>
    
      <TouchableOpacity
        onPress={() => signOut()}
        className="flex flex-row space-y-2 justify-between bg-slate-300 m-2 rounded-md "
      >
        <View className="flex flex-row space-y-2 justify-start ml-4 my-2 mr-2">
           <AntDesign name="delete" size={32} color="red" />
          <Text className='space-y-2 font-medium'> Delete Account</Text>
        </View>
        <View className=" space-y-2 mr-2">
          <EvilIcons name="arrow-right" size={32} color={'#d2a81e'} />
        </View>
      </TouchableOpacity>




      
  
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
