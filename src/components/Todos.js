import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadTodos, loadUsers} from "../redux/actions";
import Todo from "./Todo";

function Todos() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const users = useSelector(state => state.users);
    const usersLoading = useSelector(state => state.usersLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos());
        dispatch(loadUsers());
    }, []);

    return (
        (loading || usersLoading) ? 'loading...' : (
            todos.map(todo => {
                return(<Todo key={todo.id} todo={todo} users={users}/>)
            })
        )
    );
}

export default Todos;