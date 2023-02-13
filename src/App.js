import logo from "./logo.svg";
import "./App.css";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TodoList from "./components/TodoList";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(()=>{
    if(localStorage.getItem('todoList')){
      console.log('du lieu',localStorage.getItem('todoList'))
      setTodos(JSON.parse(localStorage.getItem('todoList')))
      
    }
    console.log(2)
  },[])

  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(todos))
    console.log('local',todos)
    console.log('1')
  },[todos])

  
 
  const handelChangeInput =useCallback( (e) => {
    setInputText(e.target.value);
  },[])

  const handelClickAdd =useCallback( () => {
    setTodos(() => {
      return [{ id: v4(), name: inputText, isComplete: false },...todos ];
    });
    setInputText('')
  },[todos,inputText])

  const handelBtnClickCheck=useCallback((id)=>{
    
    setTodos((prevState)=>{
      // console.log(!prevState.isComplete)
      return prevState.map(todo=>todo.id===id ? {...todo,isComplete:true}:todo)
    })
  },[])


  return (
    <div className="App">
      <h2>To Do List App</h2>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={
          <Button appearance="primary" onClick={handelClickAdd} isDisabled={!inputText}>
            Add
          </Button>
        }
        style={{ width: "100%" }}
        value={inputText}
        onChange={handelChangeInput}
      />
      <TodoList todos={todos} handelBtnClickCheck={handelBtnClickCheck}/>
    </div>
  );
}

export default App;
