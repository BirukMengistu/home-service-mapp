import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login/Login';
import { ClerkProvider, SignedIn ,SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";

import MainTabs from './App/navigation/TabNavigation.jsx'
import Navigation from './App/navigation/Navigation';
import React, { useEffect, useState } from 'react';
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


 
export default function App() {
  
  return (
    <ClerkProvider tokenCache={tokenCache}
    publishableKey='pk_test_c21pbGluZy1tb2xsdXNrLTAuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <SafeAreaView style={styles.container} >
      {/*  Sign In Component */}
        <SignedIn>
          <Navigation/>
              
        </SignedIn>
        {/* Signout In Component */}
        <SignedOut>
           <Login/>
        </SignedOut>
        <StatusBar style='auto'/>
    </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
  },
});
