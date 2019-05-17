import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _inputDescription: this.props._inputDescription,
      _inputPriority: this.props._inputPriority,
      display: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDisplayEdit = this.handleDisplayEdit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "description") {
      this.setState({ _inputDescription: e.target.value });
    } else if (e.target.name === "priority") {
      this.setState({ _inputPriority: e.target.value });
    }
    e.preventDefault();
  }
  handleDisplayEdit() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    var priority;
    switch (this.state._inputPriority) {
      case "1":
        priority = "list-group-item-secondary well btn-block text-left";
        break;
      case "2":
        priority = "list-group-item-warning well btn-block text-left";
        break;
      case "3":
        priority = "list-group-item-danger well btn-block text-left";
        break;
    }

    return (
      <div>
        <button
          className={priority}  
          value={this.state.display}
          onClick={() => this.handleDisplayEdit()}
        >
          {this.state._inputDescription}
          
        </button>

        {this.state.display ? (
          <div className="alert-success clearfix">
            <div className="form-group col-md-10">
              <label htmlFor="update-todo-text">Description</label>
              <textarea
                type="string"
                className="form-control"
                name="description"
                rows="4"
                placeholder={this.props._inputDescription}
                value={this.state._inputDescription}
                onChange={this.handleChange}
              >{this.state._inputDescription}</textarea>
            </div>
            <div className="panel-body form-group">
              <label htmlFor="update-todo-priority">How much of a priority is this?</label>
              <select
                className="form-control"
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
            <button
              className="btn btn-success pull-right update-todo"
              name="button"
              type="submit"
              onClick={() =>
                this.handleSave(
                  this.state._inputDescription,
                  this.state._inputPriority,
                  this.props.id,
                  this.display
                )
              }
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
    )
  }
}
export default ListItem;
