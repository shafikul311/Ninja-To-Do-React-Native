import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TodoItem({ pressHandler, item }) {

    
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 5,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,

    elevation: 12,
  }
});