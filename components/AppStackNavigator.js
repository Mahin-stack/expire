import { createStackNavigator } from 'react-navigation-stack'
import AddProduct from '../screens/AddProduct'
import AllProducts from '../screens/AllProducts';
import Recepies from '../screens/Recepies';
import Settings from '../screens/Settings';
import LoginScreen from '../screens/LoginScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Dummy from '../screens/Dummy';
export const AppStackNavigator = createStackNavigator({
  AllProducts : {
    screen : AllProducts,
    navigationOptions:{
      headerShown : false
    }
  },
  Dummy : {
    screen : Dummy,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'AllProducts'
    });