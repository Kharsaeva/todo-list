import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkTodo, loadTodos, removeTodo} from "./actions";
import Header from "./Header";

function App() {

  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const handleDelete = (id) => {
      dispatch(removeTodo(id))
  };

  const handleCheck = (id, completed) => {
      dispatch(checkTodo(id, completed))
  };

  return (
      <div className="App">
          <Header />
          {loading ? 'loading...' : (
            todos.map(todo => {
              return(
                  <div className="todo">
                      <div>
                          <input
                              type="checkbox"
                              checked={todo.completed }
                              onChange={() => handleCheck(todo.id, todo.completed)}/>
                      </div>
                      <div className="title">
                          {todo.title}
                      </div>
                      <div className="actions">
                          <button
                              onClick={() => handleDelete(todo.id)}
                              className="btn">
                              delete
                          </button>
                      </div>
                  </div>
              )
        }))}
      </div>
  );
}

export default App;