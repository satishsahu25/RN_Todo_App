import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addtask,addtaskid } from '../redux/actions';
import { useSelector,useDispatch } from 'react-redux'

const Task = ({navigation}) => {
    const [task,setask] =useState('');
    const [desc,setdesc] =useState('');

    const dispatch=useDispatch();
    const {tasks,taskID}=useSelector((state)=>state.taskreducer);


    useEffect(()=>{
        getTask();
    },[])
    const getTask=()=>{
        const Task=tasks.find(task=>task.ID===taskID);
        if(Task){
            setask(Task.Title)
            setdesc(Task.Desc)
        }

    }




    const handletask=()=>{
        if(task.length==0){
            Alert.alert('Warning','Please select a task');
        }else{
            try{
                var Task={
                    ID:taskID,
                    Title:task,
                    Desc:desc
                }

                const index=tasks.findIndex(task=>task.ID===taskID);
                let newtasks=[];
                if(index>-1){
                    newtasks=[...tasks];
                    newtasks[index]=Task;
                }else{
                    newtasks=[...tasks,Task];
                }
               
                AsyncStorage.setItem('Tasks',JSON.stringify(newtasks))
                .then(()=>{
                    dispatch(addtask(newtasks));
                    // Alert.alert('Success!','Added successfully');
                    navigation.goBack();
                })
                .catch((err)=>{
                    console.log(err);
                })

            }catch(err){
                console.log(err);
            }
        }

    }

  return (
    <View style={styles.body}>
      <TextInput
        value={task}
        style={styles.input}
        placeholder='Enter your task...'
        onChangeText={(txt)=>setask(txt)}
      /> 
      <TextInput
        value={desc}
        style={styles.input}
        placeholder='Description...'
        multiline
        onChangeText={(txt)=>setdesc(txt)}
      />
       <TouchableOpacity
       style={styles.btn}
       onPress={handletask}
       >
        <Text style={styles.txtstyle}>Create Task</Text>
       </TouchableOpacity> 
    </View>
  )
}

export default Task

const styles = StyleSheet.create({

    body:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    input:{
        width:'100%',
        borderWidth:1,
        backgroundColor:'#fff',
        borderRadius:5,
        textAlign:'left',
        fontSize:20,
        marginVertical:10,
        paddingHorizontal:10
    },
    btn:{
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        backgroundColor:"#1e9900",
        paddingHorizontal:20,
        paddingVertical:10
    },
    txtstyle:{
        fontSize:25,
        fontFamily:'Helvetica Neue',
        fontWeight:'bold',
        color:'#fff'
    }
})