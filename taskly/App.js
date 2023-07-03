import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import Todo from './src/screens/Todo';
import Done from './src/screens/Done';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Task from './src/screens/Task';
import {Provider} from 'react-redux'
import { Store } from './src/redux/store';
import Temp from './src/screens/Temp';


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focussed, size, color}) => {
          let iconename;
          if (route.name === 'Todo') {
            iconename = 'clipboard-list';
            size = focussed ? 25 : 20;
          } else if (route.name === 'Done') {
            iconename = 'clipboard-check';
            size = focussed ? 25 : 20;
          }
          return <FontAwesome5 name={iconename} size={size} color={color} />;
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: '#0080ff',
      //   inactiveTintColor: '#777777',
      //   labelStyle: {fontSize: 15, fontWeight: 'bold'},
      // }}
      >
      <Tab.Screen name="Todo" component={Todo} />
      <Tab.Screen name="Done" component={Done} />
    </Tab.Navigator>
  );
}

const Rootstack = createStackNavigator();

const App = () => {
  return (
 <Provider store={Store}>
     <NavigationContainer>
      <Rootstack.Navigator screenOptions={{header: () => null}}>
      <Rootstack.Screen name="Temp" component={Temp} />
        {/* <Rootstack.Screen name="Splash" component={Splash} />
        <Rootstack.Screen name="My Tasks" component={HomeTabs} />
        <Rootstack.Screen name="Task" component={Task} /> */}
        
      </Rootstack.Navigator>
    </NavigationContainer>
 </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
