import React, { Component } from "react";
import logo from "./logo.svg";
import TextBar from "./components/text-bar";
import "./App.css";
import data from "./data";
import TodoItems from "./components/todoItems";
import FooterItem from "./components/footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoItems: data
    };
  }

  handleSubmitData = data => {
    let toDoItems = this.state.toDoItems;
    toDoItems = [{ title: data, isComplete: false }, ...toDoItems];
    this.setState({ toDoItems });
  };

  handleComplete = data => {
    let toDoItems = this.state.toDoItems;
    toDoItems = toDoItems.map(todo =>
      todo === data
        ? todo.isComplete === true
          ? { title: todo.title, isComplete: false }
          : { title: todo.title, isComplete: true }
        : todo
    );
    this.setState({ toDoItems });
  };

  handleRemove = data => {
    let toDoItems = this.state.toDoItems;
    toDoItems = toDoItems.filter(todo => todo !== data);
    this.setState({ toDoItems });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="text-center header-margin">
                <img alt="React" src={logo} />
                <h2>To Do List App</h2>
              </div>
              <TextBar handleSubmitData={this.handleSubmitData}></TextBar>
              <TodoItems
                items={this.state.toDoItems}
                handleComplete={this.handleComplete}
                handleRemove={this.handleRemove}
              />
              <div className="text-center" style={{marginTop:20,}}>
                <FooterItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
