import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

class Timer extends Component {

    render() {
        return (
            <View style={styles.titles}>
                <Text>{this.props.hours}:{this.props.minutes}:{this.props.seconds}</Text>
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