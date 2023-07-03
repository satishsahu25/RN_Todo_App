import { View, Text } from 'react-native'
import React from 'react'

const Temp = () => {

    const arr=[1,2,3,4,5,6];

    let temp;
    temp=arr.filter((item)=>item<4);
    console.log(temp);

  return (
    <View>
      <Text>Temp</Text>
    </View>
  )
}

export default Temp

