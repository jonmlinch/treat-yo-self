import React, { Component } from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import {Constants} from 'expo';

export default class App extends Component {
  
  render() {
    return (
      <View>
        <TextInput style={styles.input} value={this.props.todoItem.text} onChangeText={this.props.changeText} clearButtonMode="always" />
        <Button onPress={this.props.addItem} title="Add item" />
      </View>
    )

  }

}

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  fill: {
    flex: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
  }
})