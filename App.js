import React, { Component } from 'react';
import {View, Button, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import {Constants} from 'expo';
import Task from './Task';
import TodoInput from './TodoInput';
import TimerInput from './TimerInput';
import Timer from './Timer'

let id = 0

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      text: '',
      hr: '',
      min: '',
      sec: 0
    }
  }

  submitAndClear = () => {
    this.setState({
      text: '',
      hr: '',
      min: '',
      sec: ''
    })
  }

  addToDo() {
    id++
    const text = this.state.text
    const hr = this.state.hr
    const min = this.state.min
    const sec = this.state.sec
    this.setState({
      todos: [
        ...this.state.todos, {id: id, text: text, checked: false, min: min, hr: hr, sec: sec}
      ],
    })
    this.submitAndClear()
    console.log("THE CURRENT STATE IS:", this.state.timer)
  }

  removeToDo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleToDo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
          hr: todo.hr,
          min: todo.min,
          sec: todo.sec,
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
        <ScrollView>
          {this.state.todos.map(todo => ( 
            <View>
              <Task 
                onToggle={() => this.toggleToDo(todo.id)}
                onDelete={() => this.removeToDo(todo.id)}
                todo={todo}
                key={todo.id}
              />
            </View>
          ))}
        </ScrollView>
        <TodoInput 
          addItem={() => this.addToDo()} 
          todoItem={this.state} 
          changeText={(text) => this.setState({text})}
          updateMin={(min) => this.setState({min})}
          updateHour={(hr) => this.setState({hr})} />
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
  },
})