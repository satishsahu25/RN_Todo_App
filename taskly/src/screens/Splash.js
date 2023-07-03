import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('My Tasks');
  },2000);

  return (
    <View style={styles.body}>
      <Image source={require('../assets/todo.png')} style={styles.logo} />
      <Text style={styles.logotxt}>To-Do App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#0080ff'
  },

  logo: {
    height: 200,
    width: 200,
  },
  logotxt:{
    fontSize:25,
    fontWeight:'800',
    marginBottom:100
  }
});
