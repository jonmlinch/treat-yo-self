import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import TodoTask from './TodoTask'
import DoneTask from './DoneTask'
import UnfinishedTask from './UnfinishedTask'


export default class Task extends Component {
  constructor(props){
    super(props)
    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
    }
  }

  componentWillMount(){
    this.setHr()
    this.setMin()
    this.setSec()
  }

  componentDidUpdate(prevProps){
    if (prevProps.stop !== this.props.stop){
      if(this.props.start === true){
        console.log('This.props.start is', this.props.start)
        this.startTimer()
      } else {
        console.log('STOPPING?')
        this.stopTimer()
      }
    }
  }

  setHr = () =>{
    console.log("sethr function")
    let hr = this.props.todo.hr
    if (this.props.todo.hr < 10 && this.props.hr >= 1){
      console.log('if')
      this.setState({
        hours: "0" + hr
      })
    } else if (this.props.todo.hr >= 10){
      console.log('else if')
      this.setState({
        hours: hr
      })
    } else {
      console.log('else')
      hr = 0
      this.setState({
        hours: '0' + hr
      })
    }
  }

  setMin = () =>{
    console.log('setmin function')
    let min = this.props.todo.min
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
    console.log('set sec function')
    let sec = this.props.todo.sec
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
        seconds: "0" + sec
      })
    }
  }

  startTimer = () => {
    console.log("This item thinks the task number is", this.props.task)
    console.log("The item thinks the id is", this.props.todo.id)
    if (this.props.todo.id === this.props.task){
      if (this.props.todo.checked === true){
        this.stopTimer()
        this.props.updateTask()
      } else {
        this.timer = setInterval(this.countSeconds, 100)
        console.log('done with setInterval')
     }
    } else {
      console.log("not a match")
    }
  }

  stopTimer = () => {
    console.log("timer was stopped")
    clearInterval(this.timer)
  }

  countHours = () => {
    let hr = this.state.hours
    console.log('The hour is', hr)
    if (hr <= 0) {
        this.setState({
            hours: "00"
        })
    } else if (hr <= 10) {
        hr--
        this.setState({
            hours: "0" + hr
        })
    } else {
        hr--
        this.setState({
            hours: hr
        })
    }
  }

  countMinutes = () => {
    let min = this.state.minutes
    let hr = this.state.hours
    if (min <= 0) {
        if (hr > 0){
            min = 59
            this.setState({
                minutes: min
            })
        } else {
            this.setState({
                minutes: "00"
            })
        }
        this.countHours()
    } else if (min <= 10) {
        min--
        this.setState({
            minutes: "0" + min
        })
    } else {
        min--
        this.setState({
            minutes: min
        })
    }
  }


  countSeconds = () => {
    console.log('countseconds function')
    let sec = this.state.seconds
    let min = this.state.minutes
    let hr = this.state.hours
    console.log("Sec", sec)
    console.log("Min", min)
    console.log("Hr", hr)
    if (sec == 0) {
      console.log('if')
      if (hr == 0 && min == 0){
        console.log('everything is 0')
          this.stopTimer()
          this.props.updateTask()
      } else {
          sec = 59
          this.setState({
              seconds: sec
          })
          this.countMinutes()
      }
    } else if (sec <= 10) {
      console.log('else if') 
      sec--
      console.log(sec)
      this.setState({
          seconds: '0' + sec
      })
      console.log('The state', this.state)
    } else {
      console.log('else')
      sec--
      this.setState({
          seconds: sec
      })
      console.log('else this.state', this.state)
    }
    console.log('end of countSeconds', this.state)
  }


  render() {
    if (this.state.hours == 0 && this.state.minutes == 0 && this.state.seconds == 0 && !this.props.todo.checked) {
       return (
         <View>
           <UnfinishedTask 
             todo={this.props.todo}
             onDelete={this.props.onDelete}
             />
         </View>
       )
     } else if (this.props.todo.checked) {
       return (
         <View>
           <DoneTask 
             todo={this.props.todo}
             />
         </View>
       )
     }
    return (
        <TodoTask 
        todo={this.props.todo}
        hours={this.state.hours}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
        onToggle={this.props.onToggle}
        onDelete={this.props.onDelete}
        stopTimer={() => this.stopTimer()} />
    )
  }
}


  const styles = StyleSheet.create({
    todoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    clock: {
      flexDirection: "row",
      justifyContent: "center",
      marginLeft: 80
    },
    cardContainer: {
      flexDirection: "row",
      borderRadius: 10,
      height: 150
    }
  })