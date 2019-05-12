import React from "react";

class ViewToDos extends React.Component {
  constructor(props){
  super(props)
  }

  render() {
    return (
      <div className="col-sm-8">
        <div className="panel panel-default">
          <div className="panel-heading">View Todos</div>
          <div className="panel-body">
            <ul id="Todo-List">
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewToDos;
