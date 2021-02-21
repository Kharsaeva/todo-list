import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadTodos, removeTodo} from "./actions";
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

  return (
      <div className="App">
          <Header />
          {loading ? 'loading...' : (
            todos.map(todo => {
              return(
                  <div className="todo">
                      <div>
                          <input type="checkbox"/>
                      </div>
                      <div className="title">
                          {todo.title}
                      </div>
                      <div className="actions">
                          <button
                              onClick={() => handleDelete(todo.id)} className="btn">
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