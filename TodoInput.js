import React, { Component } from 'react';
import {KeyboardAvoidingView, Button, TextInput, Text, StyleSheet, View} from 'react-native';
import {Constants} from 'expo';

export default class App extends Component {
  
  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text style={styles.titles}>Set a Timer:</Text>

        <TextInput keyboardType='numeric' style={styles.timerInput} placeholder='Hours' value={this.props.todoItem.hr} onChangeText={this.props.updateHour} controlled={true} />

        <TextInput keyboardType='numeric' style={styles.timerInput} placeholder='Minutes' value={this.props.todoItem.min} onChangeText={this.props.updateMin} controlled={true} />

        <TextInput style={styles.input} value={this.props.todoItem.text} onChangeText={this.props.changeText} clearButtonMode="always" />

        <View style={styles.bottomButton}>
            <Button onPress={this.props.addItem} title="Add item" style={styles.bottomButton} />
        </View>
      </KeyboardAvoidingView>
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
  timerInput: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    width: 80,
    margin: 10
    },
    titles : {
        margin: 10
    },
  bottomButton: {
    margin: 50,
  }
})