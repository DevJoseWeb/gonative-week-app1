import React, { Component } from 'react';

import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

export default class App extends Component {
  state = {
    nome: '',
  }

  async componentDidMount() {
    const nome = await AsyncStorage.getItem('@GoNative:nome');
    this.setState({ nome });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Meu nome é {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
