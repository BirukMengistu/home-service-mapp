import React from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import Heading from '../../components/Heading'

const aboutus={
    value:"Welcome to Melo-Services, where convenience meets quality in the realm of home services. We understand the challenges of finding reliable and skilled professionals to take care of your home needs. That's why we created a platform that connects homeowners with trusted service providers, ensuring a seamless and satisfactory experience every time."
}
/**
* @author birdev
* @function Aboutus
**/
export const Aboutus = () => {

 return(
  <View >
    <Heading title='About us'/>
      <View className='flex justify-center  mx-4'>
      <Text>
        {aboutus.value}
     </Text>
      </View>
      
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})