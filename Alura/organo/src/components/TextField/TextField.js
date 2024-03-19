import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TextField.css";

export const TextField = ({ label, value, className, ...props }) => {
  function handleChange(e) {
    const { value } = e.target;
    props.inputChanged(value);
    props.validName(isValid(value));
  }

  return (
    <Form.Group controlId={label} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        onChange={handleChange}
        name={label}
        placeholder={getPlaceholderBy(label)}
        value={value}
      />
    </Form.Group>
  );
};

function getPlaceholderBy(label) {
  return {
    Nome: `Digite seu ${label}...`,
    Cargo: `Digite seu ${label}...`,
    Imagem: `Informe o endereço da ${label}...`,
    Time: "",
  }[label];
}

const isValid = (value) => {
  const validations = {
    isEmpty: isEmpty({ value }),
    hasNumber: hasNumber({ value }),
  };
  const result = validations.isEmpty && validations.hasNumber;
  return result;
};

const isEmpty = ({ value }) => value.trim() !== "";
const hasNumber = ({ value }) => !/\d/g.test(value.trim());
