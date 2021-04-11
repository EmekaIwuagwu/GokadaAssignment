import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class HelloPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> HelloPage </Text>
        <Button title='People Page' onPress = {() => this.props.navigation.navigate('PeoplePage')}
        />
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
    });