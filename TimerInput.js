import React, { Component } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import Timer from './Timer'

let sec = 0
let min = 0
let hr = 0

class TimerInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            hour: "0" + hr,
            minute: "0" + min,
            seconds: "0" + sec
        }
    }

    startTimer = () => {
        console.log("one")
        this.timer = setInterval(this.countSeconds, 10)  
    }

    stopTimer = () => {
        clearInterval(this.timer)
    }

    countHours = () => {
        if (hr <= 0) {
            this.setState({
                hour: "00"
            })
        } else if (hr <= 10) {
            hr--
            this.setState({
                hour: "0" + hr
            })
        } else {
            hr--
            this.setState({
                hour: hr
            })
        }
    }

    countMinutes = () => {
        if (min <= 0) {
            if (hr > 0){
                min = 59
                this.setState({
                    minute: min
                })
            } else {
                this.setState({
                    minute: "00"
                })
            }
            this.countHours()
        } else if (min <= 10) {
            min--
            this.setState({
                minute: "0" + min
            })
        } else {
            min--
            this.setState({
                minute: min
            })
        }
    }
    

    countSeconds = () => {
        console.log("Trying to run the count seconds")
        
        if (sec <= 0) {
            sec = 59
            this.setState({
                seconds: sec
            })
            this.countMinutes()
        } else if (sec <= 10) {
            sec--
            this.setState({
                seconds: "0" + sec
            })
        } else {
            sec--
            this.setState({
                seconds: sec
            })
        }
    }

    updateMin = (input) => {
        min = input
        if (min < 10){
            this.setState({
                minute: "0" + min
            })
        } else {
            this.setState({
                minute: min
            })
        }
    }

    updateHour = (input) => {
        hr = input
        if (hr < 10) {
            this.setState({
                hour: "0" + hr
            })
        } else {
            this.setState({
                hour: hr
            })
        }
    }

    render() {
        return(
            <View style={styles.timerContainer}>
                <Text>Set a Timer:</Text>
                <TextInput  style={styles.timerInput} placeholder='Hours' onChangeText={(hour) => this.updateHour(hour)} />
                <TextInput style={styles.timerInput} placeholder='Minutes' onChangeText={(minute) => this.updateMin(minute)} />
                <Timer 
                    minutes={this.state.minute}
                    hours={this.state.hour}
                    seconds={this.state.seconds} />
                <Button title="Start Time" onPress={() => this.startTimer()} />
                <Button title="Stop Timer" onPress={() => this.stopTimer()} />
            </View>
        )
    }


}

export default TimerInput;

const styles = StyleSheet.create({
    timerContainer: {
        flexDirection: 'column',
    },
    timerInput: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        width: 80,
        margin: 10
    }
  })