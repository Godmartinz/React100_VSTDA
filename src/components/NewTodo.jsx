import React from "react";

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description:"",
      priority:"",
    }
    this.handleChange=this.handleChange.bind(this);
  }
  
  addNewToDo() {
    this.props.addNewToDo(this.state);
  }
  handleChange(e) {
    this.props({ [e.target.name]: e.target.value });
  }


  render() {
    
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-heading">Add New Todo</div>
          <div className="panel-body form-group">
            <label htmlFor="new-task">I want to..</label>
            <textarea
              type="textarea"
              className="form-control"
              id="description"
              rows="4"
              value={this.props.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="panel-body form-group">
            <label htmlFor="priority">How much of a priority is this?</label>
            <select
              className="form-control"
              id="priority"
              value={this.props.priority}
              onChange={this.handleChange}
            >
              <option id="low">low</option>
              <option id="medium">medium</option>
              <option id="high">high</option>
            </select>
          </div>
          <div className="panel-footer text-center">
            <button
              className="btn btn-block btn-primary"
              onClick={this.props.handleChange}
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
