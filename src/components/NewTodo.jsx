import React from "react";

class NewTodo extends React.Component {


  render() {
    const {item, priority, handleChange, handleSubmit}=this.props
    return (
      <div className="col-sm-4">
        <form onSubmit= {(e) => handleSubmit(e)}>
        <div className="panel panel-default">
          <div className="panel-heading">Add New Todo</div>
          <div className="panel-body form-group">
            <label htmlFor="new-task">I want to..</label>
            <textarea
              type="text"
              className="form-control create-todo-text"
              name="description"
              placeholder="add a todo item"
              rows="4"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="panel-body form-group">
            <label htmlFor="priority">How much of a priority is this?</label>
            <select
              className="form-control create-todo-priority"
              name="priority"
              value={priority}
              onChange={handleChange}
            >
              <option>Select a Priority</option>
              <option value="1">low</option>
              <option value="2">medium</option>
              <option value="3">high</option>
            </select>
          </div>
          <div className="panel-footer text-center">
            <button
              className="btn btn-block btn-primary create-todo"
              type="submit">
              Add
            </button>
          </div>
        </div>
        </form>
      </div>
    );
  }
}
export default NewTodo;

