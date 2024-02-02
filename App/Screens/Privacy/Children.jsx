import { View, Text, ScrollViewBase } from "react-native";
import React from "react";
import Heading from "../../components/Heading";
const ChildrenInformationDoc = {
  parg_1:
    "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
  parg_2:
    "Melo-services does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our App, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.",
};
export default function ChildrensInformation() {
  return (
    <View>
       <Heading title={"Children's Information"} />
      <View className='flex justify-center mx-4'>
      <Text className='p-1 space-x-1'>{(ChildrenInformationDoc?.parg_1).slice(0,200)} ...
      </Text>
      <Text className='p-1 space-x-1'>{(ChildrenInformationDoc?.parg_2).slice(0,200)} ...
      </Text>
      </View>
    </View>
  );
}
