import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import ViewToDos from "./components/ViewToDos";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
    };

    this.handleAdd=this.handleAdd.bind(this);
    this.handleSave=this.handleSave.bind(this);

  }
  handleAdd(_inputPriority,_inputDescription) {
    var id=0;
    let newItem = {
      id: id,
      description: _inputDescription,
      priority: _inputPriority,
      key: Date.now(),
      completedTodo: false,
      display: !this.state.display
    };
    id++;
    this.state.toDoList.push(newItem);
    this.setState({ 
      toDoList: this.state.toDoList
    });
  
    console.log(this.state.toDoList);
  }
  handleSave(_inputPriority, _inputDescription, id){
    let change= this.state.toDoList;
    for (let i=0; i<change.length;i++){
      if(change[i].id==id){
        change[i].priority=_inputPriority;
        change[i].description=_inputDescription;
        change[i].toggleDisplay=false;
      }
    }
    this.setState({
      toDoList: change})
    }

  
  
  render() {
    
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Very Simple Todo App</h2>
          <h4>Track all of the things</h4>
        </div>
        <div className="row">
        <NewTodo handleAdd={this.handleAdd} />
        <ViewToDos 
        toDoList={this.state.toDoList}
        handleSave={this.state.handleSave}/>
        
        </div>
        </div>
    );
  }
}

export default App;
