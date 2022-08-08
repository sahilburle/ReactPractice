import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, {useState} from 'react';

function App() {

  const onDelete = (todo)=>{
    console.log("I am on delete", todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

  }

  const [todos, setTodos] = useState([

    {
      sno: 1,
      title: "Go to market",
      desc: "you should go market to complete your job."
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "you should go market to complete your job."
    },
    {
      sno: 3,
      title: "Go to showroom",
      desc: "you should go market to complete your job."
    }
  ]);

  return (
    <>
      <Header title="My TodosList" searchBar={true}/>
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
