import React, { Component } from "react";

import ListaLibros from "./ListaLibros";

class LibroBuscador extends Component {
  constructor() {
    super();

    this.state = {
      title: "",

      subtitle: "",
    };
    //cambios en el input
    this.handleInputChange = this.handleInputChange.bind(this);
    //submit de busqueda
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onAddTodo(this.state);

    this.setState({
      title: "",

      subtitle: "",
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;

    console.log(value, name);

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subtitle"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Subtitle"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default LibroBuscador;
