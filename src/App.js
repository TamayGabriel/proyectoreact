import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

// data
import { todos } from "./todos.json";

// subcomponents
import TodoForm from "./components/LibroBuscador";
import LibroBuscador from "./components/LibroBuscador";

import Sidebar from "./components/Sidebar";
import SidebarResp from "./components/SidebarResp";
import Album from "./components/Album";

//Fin imports

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    if (window.confirm("Estas seguro?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        }),
      });
    }
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  render() {
    // RETURN THE COMPONENT
    return (
      <SidebarResp />
      /*<div>
        <Album />
      </div>*/

      /*<div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Timi Libreria
            <span className="badge badge-pill badge-light ml-2"></span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <LibroBuscador></LibroBuscador>
            </div>

            <div className="col-md-8">
              <div className="row">
                <ListaLibros></ListaLibros>
              </div>
            </div>
          </div>
        </div>
      </div>*/
    );
  }
}

export default App;
