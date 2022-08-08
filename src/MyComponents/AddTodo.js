import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = ()=>{

  }
  
  return (
    <div className="container my-3">

      <h3>Add a Todo</h3>
      <form onSubmit={submit}>

        <div className="mb-3">
          <label for="title" className="form-label"> ToDo Title </label>
          <input type="text" value={title} className="form-label" id="title" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
          <label for="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} className="form-control" id="desc"/>
        </div>

        <button type="submit" className="btn btn-primary">
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
