import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Splash extends Component {
    componentDidMount()
    {
        setTimeout(() =>{
            this.props.navigation.navigate('DisplayPage');
        },4000)
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.splashBoldText}> Splash </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    splashBoldText:{
        fontWeight:'bold',
        fontFamily:'Verdana',
        fontSize:20
    }
});