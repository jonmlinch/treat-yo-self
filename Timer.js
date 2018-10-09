import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

let sec = 0
let min = 0
let hr = 0

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            hours: "0" + hr,
            minutes: "0" + min,
            seconds: "0" + sec
        }
    }

    componentWillMount(){
        //sec = this.props.seconds
        min = this.props.minutes
        //hr = this.props.hours
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
            if (hr === 0 && min === 0 && sec === 0){
                this.stopTimer()
            } else {
                sec = 59
                this.setState({
                    seconds: sec
                })
                this.countMinutes()
            }
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


    render() {
        return (
            <View style={styles.titles}>
                <Text>{this.state.minutes}</Text>
            </View>
        )
    }

}

export default Timer;

const styles = StyleSheet.create({
    titles: {
        marginTop: 10,
    }
})