import "./App.css";
import React, { Component } from "react";
import TodoList from "./TodoList";
import Addtask from "./AddTask";

export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), action: "learn HTML", isDone: true },
      { id: Math.random(), action: "learn Redux", isDone: false },
    ],
  };
  handleDelete = (x) => {
    this.setState({ todos: this.state.todos.filter((el) => el.id !== x) });
  };

  handleComplete = (i) => {
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === i ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };
  handleAdd = (input) => {
    const newtask = { id: Math.random(), action: input, isDone: false };
    this.setState({ todos: [...this.state.todos, newtask] });
  };
  render() {
    return (
      <div className="App">
        <Addtask add={this.handleAdd} />
        <TodoList
          list={this.state.todos}
          del={this.handleDelete}
          comp={this.handleComplete}
        />
      </div>
    );
  }
}
