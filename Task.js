import React, { Component } from 'react';
import {View, Button, Text, StyleSheet, Switch} from 'react-native';
import {Constants} from 'expo';
import Timer from './Timer'

let hr = 0
let min = 0
let sec = 0

export default class Task extends Component{
  constructor(props){
    super(props)
    this.state = {
      hours: '',
      minutes: '',
      seconds: ''
    }
  }

  componentWillMount(){
    this.setHr()
    this.setMin()
    this.setSec()
  }

  setHr = () =>{
    hr = this.props.todo.hr
    if (this.props.todo.hr < 10){
      this.setState({
        hours: "0" + hr
      })
    } else if (this.props.todo.hr >= 10){
      this.setState({
        hours: hr
      })
    } else {
      hr = 0
      this.setState({
        hours: hr
      })
    }
  }

  setMin = () =>{
    min = this.props.todo.min
    if (this.props.todo.min < 10){
      this.setState({
        minutes: "0" + min
      })
    } else if (this.props.todo.min >= 10){
      this.setState({
        minutes: min
      })
    } else {
      min = 0
      this.setState({
        minutes: min
      })
    }
  }

  setSec = () =>{
    sec = this.props.todo.sec
    if (this.props.todo.sec < 10){
      this.setState({
        seconds: "0" + sec
      })
    } else if (this.props.todo.sec >= 10){
      this.setState({
        seconds: sec
      })
    } else {
      sec = 0
      this.setState({
        seconds: sec
      })
    }
  }


  render() {
    return (
      <View style={styles.todoContainer}>
        <Switch value={this.props.todo.checked}
        onValueChange={this.props.onToggle}/>
        <Button onPress={this.props.onDelete} title="Delete" />
        <Text>{this.props.todo.text} </Text>
        <Text> {this.state.hours} : {this.state.minutes} : {this.state.seconds} </Text>
    </View>
    )
  }
} 

  const styles = StyleSheet.create({
    todoContainer: {
      flexDirection: "row",
      alignItems: "center"
    }
  })