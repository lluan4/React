import './Dropdown.css';
import Form from 'react-bootstrap/Form';
import { controlIdGenerator, firstLetterUpperCase } from '../../Lib/utils';
import { useState } from 'react';

export const Dropdown = ({ label, itens, className, ...props }) => {
  const { teams } = itens;
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
