import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class Timer extends Component {
    constructor(){
      super()
      this.state = {
        count: 0,
        }  
    }
    

    componentDidMount() {
        this.timer = setInterval(this.incrementCount, 1000)
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1})
    }

    render() {
        return <Text>{this.state.count}</Text>
    }

}

export default Timer;