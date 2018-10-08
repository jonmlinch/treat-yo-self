import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native';
import {Constants} from 'expo';

let id = 0

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
  }
})

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch value={props.todo.checked}
    onValueChange={props.onToggle}/>
    <Button onPress={props.onDelete} title="Delete" />
    <Text>{props.todo.text}</Text>
  </View>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addToDo() {
    id++
    const text = `You have ${id} things to do in your time.`
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id, text: text, checked: false},
      ],
    })
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
        <Button onPress={() => this.addToDo()} title="Add item" />
        <ScrollView style={styles.fill} >
          {this.state.todos.map(todo => ( 
            <Todo 
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