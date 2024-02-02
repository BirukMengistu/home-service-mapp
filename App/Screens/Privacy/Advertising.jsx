import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Heading from '../../components/Heading';
const Advertising = {
    value:
      "Some of advertisers in our app may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.",
  };
  const Privacy_Policies = {
   parg_1:
      "You may consult this list to find the Privacy Policy for each of the advertising partners of Melo-services.",
      parg_2:
      "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Beacons that are used in their respective advertisements and links that appear on Melo-services. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on this app or other apps or websites.",
      parg_3:"Note that Melo-services has no access to or control over these cookies that are used by third-party advertisers."
  };
  const Third_Party_Privacy_Policies={
    parg_1:"Melo-services's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options."
  }
  const Online_Privacy_Policy_Only={
    parg_1:"This Privacy Policy applies only to our online activities and is valid for visitors to our App with regards to the information that they shared and/or collect in Melo-services. This policy is not applicable to any information collected offline or via channels other than this app. Our Privacy Policy was created with the help of the App Privacy Policy Generator from App-Privacy-Policy.com."
  }
export default function AdvertisingPartners() {
  return (
    <View>
      
      <Heading title='Privacy Policies'/>
      <View className='flex justify-center  mx-4'>
       <Text className='p-1 space-x-1'>{(Privacy_Policies?.parg_1).slice(0,200)} ... </Text>
      <Text className='p-1 space-x-1'>{(Privacy_Policies?.parg_2).slice(0,200)} ...
      </Text>
      <Text className='p-1 space-x-1'>{(Privacy_Policies?.parg_3).slice(0,200)} ...
      </Text>
      </View>
      <Heading title='Online Privacy Policy Only'/>
      <View className='flex justify-center items-center mx-4'>
        <Text className='p-1 space-x-1'>{(Advertising?.value).slice(0,200)} ...
      </Text>
      </View>
      <Heading title='Third Party Privacy Policies'/>
      <View className='flex justify-center mx-4'>
        <Text className='p-1 space-x-1'>{(Online_Privacy_Policy_Only?.parg_1).slice(0,200)} ...
      </Text>
      </View>
      <Heading title='Our Advertising Partners'/>
      <View className='flex justify-center items-center mx-4'>
        <Text className='p-1 space-x-1'>{(Third_Party_Privacy_Policies?.parg_1).slice(0,200)} ...
      </Text>
      </View>
      <View className='flex justify-center m-4'>
        <Text className='text-[18px]'>Google</Text>
        <TouchableOpacity>
            <Text
            className='text-blue-400'>https://policies.google.com/technologies/ads</Text></TouchableOpacity>
      </View>
    </View>
  )
}