import './Form.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { getTeams } from '../../Lib/utils';

const teamsOptions = [
  'Escolha o Time',
  'Programação',
  'Fron-End',
  'Data Science',
  'Devops',
  'UX e Design',
  'Mobile',
];

export const FormIndex = () => {
  const times = [];

  const [nome, setNome] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const submitHandle = (e) => {
    e.preventDefault();
    const inputs = e.currentTarget.querySelectorAll('input, select');
    for (const keys in inputs) {
      console.log(inputs[keys].value, inputs[keys].name);
    }
  };

  return (
    <section>
      <div className="form-section">
        <Form onSubmit={submitHandle}>
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          <TextField
            label="nome"
            inputChanged={(e) => setNome(e)}
            value={nome}
            validation
          />
          <TextField
            label="cargo"
            inputChanged={(e) => setRole(e)}
            value={role}
            validation
          />
          <TextField
            label="imagem"
            inputChanged={(e) => setImage(e)}
            value={image}
          />
          <Dropdown
            itens={getTeams(teamsOptions)}
            label="time"
            inputChanged={(e) => setTeam(e)}
            value={team}
            validation
          />
          <Button>Criar Card</Button>
        </Form>
      </div>
    </section>
  );
};
