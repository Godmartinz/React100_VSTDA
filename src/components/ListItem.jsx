import React from "react";

class ListItem extends React.Component {

  handleDisplayEdit() {
    this.setState({
      display: !this.state.display
    });
  }

  render() {
    const {title, priority, handleDelete} = this.props;
    var color= ""
    switch(priority){
      case '1':
          color="list-group-item-success";
          break;
      case '2':
          color="list-group-item-warning";
          break;
      case '3':
          color="list-group-item-danger";
          break;          
    }
    return (
      <li className={color+" text-capitalize d-flex justify-content-between my-2"}>
        <h6>{title}</h6>
        <div className="todo-icon">
        <a href="#">
          <span className="glyphicon glyphicon-pencil edit-todo "></span>  
        </a>
        <a href="#">
          <span className="glyphicon glyphicon-trash delete-todo" onClick={handleDelete}></span>  
        </a>
        </div>
      </li>
    );
  }
}

export default ListItem;


