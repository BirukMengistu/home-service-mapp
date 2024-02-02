import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utls/Colors";


/**
* @author Birdev
* @function 
**/




import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Linking,
} from "react-native";


export default function InformationDetails() {
  const param = useRoute()?.params;
  const [item, setItem] = useState(param.item);
  const [showModal, setShowModal] = useState(false);
  const [showMsgModal, setShowMsgModal] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    param && setItem(param.item);
  }, [param]);

  return (
    item && (
      <SafeAreaView 
      style={styles.AndroidSafeArea} 
      className='bg-gray-100'>
        <ScrollView 
        style={{height:'90%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className={"absolute z-10 p-4 bg-[#e9ddbc] rounded-md m-4"}
          >
            <Ionicons
              name="arrow-back-outline"
              size={24}
              color={Colors.SECONDARY}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: item?.images?.url }}
            className="w-full h-60 object-cover rounded-md relative "
          />

          <View className="p-5 flex gap-2">
           
            <View className="flex flex-row">
              <Text className="text-[#d2631e] w-3/4 font-semibold text-[20px] mr-2">
                {item?.title}
              </Text>
              <Text
                style={{
                  backgroundColor: "#d2631e",
                  color:Colors.WHITE,
                  width: 80,
                  borderRadius: 8,
                  padding: 4,
                  textAlign: "center",
                  marginRight: 3,
                }}
              >
                {item?.tag?.name}
              </Text>
            </View>

              {/* ServicesAbout componenet  */}
             
               
               <View>
            <Text className='mb-4'>
                {item?.body}
            </Text>
             </View>

              {/*  componenet */}
             
            <TouchableOpacity
           onPress={()=>Linking.openURL(item?.source)}>
            <Text className='text-[24px] font-semibold text-blue-200'>Source</Text>
          </TouchableOpacity>
             
          </View>
         
        </ScrollView>
       
       
       
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Msgbtn:{
    padding:15,
    backgroundColor: 'white',
    borderWidth:1,
    borderColor:Colors.SECONDARY,
    borderRadius:99,
    flex:1
  },
  bookingbtn:{
    padding:15,
    backgroundColor:Colors.SECONDARY,
    borderWidth:1,
    borderColor:'white',
    borderRadius:99,
    flex:1
  }

});
