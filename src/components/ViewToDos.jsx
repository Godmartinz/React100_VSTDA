import React from "react";
import ListItem from "./ListItem";

const ViewToDos = props => {
  return(
  
      <div className="col-sm-8">
        <div className="panel panel-default">
          <div className="panel-heading">View Todos</div>
          <div className="panel-body">
            <ul id="Todo-List">
              {props.toDoList.map(newItem =>{
                return(
                  <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <ListItem
                  key={newItem.key}
                  description={newItem.description}
                  priority={newItem.priority}
                  handleSave={props.handleSave}
                  
                  />
                  <div className="todo-icon">
                  <span className="mx-2 text-success">
                  <i className="fas fa-pen edit-todo" />
                  </span>
                  <span className="mx-2 text-danger">
                  <i className="fas fa-trash edit-todo" />
                  </span>
                  </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default ViewToDos;
