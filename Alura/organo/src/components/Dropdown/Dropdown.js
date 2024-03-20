import './Dropdown.css';
import Form from 'react-bootstrap/Form';
import { controlIdGenerator, firstLetterUpperCase } from '../../Lib/utils';

export const Dropdown = ({ label, itens, className, ...props }) => {
  const { teams } = itens;

  function handleChange(e) {
    const values = {
      value: e.currentTarget.value,
      label: label,
    };
    props.inputChanged(values.value);
  }

  return (
    <Form.Group controlId={controlIdGenerator(label)} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select
        onChange={handleChange}
        name={label}
        size="lg"
        className={className}
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
