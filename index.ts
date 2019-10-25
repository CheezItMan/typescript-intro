// Goal Fetch some JSON data and print the result

import axios from 'axios';

const URL = 'http://jsonplaceholder.typicode.com/todos/1';

axios.get(URL)
  .then(response => {
    console.log(response.data);
  });

  