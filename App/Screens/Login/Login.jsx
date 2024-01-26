import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React,{useCallback} from "react";
import Colors from "../utls/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser} from '../../hooks/warmUpBrowser'
import * as Animatable from 'react-native-animatable'




WebBrowser?.maybeCompleteAuthSession();
export default function Login() {
  
    useWarmUpBrowser();
    const { startOAuthFlow  } = useOAuth({ strategy: "oauth_google"});
   
    const onPress = useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
          console.log({'createdSessionId':createdSessionId})
        } else {
          // Use signIn or signUp for next steps such as MFA
        
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
    
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
       
          <Animatable.Image
          animation='fadeIn'
          easing='ease-in-out'
          source={require("./../../../assets/loading.png")}
          style={styles.LoginImage}
          /> 
      
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 27, color: "white", textAlign: "center" }}>
          Let's find{" "}
          <Text style={{ fontWeight: "bold" }}>
            Your day to day services providers
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "white",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Discover the finest Services near your vicinity who offer
          top-notch services with impeccable delivery.
        </Text>
        <TouchableOpacity  onPress={onPress}
        style={styles.button}>
          <Text
            style={{ textAlign: "center", fontSize: 24, color: Colors.SECONDARY }}
          >
            Shall we Begin..
          </Text>
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  LoginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#000000",
  },

  subContainer: {
    width: "100%",
    backgroundColor: Colors.SECONDARY,
    height: "70%",
    padding: 20,
    marginTop: -20,
    borderTopEndRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    width: "100%",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    marginTop: 20,
  },
});
