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
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utls/Colors";
import ServicesImages from "./ServicesImages";
import ServicesAbout from "./ServicesAbout";
import ServicesContactAddress from "./ServicesContactAddress";

export default function ServicesDetails() {
  const param = useRoute()?.params;
  const [item, setItem] = useState(param.item);
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
            className={"absolute z-10 p-4 bg-cyan-400 rounded-md m-4"}
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
            <Text className="font-bold text-[24px]">{item?.name}</Text>

            <View className="flex flex-row">
              <Text className="text-blue-500 font-semibold text-[20px] mr-2">
                {item?.contactPerson}
              </Text>
              <Text
                style={{
                  fontWeight: "300",
                  color: Colors.Black,
                  backgroundColor: "lightblue",
                  width: 80,
                  borderRadius: 8,
                  padding: 4,
                  textAlign: "center",
                  marginRight: 3,
                }}
              >
                {item?.category?.name}
              </Text>
            </View>

            <View className="flex justify-center">
              <Text className="space-y-4 items-center justify-center align-middle text-[24px] text-gray-500 mb-3">
                {"  "}
                <Ionicons
                  style={{
                    marginRight: 10,
                  }}
                  name="ios-location-sharp"
                  size={32}
                  color={Colors.SECONDARY}
                />
                {item?.address}
              </Text>
              {/* ServicesAbout componenet  */}
              <View
                style={{
                  borderWidth: 0.6,
                  color: "gray",
                  alignItems: "center",
                }}
              />
              <ServicesAbout item={item} />

              {/*  componenet */}
              <View
                style={{
                  borderWidth: 0.6,
                  color: "gray",
                  alignItems: "center",
                }}
              />
              <ServicesImages item = {item} />
              {/*ServicesContactAddress   componenet*/}
              <View
                style={{
                  borderWidth: 0.6,
                  color: "gray",
                  alignItems: "center",
                }}
              />
              <ServicesContactAddress item={item} />
             
            </View>
          </View>
        </ScrollView>
        <View className='flex flex-row gap-2 m-2'>
              <TouchableOpacity
                style={styles.Msgbtn} >
                <Text style={{
                  textAlign:'center',
                  color:Colors.SECONDARY
                }}>Message</Text>
              </TouchableOpacity >
              <TouchableOpacity style={styles.bookingbtn}>
                <Text style={{
                  textAlign:'center',
                  color:'white'
                }}>Booking</Text>
              </TouchableOpacity>
        </View>
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
