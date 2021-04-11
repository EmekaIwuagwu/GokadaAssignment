import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> PeoplePage </Text>
        <Button title='Hello Page' onPress = {() => this.props.navigation.navigate('HelloPage')}
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