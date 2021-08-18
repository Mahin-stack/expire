import { Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#f2f2f2",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'stretch',
       // marginTop: 0,
      },
    
    inputContainer: {
        width: "80%",
        marginTop: 14,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "grey",
        borderRadius: 25
      },
    input : {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: "black",
        fontWeight: 'bold',
    },
      buttonContainer: {
        width: 150,
        backgroundColor: "#ff5a66",
        borderRadius: 25,
        padding: 10,
        marginTop: 30
      },
      buttonText: {
        color: "white",
        textAlign: "center",
      },
      img: {
        width: "100%",
        height: "100%",
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
        marginLeft: 5
      },
      // proView: {
      //   bottom: 320,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   backgroundColor: "#ff5a66",
      //   width: 535,
      //   height: 110,
      //   position: "relative"
      // },
      
      proText : {
        color: '#95a5a6', 
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
       marginTop: -150

      },

      avatar: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
      //  backgroundColor: "#32867d",
        marginTop: -10,
      },
  })

  export {styles};