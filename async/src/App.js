import axios from "axios";
import { useState, useEffect } from "react";


function App() {
  //비동기 처리 코드 fetch
  const fetchUser = () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    return fetch(url).then(function (response) {
      return response.json();
    });
  }

  const fetchTodo = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return fetch(url).then(function (response) {
      return response.json();
    });
  }
  //비동기처리
  async function logTodoTitle() {
    //예외처리
    try {
      const user = await fetchUser();
      if (user.id === 1) {
        const todo = await fetchTodo();
        console.log(todo.title);
      }
    } catch (error) {
      console.log(error);
    }
  }
  logTodoTitle();
  return (
    <div>
      Async await
    </div>
  );
}

export default App;
