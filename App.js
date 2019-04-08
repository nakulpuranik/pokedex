/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { RootStack } from './src/navigation';
import { createAppContainer } from "react-navigation";

const App = createAppContainer( RootStack );

export default App;
