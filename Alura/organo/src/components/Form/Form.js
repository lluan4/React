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

export const FormIndex = (props) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [time, setTime] = useState('');

  const submitHandle = (e) => {
    const form = e.currentTarget;

    e.preventDefault();
    if (form.checkValidity() === false) {
      console.log('entrei');
      e.stopPropagation();
    }

    props.toResgisteredCollaborator({ name, role, image, time });
  };

  return (
    <section className="mb-5">
      <div className="form-section">
        <Form onSubmit={submitHandle}>
          <h2>Preencha os dados para criar o card do colaborador.</h2>
          <TextField label="Nome" changeValue={(e) => setName(e)} />
          <TextField label="Cargo" changeValue={(e) => setRole(e)} />
          <TextField label="Imagem" changeValue={(e) => setImage(e)} />
          <Dropdown
            itens={getTeams(teamsOptions)}
            label="Time"
            changeValue={(e) => setTime(e)}
          />
          <Button>Criar Card</Button>
        </Form>
      </div>
    </section>
  );
};
