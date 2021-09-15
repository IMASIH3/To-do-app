import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
     {/* Today's Tasks */}
     <View style={styles.taskWrappper}>
       <Text style={styles.sectionTitle}> Today's Task</Text> 
       <View style={styles.items}> 
       </View>

     <View style={styles.items}>
     <Task text={'Task 1'}/> 
     <Task text={'Task 2'}/> 
    </View>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  taskWrappper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,

  },
});



