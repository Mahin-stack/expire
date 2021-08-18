import React from 'react';
import { View , Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Settings from '../screens/Settings';
import AllProducts from '../screens/AllProducts';
import ShoppingList from '../screens/ShoppingList'
import Recepies from '../screens/Recepies';
import AddProduct from '../screens/AddProduct';
import { AppStackNavigator } from './AppStackNavigator';

  export  const  AppTabNavigator = createBottomTabNavigator({

        AllProduct: {
            screen: AppStackNavigator,
            navigationOptions :{
                tabBarIcon : ({focused}) => (
                    <View style={{justifyContent: "center", alignItems:"center", top: 3}}>
                        <Image
                         source={require("../assets/home.png")}
                         resizeMode='contain'
                          style={{width:32, height:32, tintColor : focused ? "#e32f45" : "#748c94"}}/>
                    </View>
                ),
                tabBarLabel : <View />,
                
            }
        },

        ShoppingList : {
            screen: ShoppingList,
            navigationOptions :{
                tabBarIcon : ({focused}) => (
                    <View style={{justifyContent: "center", alignItems:"center", top: 3}}>
                        <Image
                        source={require("../assets/list.jpg")}
                        resizeMode='contain'
                        style={{width:32, height:32, tintColor : focused ? "#e32f45" : "#748c94"}}/>
                    </View>
                ),
            tabBarLabel : <View />,
            } 
            },

        AddProduct : {
            screen: AddProduct,
            navigationOptions :{
                tabBarIcon : ({focused}) => (
                        <Image
                        source={require("../assets/add.png")}
                        resizeMode='contain'
                        style={{width:37, height:37, tintColor : "#fff"}}/>
                ),
                tabBarButtonComponent : ( {children, onPress} ) => (
                    <TouchableOpacity
                    onPress={onPress}
                    style={{top: -35, justifyContent:"center", alignItems: "center", shadowColor: "#7F5DF0", shadowOffset:{width: 0, height: 10}, shadowOpacity: 0.25, shadowRadius: 3.5, elevation: 5}}
                   >
                       <View style={{width: 78, height: 78, borderRadius: 39, backgroundColor: "#e32f45"}}>
                           {children}
                       </View>
                   </TouchableOpacity>
                ),
                tabBarLabel : <View />,
            }
            },
            
            Recepies : {
                screen: Recepies,
                navigationOptions :{
                    tabBarIcon : ({focused}) => (
                        <View style={{justifyContent: "center", alignItems:"center", top: 3}}>
                            <Image
                            source={require("../assets/search.png")}
                            resizeMode='contain'
                            style={{width:32, height:32, tintColor : focused ? "#e32f45" : "#748c94"}}/>
                        </View>
                    ),
                tabBarLabel : <View />,
                } 
                },
            Settings : {
            screen: Settings,
            navigationOptions :{
                tabBarIcon : ({focused}) => (
                    <View style={{justifyContent: "center", alignItems:"center", top: 3}}>
                        <Image
                        source={require("../assets/sett.png")}
                        resizeMode='contain'
                        style={{width:32, height:32, tintColor : focused ? "#e32f45" : "#748c94"}}/>
                    </View>
                ),
            tabBarLabel : <View />,
            } 
            },
    })

 