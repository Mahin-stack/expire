import React,{Component} from "react";
import { View, Dimensions, Image, StyleSheet, Text, Alert, TextInput , TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import firebase from "firebase";
import db from '../config'

const {width} = Dimensions.get("window")
const AspectRatio = 750 / 1125
const height = width * AspectRatio

export default class SignUpScreen extends Component{ 
  constructor(){
    super()
    this.state={
      emailId: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      docId: '',
    }
  }
  createUniqueId(){
    return Math.random().toString(36).substring(5);
  }


  userSignUp = (emailId, password,confirmPassword) =>{
    if(password !== confirmPassword){
        return Alert.alert("password doesn't match\nCheck your password.")
    }else{
      var randomRequestId = this.createUniqueId()
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then(()=>{
        db.collection('users').add({
          emailId: this.state.emailId,
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          created_at: Date.now(),
          doc_id: randomRequestId
        }).then(function() {
          // Update successful.
          }).catch(function(error) {
          // An error happened.
          });
         this.props.navigation.navigate('AllProducts');
          Alert.alert('You Have Registerd Successfully!')
          })
          .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
      })
    }
  }

    render(){
      return (
        <View style={{flex: 1, backgroundColor: "#030D34"}}>
        <StatusBar barStyle="light-content"/>
        <View style={{backgroundColor: "white"}}>
        <View style={styles.parent}>
        <Image style={styles.child} source={require('../assets/Loginbg.png')} />
        </View>
        </View>
        <View style={{flex: 1, overflow: "hidden"}}>
        <Image style={{...StyleSheet.absoluteFillObject, width: width, height: height, top: -height * 0.67}} source={require('../assets/Loginbg.png')} />
        <View style={{flex:1, borderRadius: 90, borderTopLeftRadius:0 , backgroundColor: "white"}}>
        
        <View style={{paddingTop: 60}}>
        <Text style={styles.text}>Sign up</Text>
        
        <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name= "user" size={25} color="#666" />
      </View>
        <TextInput
        placeholder="Enter your Name " 
        style={styles.body}
        placeholderTextColor= "grey" 
        keyboardType="email-address"
        autoCorrect="false"
        onChangeText={(text) => {
          this.setState({
            firstName: text
          })
        }}
        value={this.state.firstName}
        />
        </View>

        <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name= "user" size={25} color="#666" />
      </View>
        <TextInput
        placeholder="Enter your Surname " 
        style={styles.body}
        placeholderTextColor= "grey" 
        keyboardType="email-address"
        autoCorrect="false"
        onChangeText={(text) => {
          this.setState({
            lastName: text
          })
        }}
        value={this.state.lastName}
        />
        </View>

        <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name= "mail" size={25} color="#666" />
      </View>
        <TextInput
        placeholder="Enter your Email " 
        style={styles.body}
        placeholderTextColor= "grey" 
        keyboardType="email-address"
        autoCorrect="false"
        onChangeText={(text) => {
          this.setState({
            emailId: text
          })
        }}
        value={this.state.emailId}
        />
        </View>
        
        <View style={styles.passwordContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name= "lock" size={25} color="#666" />
      </View>
        <TextInput
        style={styles.body}
        placeholder="Enter your Password" 
        placeholderTextColor= "grey" 
        secureTextEntry={true}
        onChangeText={(text) => {
          this.setState({
            password: text
          })
        }}
        value={this.state.password}
        />
        </View>
        
        
        <View style={styles.passwordContainer}>
        <View style={styles.iconStyle}>
        <AntDesign name= "lock" size={25} color="#666" />
      </View>
        <TextInput
        style={styles.body}
        placeholder="Confirm Password" 
        placeholderTextColor= "grey" 
        secureTextEntry={true}
        onChangeText={(text) => {
          this.setState({
            confirmPassword: text
          })
        }}
        value={this.state.confirmPassword}
        />
        </View>

        <View style={{alignItems: "center", marginTop: 8}}>
        <TouchableOpacity 
         style={styles.buttonContainer} 
         onPress = {() => {this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)}}>
        <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        </View>
        
        
        <TouchableOpacity 
        style={styles.forgotButton} 
        onPress={() => {this.props.navigation.navigate("LoginScreen")}}>
        <Text style={styles.navButtonText}>
          Already have an account? Login here
        </Text>
        </TouchableOpacity> 

        
       
        
        </View>
        </View>
        </View>
        <View style={{height:85, backgroundColor: "#030D34"}}>
        </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  parent : {
    borderBottomLeftRadius: 100,
    overflow : 'hidden',
    height: height * 0.6,
  },
    child : {
    width :width,
    height: height,
  },
  text:{
    fontSize : 28,
    color: "#030D34",
    fontFamily: "SFProDisplay-Semibold",
    textAlign: "center"
  },

  inputContainer: {
    height: 56,
    width: "80%",
    marginTop: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
    borderColor: "grey",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40
  },
  passwordContainer: {
    height: 56,
    width: "80%",
    marginTop: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
    borderColor: "grey",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40
  },
  buttonContainer: {
    width: 250,
    height: 54,
    backgroundColor: "#2CB9B0",
    borderRadius: 30,
    padding: 10,
   marginTop: 30
  },
  googleSigninContainer: {
    width: 240,
    height: 54,
    backgroundColor: "#2CB9B0",
    borderRadius: 30,
    padding: 10,
   marginTop: 15,
   flexDirection: "row",
   alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    textAlign: "center"
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#696969"
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
})
