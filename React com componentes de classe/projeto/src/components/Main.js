import React, { Component } from 'react';
import './Main.css';
// Form
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaPlus, FaTrash } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    id: 0,
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      tarefas: [novaTarefa, ...tarefas],
      novaTarefa: '',
    });
    this.incrementID();
  };

  handleDelete = (tarefa) => {
    this.setState({
      tarefas: tarefas.filter((value) => value !== tarefa.tarefa),
    });
  };

  incrementID = () => {
    this.setState({
      id: id + 1,
    });
    console.log(this.state.id);
  };

  render() {
    const { tarefas, id, novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            id="input-task"
            value={novaTarefa}
          />

          <button onClick={this.handleInput} type="submit" aria-label="Enviar">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={id}>
              {tarefa}
              <button
                onClick={() => this.handleDelete(id)}
                className="btn-del-task"
                aria-label="Excluir"
                type="button"
              >
                <div>Excluir</div>
                <div>
                  <FaTrash />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
