// import React,{ Component } from "react";
// import { View, Button, Text, FlatList, StyleSheet } from "react-native";
// import MyHeader from "../components/MyHeader";
// import firebase from "firebase";
// import db from '../config';

// export default class Settings extends Component {
//     constructor(props){
//        super(props)
//          this.state={
//             emailId: firebase.auth().currentUser.email,
//             details: [],
//          }
//          this.requestRef= null;
//     }

//     getDetails = () => {
//         this.requestRef = db.collection("item_details")
//         .where("emailId", "==", this.state.emailId)
//         .onSnapshot(snapshot => {
//           var details = [];
//           snapshot.docs.map(doc => {
//             var item = doc.data();
//             item["doc_id"] = doc.id;
//             details.push(item);
//           });
//           this.setState({
//             details: details
//           });
//         });
//     }

//     componentDidMount(){
//         this.getDetails();
//     }
//     componentWillMount(){
//         this.requestRef
//     }

//     render() {
//         return (
//         <View style={styles.cont}>
//          <MyHeader navigation={this.props.navigation} title="Settings"/>
            
//             <View style={{flex: 0.09, backgroundColor: "red", flexDirection: "row" ,justifyContent: "space-between", marginTop: "55%"}}>
//               <Text style={{fontSize: 18, marginTop: 10,  marginLeft: 10,}}>Name : </Text>
//               <Text style={{fontSize: 18, marginTop: 10,  marginRight: 10,}}>date : </Text>
//             </View>

//           <FlatList
//           style={styles.cont}
//           data={this.state.details}
//           keyExtractor={ (item) => item.id}
//           renderItem={({ item }) => {
//               return(             
//                 <View style={{display: "flex", flexDirection: "row", marginTop: 10, justifyContent: "space-between"}}>
//                 <Text>{item.item}</Text>
//                 </View>
//               )
//           }}
//           />
//          </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     cont: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// })

import React,{ Component } from "react";
import { View, Button, Text, FlatList, StyleSheet } from "react-native";
import MyHeader from "../components/MyHeader";


export default class Settings extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <MyHeader title="Settings" navigation={this.props.navigation} />
            </View>
        )
    }
}