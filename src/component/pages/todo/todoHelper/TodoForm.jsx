import React, { useState } from "react";

const TodoForm = ({ addTodoItem })=> {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitTodo = (e) => {
    e.preventDefault();
    // console.log(e);
    
    if(!title || !content)
    {
      alert('enter valid task');
    }
    else
    {
      addTodoItem({title,content});
    }
    setTitle("");
    setContent("");
  };

  return (
    
    <div className=" w-50 mx-auto my-4">
      <h1>Todo App</h1>
      <form onSubmit={submitTodo}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="todo title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="floatingInput">todo title</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="todo mission"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)} />
          <label htmlFor="floatingPassword">todo mission</label>
        </div>
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
