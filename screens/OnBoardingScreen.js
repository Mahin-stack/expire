import React from 'react';
import { View, Text, Image, Dimensions, ActivityIndicator , StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}


const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);
const {width} = Dimensions.get("window")
const AspectRatio = 750 / 1125
const height = width * AspectRatio


export default class OnBoardingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      loading: true,
      emailId: '',
      password: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('first_time').then((value) => {
      this.setState({ showRealApp: !!value, loading: false });
    });
  }

  _onDone = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('LoginScreen');
    });
  };

  _onSkip = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      this.setState({ showRealApp: true });
        this.props.navigation.navigate('LoginScreen');
    });
  };

 
  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      this.props.navigation.navigate('AllProducts')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }
 

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                db.collection('users').doc(result.user.uid)
                  .set({
                    emailId: result.user.email,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now(),
                    doc_id: result.user.uid,
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                db.collection('users').doc(result.user.uid).update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };

  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        behaviour: "web",
        iosClientId:
        "531920236585-g6msd2cl77qccbmsads94p9otgmsfsmq.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.onSignIn(result);
        this.props.navigation.navigate("LoadingScreen")
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e.message);
      return { error: true };
    }
  };
  
  render() {
    if (this.state.loading){ 
    return (
    <ActivityIndicator size="large" />
    )}





    if (this.state.showRealApp) {
      return( 
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
        <Text style={styles.text}>Expiree</Text>
        
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
        
        <View style={{alignItems: "center", marginTop: 8}}>
        <TouchableOpacity style={styles.buttonContainer}
        onPress = {() => {this.userLogin(this.state.emailId, this.state.password)}}>
        <Text style={styles.buttonText}>SignIn</Text>
        </TouchableOpacity>
        </View>
        
        
        <TouchableOpacity 
        style={styles.forgotButton} 
        onPress={() => {this.props.navigation.navigate("SignUpScreen")}}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
        </TouchableOpacity> 

        
         <View style={{alignItems: "center", marginTop: 8}}>
         <TouchableOpacity
           style={styles.googleSigninContainer}
           onPress={() => this.signInWithGoogleAsync()}>
            <AntDesign name="google" size={24} style={{padding: 8}}/> 
            <Text>Sign In with Google</Text>
          </TouchableOpacity>
         </View>
       
        
        </View>
        </View>
        </View>
        <View style={{height:100, backgroundColor: "#030D34"}}>
        </View>
        </View>
      )
       }
        
       




       else {
      return (
       
          <Onboarding
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          DotComponent={Dots}
          onDone={this._onDone}
          onSkip={this._onSkip}
          pages={[
            {
              backgroundColor: '#a6e4d0',
              image: <Image source={require('../assets/on1.png')} />,
              title: 'Connect to the World',
              subtitle: 'A New Way To Connect With The World',
            },
            {
              backgroundColor: '#fdeb93',
              image: <Image source={require('../assets/on2.png')} />,
              title: 'Share Your Favorites',
              subtitle: 'Share Your Thoughts With Similar Kind of People',
            },
            {
              backgroundColor: '#e9bcbe',
              image: <Image source={require('../assets/on3.png')} />,
              title: 'Become The Star',
              subtitle: "Let The Spot Light Capture You",
            },
          ]}
          />
        
      );
    }
  }
}



const styles = StyleSheet.create({
  parent : {
    borderBottomLeftRadius: 100,
    overflow : 'hidden',
    height: height * 0.63,
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
    marginTop: 40,
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
    marginTop: 10,
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


// import React,{ Component } from "react";
// import { View, Text } from "react-native";
// import MyHeader from "../components/MyHeader";
// import { styles } from "../styles/styles";

// export default class OnBoardingScreen extends Component {
//     render() {
//         return (
//            <View style={{flex: 1}}>
//          <MyHeader navigation={this.props.navigation} title="OnBoardingScreen"/>
//            </View>
//         )
//     }
// }