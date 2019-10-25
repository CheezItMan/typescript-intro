// Goal Fetch some JSON data and print the result

import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const URL = 'http://jsonplaceholder.typicode.com/todos/1';

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`Todo: ${id}
  Title: ${title}
  is ${ completed ? 'Complete': 'incomplete'}`);
}

axios.get(URL)
  .then(response => {
    const todo = response.data;
    const {id, title, completed} = todo as Todo;
    logTodo(id, title, completed);

  });

