import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Heading from "../../components/Heading";

const logfileDoc = {
  value:
    "Privacy Policy for Melo-services At Melo-services, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Melo-services and how we use it.If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.Log Files Melo-services follows a standard procedure of using log files. These files log visitors when they use app. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the app, tracking users' movement on the app, and gathering demographic information.",
};

const consent_Doc = {
  content:
    "By using our app, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.",
};
/**
 * @author
 * @function Logfiles
 **/
export const Logfiles = () => {
  return (
    <View>
      <Heading title={"Log Files"} />
      <View className="flex justify-center  mx-4">
        <Text className="p-1 space-x-1">
          {(logfileDoc?.value).slice(0, 200)} ...
        </Text>
      </View>
      <Heading title={"Consent"} />
      <View className="flex justify-center mx-4">
        <Text className="p-1 space-x-1">
          {(consent_Doc?.content)} 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
