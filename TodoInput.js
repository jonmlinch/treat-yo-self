import React, { Component } from 'react';
import {KeyboardAvoidingView, TextInput, Text, StyleSheet, View} from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMethod} from 'react-native-elements'
import {Constants} from 'expo';

export default class App extends Component {
  
  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.todoContainer}>
          <Text style={styles.titles}>Set a Timer:</Text>

          <TextInput keyboardType='numeric' style={styles.timerInput} placeholder='Hours' value={this.props.todoItem.hr} onChangeText={this.props.updateHour} controlled={true} />

          <TextInput keyboardType='numeric' style={styles.timerInput} placeholder='Minutes' value={this.props.todoItem.min} onChangeText={this.props.updateMin} controlled={true} />
        </View>

        <TextInput style={styles.input} placeholder="What do need to do?" value={this.props.todoItem.text} onChangeText={this.props.changeText} clearButtonMode="always" />

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
    borderRadius: 5,
    height: 40,
    padding: 10,
    margin: 10,
    backgroundColor: '#f3f4f4'
  },
  timerInput: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    margin: 10,
    padding: 5,
    backgroundColor: '#f3f4f4'
    },
  titles : {
        margin: 10,
        color: "#f3f4f4"
    },
  bottomButton: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    color: '#f3f4f4'
  }
})