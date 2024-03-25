import './Dropdown.css';
import Form from 'react-bootstrap/Form';
import {
  getTeams,
  controlIdGenerator,
  firstLetterUpperCase,
} from '../../Lib/utils';
import { useState } from 'react';

export const teamsOptions = [
  ['Escolha o Time', '', ''],
  ['Programação', '#D9F7E9', '#57C278'],
  ['Fron-End', '#E8F8FF', '#82CFFA'],
  ['Data Science', '#F0F8E2', '#A6D157'],
  ['Devops', '#FDE7E8', '#E06B69'],
  ['UX e Design', '#FAE9F5', '#DB6EBF'],
  ['Mobile', '#FFF5D9', '#FFBA05'],
  ['Inovação e Gestão', '#FFEEDF', '#FF8A29'],
];

export const Dropdown = ({ label, ...props }) => {
  const { teams } = getTeams(teamsOptions);
  const [value, setValue] = useState('');
  function handleChange(e) {
    const { value } = e.currentTarget;
    setValue(value);
    props.changeValue(value);
  }

  return (
    <Form.Group controlId={controlIdGenerator(label)} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select
        onChange={handleChange}
        name={label}
        value={value}
        size="lg"
        required
      >
        {teams.map(({ id, value, team }) => (
          <option key={id} value={value}>
            {team}
          </option>
        ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        {`Insira um valor válido no campo: ${firstLetterUpperCase(label)}`}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
