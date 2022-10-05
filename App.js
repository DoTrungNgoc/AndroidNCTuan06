import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
export default function App() {
  const [list,setList] = useState(["Read book","Play game"]);
  const [value,setValue] = useState();
  var remove = (s) => {
    let list1 = list.filter(x => x!=s);
    setList(list1);
  };
  return (
    <View style={styles.container}>
       <View style={{marginTop:50,width:'90%',display:'flex',flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
          <TextInput
            style={styles.input}
            placeholder="Input todo"
            onChangeText={(value) => setValue(value)}
          
          />
          <TouchableOpacity onPress={()=>setList([...list,value])}  style={{height:50,width:100,backgroundColor:'blue',justifyContent:'center',alignItems:'center',borderRadius:20,fontSize:22,color:'white'}}>Add</TouchableOpacity>
       </View>
       <ScrollView style={{width: '100%'}}>
        {
          list.map((item,index) =>  {
            return (
              <View style={{backgroundColor:'#b3d9ff', width:'90%',height:40,margin:10,borderRadius:20,flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
                <Text style={{fontSize:18, marginLeft:40}}>{index}. {item}</Text>
                <TouchableOpacity onPress={()=>remove(item)} style={{marginRight:20,width:60,height:30,backgroundColor:'red',justifyContent:'center',alignItems:'center',borderRadius:20,color:'white'}}>Delete</TouchableOpacity>
            </View>
            )
          }
           )
        }
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 50,
    width:200,
    backgroundColor:"#ffe6e6",
    borderWidth: 1,
    borderColor:"black",
    padding: 10,
    borderRadius:20,
    fontSize:20
  }
});
