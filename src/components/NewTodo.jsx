import React from "react";

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _inputDescription: "",
      _inputPriority: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "description") {
      this.setState({ _inputDescription: e.target.value });
    } else if (e.target.name === "priority") {
      this.setState({ _inputPriority: e.target.value });
    } else if( e.target.id===0){
      this.setState({id: e.target.value});
    }
    e.preventDefault();}
 

  render() {
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-heading">Add New Todo</div>
          <div className="panel-body form-group">
            <label htmlFor="new-task">I want to..</label>
            <textarea
              type="string"
              className="form-control create-todo-text"
              name="description"
              rows="4"
              value={this.state._inputDescription}
              onChange={this.handleChange}
            />
          </div>
          <div className="panel-body form-group">
            <label htmlFor="priority">How much of a priority is this?</label>
            <select
              className="form-control create-todo-priority"
              name="priority"
              value={this.state._inputPriority}
              onChange={this.handleChange}
            >
              <option>Select a Priority</option>
              <option value="1">low</option>
              <option value="2">medium</option>
              <option value="3">high</option>
            </select>
          </div>
          <div className="panel-footer text-center">
            <button
              className="btn btn-block btn-primary"
              type="submit"
              onClick={() =>
                this.props.handleAdd(
                  this.state._inputPriority,
                  this.state._inputDescription)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default NewTodo;
