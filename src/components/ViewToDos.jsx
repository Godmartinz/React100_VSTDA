import React from "react";
import ListItem from "./ListItem";

class ViewToDos extends React.Component {
  render() {
    const { toDoList, clearList, handleDelete } = this.props;
    return (
      <div className="col-sm-8">
        <div className="panel panel-default">
          <div className="panel-heading">View Todos</div>
          <div className="panel-body">
            <ul id="list-group my-5 Todo-List">
              {toDoList.map(item => {
                return (
                  <ListItem
                    key={item.id}
                    title={item.title}
                    priority={item.priority}
                    handleDelete={()=>handleDelete(item.id)}
                  />
                );
              })}
            </ul>
            <button
              className="btn btn-block btn-primary"
              type="submit"
              onClick={clearList}
            >
              Clear List
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default ViewToDos;
