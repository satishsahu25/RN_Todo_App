import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Globalstyle from '../utils/Globalstyle';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addtask, addtaskid} from '../redux/actions';

const Todo = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskreducer);
  const dispatch = useDispatch();

  useEffect(() => {
    gettasks();
  }, []);
  const gettasks = async() => {
  try{
    await AsyncStorage.getItem('Tasks')
    .then(data => {
      const parsedTask = JSON.parse(data);
      if (parsedTask && typeof parsedTask === 'object') {
        dispatch(addtask(parsedTask));
      }
    })
    .catch(err => {
      console.log(err);
    });

  }catch(err){
        console.log(err);
  }
  };

  const handledelete = async(id )=> {
    const filteredTasks = tasks.filter(task => task.ID !== id);
   await  AsyncStorage.setItem('Tasks', JSON.stringify(filteredTasks))
      .then(() => {
        dispatch(addtask(filteredTasks));
        // Alert.alert('Success!', 'Deleted Successfully');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.listitem}
              onPress={() => {
                dispatch(addtaskid(item.ID));
                navigation.navigate('Task');
              }}>
              <View style={styles.itemrow}>
                <View style={styles.itembody}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <Text style={styles.desc}>{item.Desc}</Text>
                </View>
                <TouchableOpacity style={styles.delete} onPress={()=>{handledelete(item.ID)}}>
                  <FontAwesome5 name={'trash'} siz={25} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(addtaskid(tasks.length + 1));
          navigation.navigate('Task');
        }}>
        <FontAwesome5 name={'plus'} size={20} color="#ffffff" />
      </TouchableOpacity>
      {/* <Text  style={[Globalstyle.customfont]}>Todo</Text> */}
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  itemrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itembody: {
    flex: 1,
  },
  delete: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listitem: {
    marginVertical: 10,
    marginHorizontal: 7,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    color: '#000000',
    fontSize: 30,
    margin: 5,
  },
  desc: {
    color: '#999999',
    fontSize: 20,
    margin: 5,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
