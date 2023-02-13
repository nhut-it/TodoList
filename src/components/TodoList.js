import Textfield from "@atlaskit/textfield";
import React, { useEffect } from "react";
import Button from "@atlaskit/button";
import Todo from "./Todo";
export default function TodoList({ todos,handelBtnClickCheck }) {
   
  
    
    
  return (
    <>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} handelBtnClickCheck={handelBtnClickCheck}/>;
      })}
    </>
  );
}
