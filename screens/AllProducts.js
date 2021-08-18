import React, { Component } from "react";
import { View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated from "react-native-reanimated";
import firebase from "firebase";
import db from "../config";
import { styles } from "../styles/styles2";
import MyHeader from "../components/MyHeader";
import moment from "moment";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export default class AllProducts extends Component {
  scrollY= new Animated.Value(0);
  constructor(props) {
    super(props);
    this.state = {
      emailId: firebase.auth().currentUser.email,
      allItems: [],
    }
    this.requestRef = null
  }

  getAllItems = () => {
    this.requestRef = db.collection("item_details")
    .where("emailId", "==", this.state.emailId)
    .onSnapshot(snapshot => {
      var allItems = [];
      var id = ''
      snapshot.docs.map(doc => {
        var item = doc.data();
        id= doc.id
        item["doc_id"] = doc.id;
        allItems.push(item);
      });
      this.setState({
        allItems: allItems,
        id: id,
      });
    });
  }

  deleteItems = (id) => {
      db.collection("item_details").doc(id).delete()
  }

    componentDidMount(){
      this.getAllItems();
    }

    componentWillUnmount(){
      this.requestRef();
    }
   
    render(){
      return(
      <Animated.View style={styles.container}>
    <MyHeader navigation={this.props.navigation} title="All Products"/>

            <AnimatedFlatList       
            style={styles.container}
            keyExtractor={ (item) => item.id}
            data={this.state.allItems}
            onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.scrollY}}}],
            {useNativeDriver: true} 
          )}
           contentContainerStyle = {{
             padding: 20,
             paddingTop: StatusBar.currentHeight || 20
           }}
           renderItem = { ({ item, index }) => {
           const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 5)
              ]
              let scale = this.scrollY.interpolate({
                inputRange,
              outputRange :[1,1,1,0],
              })
    
              const opacityRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2)
              ]
              let opacity = this.scrollY.interpolate({
                inputRange: opacityRange,
              outputRange :[1,1,1,0],
              })
            return (
        <Animated.View 
        style={[styles.viewContainer, {transform : [{scale}] }, opacity ]}>
            <Image source = {{uri : item.image ? item.image : "https://www.vhv.rs/dpng/d/312-3120300_default-profile-hd-png-download.png"}} style={styles.img}/>
                <View style={styles.textContainer}>
                <Text style={styles.text}>{item.item}</Text>
                <Text style={styles.text2}>Expiring : {moment(item.date).endOf('day').fromNow()}</Text>
                <Text style={styles.text3}>Note : {item.note}</Text>
                <Text style={styles.text4}>Quantity : {item.quantity}</Text>
                <View style={styles.delTxt}>
                    <TouchableOpacity onPress={() => this.deleteItems(this.state.id)}>
                        <Text style={styles.text5}>delete</Text>
                    </TouchableOpacity>
                </View>
                </View>
        </Animated.View>
            )
           }}
           />

       </Animated.View>
    )
  }
}