import React from 'react';
import ReactLoading from "react-loading";
import {checkTodo, removeTodo} from "../redux/actions";
import {useDispatch} from "react-redux";

function Todo(props) {
    const dispatch = useDispatch();

    const user = props.users.filter(item => item.id === props.todo.userId);

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    };

    const handleCheck = (id, completed) => {
        dispatch(checkTodo(id, completed))
    };

    return (
        <div className="todo">
            <div>
                {props.todo.checking ? (
                    <div className="spin">
                        <ReactLoading
                            color="#0033ff"
                            type="spin"
                            width={17}
                            height={17}
                        />
                    </div>
                ) : (
                    <input
                        type="checkbox"
                        checked={props.todo.completed}
                        onChange={() => handleCheck(props.todo.id, props.todo.completed)}
                    />
                )}
            </div>
            <div className="title">
                {props.todo.title} ({user[0].email})
            </div>
            <div className="actions">
                <button
                    onClick={() => handleDelete(props.todo.id)}
                    className="btn"
                    disabled={props.todo.deleting}
                >
                    delete
                </button>
            </div>
        </div>
    );
}

export default Todo;