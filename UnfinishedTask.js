import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements'
import {Constants} from 'expo';

const DoneTask = (props) => {
    return (
        <View style={styles.todoContainer}>
            <Text style={styles.task}>{props.todo.text}</Text>
            <Icon name="times-circle-o" type="font-awesome"  iconStyle={styles.checkMark} size={30} onPress={props.onDelete} />
        </View>
    )
}

export default DoneTask;


  const styles = StyleSheet.create({
    todoContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 10,
      height: 60,
      backgroundColor: 'red',
      margin: 10
    },
    task: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 20,
    },
    checkMark: {
      marginRight: 20
    },
    clock: {
      flexDirection: "row",
      justifyContent: "center",
      marginLeft: 80
    },
    cardContainer: {
      flexDirection: "row",
      borderRadius: 10,
      height: 60,
      backgroundColor: 'green'
    }
  })