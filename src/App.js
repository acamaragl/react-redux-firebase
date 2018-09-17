import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import Mensajes from "./components/Mensajes";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Mensajes />
        <ToDoList />
      </div>
    );
  }
}
export default App;
