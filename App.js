import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import Task from "./components/Task";

export default function App() {
  // stores the current task
  const [ task, setTask ] = useState("");
  // store the list of tasks 
  const [ todos, setTodos ] = useState([]);

  function handleAddTask(){
    // to make the keyboard go back down after the task has been done
    Keyboard.dismiss();
    setTodos([...todos, task]);
    setTask("");
  };

  function completeTask(index) {
    let itemsCopy = [...todos];
    itemsCopy.splice(index, 1);
    setTodos(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
      >
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style = {styles.items}>
          {/* this is where the tasks will go */}
          {
            todos.map((item, index) => {
              return (
                <TouchableOpacity key = {index} onPress={() => completeTask(index)}>
                  <Task task={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      </ScrollView>
      {/* write a task */}
      {/* this pushes everything up when the keyboard comes up instead of just covering it */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.writeTaskWrapper}
      >
        <TextInput style= {styles.input} placeholder={"write a task"} value = {task} onChangeText={text => setTask(text)} />
        {/* essentially a button */}
        <TouchableOpacity onPress= {() => handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    marginLeft: '5%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    
  },
});
