import React, { Component } from 'react';
import './Main.css';
// Form
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaPlus, FaTrash, FaPencilAlt } from 'react-icons/fa';

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
    const { novaTarefa, tarefas, id } = this.state;
    const newTask = {
      id,
      tarefa: novaTarefa,
    };
    this.setState({
      tarefas: [newTask, ...tarefas],
      novaTarefa: '',
    });
    this.incrementID();
  };

  handleDelete = (id) => {
    const { tarefas } = this.state;
    this.setState({
      tarefas: tarefas.filter((tarefa) => tarefa.id !== id),
    });
  };

  handleUpdate = (id) => {
    const { tarefas, novaTarefa } = this.state;
    const newTask = {
      id,
      tarefa: novaTarefa,
    };
    this.setState({
      tarefas: tarefas.map((tarefa) => (tarefa.id === id ? newTask : tarefa)),
    });
  };

  incrementID = () => {
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
  };

  render() {
    const { tarefas, novaTarefa } = this.state;

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
            <li key={tarefa.id}>
              {tarefa.tarefa}
              <div className="btn-container">
                <button
                  onClick={() => this.handleUpdate(tarefa.id)}
                  className="btn-update-task"
                  aria-label="Modificar"
                  type="button"
                >
                  <div>Modificar</div>
                  <div>
                    <FaPencilAlt />
                  </div>
                </button>
                <button
                  onClick={() => this.handleDelete(tarefa.id)}
                  className="btn-del-task"
                  aria-label="Excluir"
                  type="button"
                >
                  <div>Excluir</div>
                  <div>
                    <FaTrash />
                  </div>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
