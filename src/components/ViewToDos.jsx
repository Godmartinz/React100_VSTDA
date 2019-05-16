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
                <ListItem
                  key={newItem.key}
                  description={newItem.description}
                  priority={newItem.priority}
                  handleSave={props.handleSave}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default ViewToDos;
