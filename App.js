import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements'
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
      task: 0,
      stop: true,
      start: false
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
          hr: 0,
          min: 0,
          sec: 0,
        }
      }),
      task: this.state.task + 1
    })
  }

  updateHour = (hr) => {
    console.log('updatehr function')
    if(hr){
      this.setState({hr})
    } else {
      this.setState({
        hr: 0
      })
    }
  }

  updateMinute = (min) => {
    console.log('updatemin function')
    if (min) {
      this.setState({min})
    } else {
      this.setState({
        min: 0
      })
    }
  }

  updateTask = () => {
    console.log("YOU STARTED UPDATE TASK!")
    console.log("The task is currently", this.state.task)
    let next = this.state.task
    let found = false
    while (!found){
      if (next <= this.state.todos.length) {
        next++
        console.log("NEXT is", next)
        found = this.state.todos.some(val => val.id === next)
        console.log('FOUND is', found)
      } 
    }
    this.setState({
      task: next,
      stop: !this.state.stop,
    })
    console.log("Now the task is", this.state.task)
  }

  startTask = () =>{
    console.log("YOU'VE ENTERED THE STARTTASK FUNCTION")
    if (this.state.todos.length > 0) {
      if (this.state.task === 0){
        console.log("The starting task was", this.state.task)
        this.setState({
          task: this.state.task + 1,
          stop: !this.state.stop,
          start: !this.state.start
        })
      } else {
        console.log("The starting task is", this.state.task)
        this.setState({
          task: this.state.task,
          stop: !this.state.stop,
          start: !this.state.start
        })
      }

    }
  }

  stopTimer = () => {
    this.setState({
      stop: !this.state.stop,
      start: !this.state.start
    })
  }

  render() {
    return (
      <View style={[styles.appContainer, styles.fill]}>
        <View style={styles.counterContainer}>
          <Text style={styles.text}>
            Todo Count: {
              this.state.todos.length
            }
          </Text>
          <Text style={styles.text}>
            Unchecked Todo Count: {
              this.state.todos.filter(todo => !todo.checked).length
            }
          </Text>
        </View>
        <View style={styles.todoContainer}>
          <Button title="Start" buttonStyle={styles.buttons} onPress={() => this.startTask()} />
          <Button title="Stop" buttonStyle={styles.buttons} onPress={() => this.stopTimer()} />
        </View>
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
                stop={this.state.stop}
                start={this.state.start}
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
    justifyContent: 'center'
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  fill: {
    flex: 1,
    backgroundColor: '#222222'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white'
  },
  buttons: {
    //flexDirection: "row",
    width: 100,
    margin: 10
  },
  text: {
    color: '#f3f4f4'
  }
})