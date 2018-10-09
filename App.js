import React, { Component } from 'react';
import {View, Button, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import {Constants} from 'expo';
import Task from './Task'
import Timer from './Timer'

let id = 0

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      text: ''
    }
  }

  submitAndClear = () => {
    this.setState({
      text: ''
    })
  }

  addToDo() {
    id++
    const text = this.state.text
    this.setState({
      todos: [
        ...this.state.todos, {id: id, text: text, checked: false}
      ],
    })
    this.submitAndClear()
    console.log("THE CURRENT STATE IS:", this.state.text)
  }

  removeToDo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleToDo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.task.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }
      })
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <Text>
          Todo Count: {
            this.state.todos.length
          }
        </Text>
        <Text>
          Unchecked Todo Count: {
            this.state.todos.filter(todo => !todo.checked).length
          }
        </Text>
        <TextInput style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({text})} clearButtonMode="always" />
        <Button onPress={() => this.addToDo()} title="Add item" />
        <ScrollView style={styles.fill} >
          {this.state.todos.map(todo => ( 
            <Task 
              onToggle={() => this.toggleToDo(todo.id)}
              onDelete={() => this.removeToDo(todo.id)}
              todo={todo}
              key={todo.id}
            />
          ))}
        </ScrollView>
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