import {
  View,
  Image,
  FlatList,
  Text,
  Modal,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Heading from "../../components/Heading";
import {useNavigation} from '@react-navigation/native'
import Colors from "../utls/Colors";
export default function ServicesImages({ item }) {
  const navigation = useNavigation()
  const [newItem, setNewItem] = useState(item);
  return (
    <View className="mb-4">
      <Heading title={"Services Photos"} />
      <TouchableOpacity style={styles.priviewBtn}
        onPress={()=>navigation.push('priview_images',{
        items:newItem
      })}>
        <Text className='text-white text-center text-[20px]' >Show Pictures</Text>
      </TouchableOpacity>
            
    </View>
  );
}


const styles = StyleSheet.create({
  
  priviewBtn:{
    padding:15,
    backgroundColor:Colors.SECONDARY,
    borderWidth:1,
    borderColor:'white',
    borderRadius:99,
    flex:1
  }

});