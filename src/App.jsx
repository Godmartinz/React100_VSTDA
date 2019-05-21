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
      priority: 0,
      editedTitle:"",
      editedPriority:0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearList = this.clearList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit= this.handleEdit.bind(this);
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
  handleEdit(id) {
    // e.preventDefault();
    var copyList = [...this.state.toDoList];
    const index = copyList.findIndex(item => item.id === id);
   copyList[index].title = this.state.editedTitle;
   copyList[index].priority = this.state.editedPriority;
    this.setState({
      toDoList: copyList
    });
  }

  handleDelete(id) {
    const filteredItems = this.state.toDoList.filter(item => item.id !== id);

    this.setState({
      toDoList: filteredItems
    });
  }

  handleChange(e) {
    if (e.target.name === "description") {
      this.setState({ item: e.target.value });
    } else if (e.target.name === "priority") {
      this.setState({ priority: e.target.value });
    } else if (e.target.name === "edited-description") {
      this.setState({ editedTitle: e.target.value });
    } else if (e.target.name === "edited-priority") {
      this.setState({ editedPriority: e.target.value });
    }
  }
  clearList() {
    this.setState({
      toDoList: []
    });
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
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleDisplayEdit={this.handleDisplayEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
