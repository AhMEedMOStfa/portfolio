import React from "react";

const TodoList = ({ todos, deleteTodoItem }) => {
  const todoList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <ul className="w-75 mx-auto list-group list-unstyled border" key={i}>
            <li className="shadow text-center p-3 list-group-item-warning position-relative">
                <div className="d-flex">
              <h5 className="text-primary">{todo.title} : </h5>
              <p className="text-success">{todo.content}</p>
                </div>

              <button
                onClick={() => deleteTodoItem(i)}
                className="btn btn-outlinr-danger position-absolute top-0 end-0"
              >
                ❌
              </button>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="w-75 mx-auto text-muted">no items on the list ..</p>
    );
  return (
    <div>
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todoList}
    </div>
  );
};

export default TodoList;
