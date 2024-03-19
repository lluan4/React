import "./Form.css";
import TextField from "../TextField";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const teamsOptions = [
  "Escolha o Time",
  "Programação",
  "Fron-End",
  "Data Science",
  "Devops",
  "UX e Design",
  "Mobile",
];

function getTeams() {
  const teamsRepository = {
    teams: [],
  };
  teamsOptions.forEach((team, index) => {
    team === "Escolha o Time"
      ? teamsRepository.teams.push({ id: index, value: "", team })
      : teamsRepository.teams.push({ id: index, value: team, team });
  });

  return teamsRepository;
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

export const Form = () => {
  const times = [];

  const [nome, setNome] = useState("");
  const [validName, setValidNome] = useState(isValid(nome));
  const [cargo, setCargo] = useState("");
  const [validRole, setValidRole] = useState(isValid(cargo));
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [validTime, setValidTime] = useState(isValid(time));
  const [count, setCount] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    setCount(true);
    console.log(validName);
  };

  return (
    <section>
      <form onSubmit={submitHandle} className="form-section">
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          label="Nome"
          valor={nome}
          validName={(valor) => setValidNome(valor)}
          inputChanged={(valor) => setNome(valor)}
          className={!validName && count ? "is-invalid" : "is-valid"}
        />
        <TextField
          label="Cargo"
          valor={cargo}
          validRole={(valor) => setValidRole(valor)}
          inputChanged={(valor) => setCargo(valor)}
        />
        <TextField
          label="Imagem"
          valor={imagem}
          inputChanged={(valor) => setImagem(valor)}
        />
        <Dropdown
          itens={getTeams()}
          label="Time"
          valor={time}
          validTime={(valor) => setTime(valor)}
          inputChanged={(valor) => setValidTime(valor)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
