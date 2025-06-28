import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((error) => {
        console.log("Error while fetching", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Todo List</h3>
      <div className="row">
        {todos.map((todo) => (
          <div className="col-md-4 mb-4" key={todo.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{todo.todo}</h5>
                <p className="card-text">
                  <strong>ID:</strong> {todo.id}<br />
                  <strong>User ID:</strong> {todo.userId}<br />
                  <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
