import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import firebase from 'firebase';
import db from '../config';
import TodoListItem from './TodoListItem';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/todoStyle';

const ShoppingList = () => {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("");
    const email = firebase.auth().currentUser.email;

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = () => {
        db.collection("s_list")
        .where("emailId", "==", email)
        .onSnapshot(querySnapshot => {
            setTodos(
                querySnapshot.docs.map((doc) => ({
                  id: doc.id,
                  todo: doc.data().todo,
                }))
              );
        })
    }
    

    const addTodos = () => {
        if(todoInput === ""){
            return(Alert.alert("please fill"))
        }else{
            db.collection("s_list").add({
                emailId: firebase.auth().currentUser.email,
                todo: todoInput,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setTodoInput("");
        }
        }
      

    return (
     <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
              <View style={styles.header}>
                <Text style={styles.text}>Shopping List</Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.inputContainer}>
                <TextInput 
                 placeholder="e.g. Tomatoes [2kgs]"
                 placeholderTextColor= "grey"
                 onChangeText={(text) => {setTodoInput(text)}}
                 value={todoInput}
                 />
                </View>
           
                <TouchableOpacity
                  onPress={addTodos}>
                <View style={styles.iconContainer}>
                  <Text>+</Text>
                </View>
              </TouchableOpacity>
              
              </View> 
              <ScrollView style={{marginTop: 30}}>
               {todos.map((todo) => (
                <TodoListItem
                todo={todo.todo}
                id={todo.id}
                /> 
              ))} 
              </ScrollView>
            </SafeAreaView>
    )
}
export default ShoppingList;
