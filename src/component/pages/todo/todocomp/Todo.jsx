import React from 'react'
import { useSelector } from 'react-redux'
import TodoForm from '../todoHelper/TodoForm';
import TodoList from '../todoHelper/TodoList';
import { useDispatch } from 'react-redux/es/exports';
import {addTodo} from '../../../Redux/store'
import {deleteTodo} from '../../../Redux/store'
const Todo = () => {

const todos = useSelector(state=>state.todos);
const dispatch = useDispatch();
// console.log(todos);

const addTodoItem = (task)=>{
  dispatch(addTodo(task));
}
const deleteTodoItem = (i)=>{
  dispatch(deleteTodo(i));
} 

  // console.log('reduxStore',todos);
  return (
    <div>
      <TodoForm addTodoItem={addTodoItem}></TodoForm>
      <TodoList todos={todos} deleteTodoItem={deleteTodoItem}></TodoList>
    </div>
  )
}

export default Todo