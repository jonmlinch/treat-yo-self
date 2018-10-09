import React, { Component } from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import {Constants} from 'expo';

export default class App extends Component {
  
  render() {
    return (
      <View>
        <TextInput style={styles.input} value={this.props.todoItem.text} onChangeText={this.props.changeText} clearButtonMode="always" />
        <View style={styles.bottomButton}>
            <Button onPress={this.props.addItem} title="Add item" style={styles.bottomButton} />
        </View>
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
    height: 40,
    padding: 10,
    margin: 10
  },
  bottomButton: {
    margin: 50,
  }
})