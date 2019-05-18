import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import ViewToDos from "./components/ViewToDos";
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      id: uuid(),
      item: "",
      editItem: false,
      priority: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearList = this.clearList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      priority: this.state.priority
    };
    const updatedItems = [...this.state.toDoList, newItem];

    this.setState({
      toDoList: updatedItems,
      item: "",
      priority: 0,
      id: uuid(),
      editItem: false
    });
    
  }
  handleDelete(id){
    
    const filteredItems= this.state.toDoList.filter(item=> item.id!==id)

    this.setState({
      toDoList:filteredItems,
    })
  }

  handleChange(e) {
    if (e.target.name === "description") {
      this.setState({ item: e.target.value });
    } else if (e.target.name === "priority") {
      this.setState({ priority: e.target.value });
    }
  }
  clearList(){
    this.setState({
      toDoList:[]
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Very Simple Todo App</h2>
          <h4>Track all of the things</h4>
        </div>
        <div className="row">
          <NewTodo
            item={this.state.item}
            priority={this.state.priority}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <ViewToDos 
          toDoList={this.state.toDoList}
          clearList={this.clearList}
          handleDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default App;

// <NewTodo handleAdd={this.handleAdd} />
//         <ViewToDos
//         toDoList={this.state.toDoList}
//         handleSave={this.state.handleSave}/>
// handleAdd(_inputPriority,_inputDescription) {
//   var plug= Date.now();
//   let newItem = {
//     key: plug,
//     description: _inputDescription,
//     priority: _inputPriority,
//     id: Date.now(),
//     completedTodo: false,
//     display: !this.state.display
//   };
//   this.state.toDoList.push(newItem);
//   this.setState({
//     toDoList: this.state.toDoList
//   });

//   console.log(this.state.toDoList);
// }
// handleSave(_inputPriority, _inputDescription, id){
//   let change= this.state.toDoList;
//   for (let i=0; i<change.length;i++){
//     if(change[i].id==id){
//       change[i]._inputPriority=_inputPriority;
//       change[i]._inputDescription=_inputDescription;
//       change[i].display=false;
//     }
//   }
//   this.setState({
//     toDoList: change})
//   }
