import React, { Component } from 'react';
import {View, Button, StyleSheet, Switch} from 'react-native';
import {Card, Text} from 'react-native-elements'
import {Constants} from 'expo';

const TodoTask = (props) => {
    return (
        <Card title={props.todo.text} containerStyle={styles.cardContainer} dividerStyle={{width: 350}}>
            <Text style={styles.clock} h3> {props.hours} : {props.minutes} : {props.seconds} </Text>
            <View style={styles.todoContainer}>
            <Switch value={props.todo.checked}
            onValueChange={props.onToggle}/>
            <Button onPress={props.onDelete} title="Delete" />
            </View>
        </Card>
    )
}

export default TodoTask;


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