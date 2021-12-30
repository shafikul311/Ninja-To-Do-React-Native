import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodo from './components/AddToDo';
import Header from './components/Header/Header';
import TodoItem from './components/TodoItem';



export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  
  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setText('');
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };


  return (
    <View style={styles.container}>
      <Header/>
      <View>
        {/* <AddTodo submitHandler={submitHandler} /> */}
        <View style={styles.list}>
          <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
        
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
  },

  list: {
    fontSize: 18,
    fontWeight: 'bold',
 

  },
  
  
});
