import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native';
import {Constants} from 'expo';

const Todo = props => (
    <View style={styles.todoContainer}>
      <Switch value={props.todo.checked}
      onValueChange={props.onToggle}/>
      <Button onPress={props.onDelete} title="Delete" />
      <Text>{props.todo.text}</Text>
    </View>
  )

  export default Todo;

  const styles = StyleSheet.create({
    todoContainer: {
      flexDirection: "row",
      alignItems: "center"
    }
  })