import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import db from "../config";

const TodoListItem = ({ todo, id }) => {

  const deleteTodo = () =>{
    db.collection("s_list").doc(id).delete();
  }

  return (
    <View style={styles.footer}>
        <View style={styles.inputContainer}>
        <Text style={{alignItems: "center"}}>{todo}</Text>
        </View>
        <TouchableOpacity onPress={deleteTodo}>
            <View style={styles.iconContainer}>
            <Text>X</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
      footer: {
        top: 10,
        color: "grey",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20
      },
      inputContainer: {
        backgroundColor: "#fff",
        elevation: 40,
        flex: 1,
        marginVertical: 20,
        height: 50,
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height : 6
        },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
      },
      iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#d2d7d3",
        elevation: 40,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -20
      },
    })

export default TodoListItem;
