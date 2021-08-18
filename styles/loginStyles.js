import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get("window")
const {AspectRatio} = 750 / 1125
const {height} = width * AspectRatio

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

  export {styles};