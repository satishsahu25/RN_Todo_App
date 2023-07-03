// import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import userdata from '../data/userdata';


// const Home = ({navigation}) => {
//   const [users, setusers] = useState([]);
//   if(users.length==0){
//     setusers(userdata);
//   }


//   const handleclick=({item})=>{
//         navigation.navigate('')
//   }

//   return (
//     <View>
//       <FlatList
//         data={users}
//         renderItem={({item}) => (
//           <TouchableOpacity
//           onPress={({item})=>handleclick(item)}
//           key={item.id}
//           >
//             <View>
//               <Text>{item.name}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//       <Text>fdsfsd</Text>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});
