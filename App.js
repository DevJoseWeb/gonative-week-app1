import React, { Component } from 'react';

import { View, Text, StyleSheet, Share } from 'react-native';

export default class App extends Component {
  componentDidMount() {
    Share.share({
      title: 'GoNative Week',
      message: 'Essa semana da GoNative Week está sendo demais, faça sua inscrição',
      url: 'http://code.rocketseat.com.br/gonative-week',
    });
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
});
