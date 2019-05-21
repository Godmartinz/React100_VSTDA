import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editItem: false
    };
    this.handleDisplayEdit = this.handleDisplayEdit.bind(this);
    // handleChange=this.props.handleChange.bind(this);

  }
  handleDisplayEdit() {
    this.setState({
      editItem: !this.state.editItem
    });
  }


  render() {
    const { handleDelete, title, priority, editedPriority, editedTitle ,handleEdit, handleChange, handleSubmit} = this.props;
    var color = "";
    switch (priority) {
      case "1":
        color = "list-group-item-success";
        break;
      case "2":
        color = "list-group-item-warning";
        break;
      case "3":
        color = "list-group-item-danger";
        break;
    }
    return (
      <li
        className={
          color + " text-capitalize d-flex justify-content-between my-2"
        }
      >
        <h6>{title}</h6>
        {this.state.editItem ? (
          <div className="alert-success clearfix">
            {/* <form onSubmit={() =>} > */}
            <div className="form-group col-md-10">
              <label htmlFor="create-todo-text">Description</label>
              <textarea
                className="update-todo-text form-control"
                name="edited-description"
                type="text" 
                value={editedTitle}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-10">
              <label htmlFor="update-todo-priority">
                How much of a priority is this?
              </label>
              <select
                className="update-todo-priority form-control"
                name="edited-priority"
                value={editedPriority}
                onChange={handleChange}
              >
                <option>Select a priority</option>
                <option value="1">Low priority</option>
                <option value="2">Medium priority</option>
                <option value="3">High priority</option>
              </select>
            </div>

            <button
              className="update-todo btn btn-success pull-right"
              style={{
                marginRight: 20,
                marginBottom: 10
              }}
              name="button"
              type="submit"
              onClick={()=> {this.handleDisplayEdit.bind(this); handleEdit()}}
            >
              Save!
            </button>
            {/* </form> */}
          </div>
        ) : null}
        <div className="todo-icon">
          <a href="#">
            <span
              className="glyphicon glyphicon-pencil edit-todo "
              onClick={this.handleDisplayEdit.bind(this)}
            />
          </a>
          <a href="#">
            <span
              className="glyphicon glyphicon-trash delete-todo"
              onClick={handleDelete}
            />
          </a>
        </div>
      </li>
    );
  }
}

export default ListItem;
