import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import HelloPage from './src/HelloPage';
import PeoplePage from './src/PeoplePage';
import DisplayPage from './src/DisplayPage';
import Splash from './src/Splash';

const HelloPageNavigator = createStackNavigator({
  'Hello Page': {
    screen: HelloPage,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const PeoplePageNavigator = createStackNavigator({
  'People Page': {
    screen: PeoplePage,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const DisplayPageNavigator = createStackNavigator({
  'Display Data': {
    screen: DisplayPage,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});


const DrawerNavigator = createDrawerNavigator({
  HelloPage: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/home.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Hello Page',
    },
    screen: HelloPageNavigator,
  },
  PeoplePage: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/user.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'People Page',
    },
    screen: PeoplePageNavigator,
  },
  DisplayPage: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/checked.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Display Data',
    },
    screen: DisplayPageNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash :{screen: Splash},
    HelloPage: {screen: HelloPage},
    Drawer: {screen: DrawerNavigator},
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = createAppContainer(AppSwitchNavigator);
export default App;