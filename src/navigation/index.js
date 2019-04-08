import {
    createStackNavigator
} from 'react-navigation';

import Login from "../authentication/Login";
import Home from "../dashboard/Home";

export const RootStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  }
}, {
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none',
});