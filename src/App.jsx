import React, { Component } from "react";
import NewTodo from "./components/NewTodo";
import ViewToDos from "./components/ViewToDos";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description:"",
      priority:"",
      key:"",
      toDoList: [],
      alert: ''
    };
    this.handleChange =this.handleChange.bind(this);

  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Very Simple Todo App</h2>
          <h4>Track all of the things</h4>
        </div>
        <div className="row">
        <NewTodo />
        <ViewToDos />
        
        </div>
        </div>
    );
  }
}

export default App;
