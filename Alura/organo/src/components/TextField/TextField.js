import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextField.css';
import * as utils from '../../Lib/utils';
import { useState } from 'react';

export const TextField = ({ label, ...props }) => {
  const [newValue, setNewValue] = useState('');
  const [valid, setValid] = useState(true);

  function handleChange(e) {
    const { value } = e.target;
    setNewValue(value);
    props.changeValue(value);
  }

  function setValidations() {
    switch (label.toLowerCase()) {
      case 'nome':
        setValid(utils.isTextValid(newValue));
        break;
      case 'cargo':
        setValid(
          utils.expressionResult(
            !utils.isEmpty(newValue),
            'and',
            !utils.isFirstEmpty(newValue)
          )
        );
        break;
      default:
        break;
    }
    switch (label.toLowerCase()) {
      case 'nome':
        props.changeValue(newValue);
        break;
      case 'cargo':
        props.changeValue(newValue);
        break;
      case 'imagem':
        props.changeValue(newValue);
        break;
      default:
        break;
    }
  }

  return (
    <Form.Group controlId={utils.controlIdGenerator(label)} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        onChange={handleChange}
        onBlur={setValidations}
        name={label}
        placeholder={getPlaceholderBy(label)}
        value={props.value}
        size="lg"
        required={!utils.compareStrings(label, 'imagem') ? true : false}
        isInvalid={!valid}
      />
      <Form.Control.Feedback type="invalid">
        {`Insira um valor válido no campo: ${utils.firstLetterUpperCase(
          label
        )}`}
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
