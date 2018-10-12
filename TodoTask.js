import React, { Component } from 'react';
import {View, Button, StyleSheet, Switch} from 'react-native';
import {Card, Text} from 'react-native-elements'

class TodoTask extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.stopTimer
  }

  render() {
    return (
      <Card title={this.props.todo.text} containerStyle={styles.cardContainer} dividerStyle={{width: 350}}>
          <Text style={styles.clock} h3> {this.props.hours} : {this.props.minutes} : {this.props.seconds} </Text>
          <View style={styles.todoContainer}>
          <Switch value={this.props.todo.checked}
          onValueChange={this.props.onToggle}/>
          <Button onPress={this.props.onDelete} title="Delete" />
          </View>
      </Card>
    )

  }
}

export default TodoTask;


  const styles = StyleSheet.create({
    todoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 60,
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