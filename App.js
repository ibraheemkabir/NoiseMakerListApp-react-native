import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Component from './components/component'
import Component3 from './components/component3'

import {createStackNavigator,createAppContainer, createDrawerNavigator} from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: Component3,
    Profile: Component
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#C3E4FD',
        color: 'black',
      },
      headerTitleStyle: {
        padding: 0,
        color: 'black'
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
)

export default class App extends React.Component {
  render() {
    return(
        <AppContainer />
    )
  }
}

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
