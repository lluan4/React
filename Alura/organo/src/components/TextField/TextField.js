import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextField.css';
import { controlIdGenerator, firstLetterUpperCase } from '../../Lib/utils';

export const TextField = ({ label, value, className, ...props }) => {
  function handleChange(e) {
    const values = {
      value: e.target.value,
      label: label.toLowerCase(),
    };
    props.inputChanged(values.value);
  }

  return (
    <Form.Group controlId={controlIdGenerator(label)} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        onChange={handleChange}
        name={label}
        placeholder={getPlaceholderBy(label)}
        value={value}
        className={className}
        size="lg"
      />
      <Form.Control.Feedback type="invalid">
        {`Insira um valor válido no campo: ${firstLetterUpperCase(label)}`}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

function getPlaceholderBy(label) {
  return {
    Nome: `Digite seu ${label}...`,
    Cargo: `Digite seu ${label}...`,
    Imagem: `Informe o endereço da ${label}...`,
    Time: '',
  }[label];
}
