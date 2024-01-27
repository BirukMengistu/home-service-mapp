import { View, Text, SafeAreaView, Platform,Modal, Image,StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
export default function ImagesPreview() {
 const param = useRoute()?.params.items.imageslist
 const [items, setItems] = useState(param)
 const navigation = useNavigation()
const [showPreviewModal, setShowPreviewModal]=useState(false)

    const onPressListHandler = (id) => {};
    const RenderFlatlist = ({ item }) => {
        return ( 
            
            <Image
                source={{ uri: item?.url }}
                style={{
                width: "100%",
                flex: 1,
                borderRadius: 6,
                objectFit:'cover',
                margin: 5,
                height: 320,
                }}
          />  
        );
      };
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className='mt-10'>
      <FlatList
              nestedScrollEnabled={true}
              data={items}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              renderItem={({ item }) => <RenderFlatlist item={item} /> 
           }
            />
      </View>
       <TouchableOpacity onPress={()=>navigation.goBack()}
          className='flex justify-center items-center
           bg-[#d2a81e] p-2 rounded-xl '>
            <Text 
            className='text-white text-[24px] '>Close</Text>
       </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }})