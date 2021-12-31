import { useState } from 'react';
import { StyleSheet,SafeAreaView, Text, View, FlatList, Button, TextInput,TouchableWithoutFeedback, Keyboard  } from 'react-native';
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

  // const submitHandler = (text) => {
  //   if(text.length > 3){
  //     setText('');
  //     setTodos(prevTodos => {
  //       return [
  //         { text, key: Math.random().toString() },
  //         ...prevTodos
  //       ];
  //     });
  //   } else {
  //     Alert.alert('OOPS', 'Todo must be over 3 characters long', [
  //       {text: 'Understood', onPress: () => console.log('alert closed') }
  //     ]);
  //   }
  // };


  return (
    <TouchableWithoutFeedback 
    onSubmit={Keyboard.dismiss()}
    >
    <View style={styles.container}>
      <Header/>
      <SafeAreaView>
        
          <TextInput
           style={styles.input}
           placeholder="Input please"
           
          
          /> 
        <View style={styles.buttonStyle}> 
          <Button  title='Submit Now'/>
        </View>
      </SafeAreaView>
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

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({


  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
  },

  input: {
    height: 35,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  list: {
    fontSize: 18,
    fontWeight: 'bold',
 

  },

  buttonStyle: {
    marginTop: 50,
    borderRadius: 50,
    
  }
  
  
});
