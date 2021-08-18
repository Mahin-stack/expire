import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import firebase from 'firebase';

export default class LoadingScreen extends Component {
  
    componentDidMount() {
        this.checkIfLoggedIn();
      }
    
      checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(
          function(user) {
            console.log('AUTH STATE CHANGED CALLED ');
            console.log(user);
           if (user) {
              this.props.navigation.navigate('AllProducts');
            } else {
              this.props.navigation.navigate('LoginScreen');
            }
          }.bind(this)
        );
      };
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <Text>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
    },
})