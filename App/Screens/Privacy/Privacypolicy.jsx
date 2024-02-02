import { View, Text, SafeAreaView, StatusBar,Platform, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { Aboutus } from './Aboutus';
import { Logfiles } from './Logfiles';
import AdvertisingPartners from './Advertising';
import ChildrensInformation from './Children';
import Heading from '../../components/Heading';
import PageHeading from '../../components/PageHeading';
export default function Privacypolicy() {
    const navigation = useNavigation();
    return (
    <SafeAreaView style={styles.AndroidSafeArea}>
       <PageHeading title='Privacy Policy'  />
       {/* //about component */}
       <ScrollView>
       <Aboutus/>
       <AdvertisingPartners/>
       <ChildrensInformation/>
       <Logfiles/>
       </ScrollView>
       
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });