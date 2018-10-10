import React, { Component } from 'react';
import {View, Button, KeyboardAvoidingView, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import {Constants} from 'expo';
import Task from './Task';
import TodoInput from './TodoInput';

let id = 0

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      text: '',
      hr: 0,
      min: 0,
      sec: 0,
      task: 0
    }
  }

  submitAndClear = () => {
    this.setState({
      text: '',
      hr: 0,
      min: 0,
      sec: 0,
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

  updateHour = (hr) => {
    if(hr){
      this.setState({hr})
    } else {
      this.setState({
        hr: 0
      })
    }
  }

  updateMinute = (min) => {
    if (min) {
      this.setState({min})
    } else {
      this.setState({
        min: 0
      })
    }
  }

  updateTask = () => {
    console.log("The task is currently", this.state.task)
    this.setState({
      task: this.state.task + 1
    })
    console.log("The task is currently", this.state.task)
  }

  startTask = () =>{
    if (this.state.task === 0){
      console.log("The starting task is", this.state.task)
      this.setState({
        task: this.state.task + 1
      })
    } else {
      this.setState({
        tast: this.state.task
      })
    }
    
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
        <Button title="Begin" onPress={() => this.startTask()} />
        <ScrollView>
          {this.state.todos.map(todo => ( 
            <View>
              <Task 
                onToggle={() => this.toggleToDo(todo.id)}
                onDelete={() => this.removeToDo(todo.id)}
                updateTask={() => this.updateTask()}
                todo={todo}
                key={todo.id}
                task={this.state.task}
              />
            </View>
          ))}
        </ScrollView>
        <TodoInput 
          addItem={() => this.addToDo()} 
          todoItem={this.state} 
          changeText={(text) => this.setState({text})}
          updateMin={(min) => this.updateMinute(min)}
          updateHour={(hr) => this.updateHour(hr)}
           />
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