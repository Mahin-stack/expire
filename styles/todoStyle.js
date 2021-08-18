import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
       },
      header: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
      text: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black"
      },
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
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 8,
        paddingHorizontal: 20,
        justifyContent: "center"
      },
      iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
        elevation: 40,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height : 10
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
      },
      text: {
          fontSize: 17 ,
          fontWeight: 'bold'
      },
      items: {
        marginTop: 30,
      },
})
export {styles};