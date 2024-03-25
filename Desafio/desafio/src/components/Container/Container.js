import "./Container.css";
import CardContainer from "../CardContainer";
import Button from "../Button";
import { useState } from "react";
import { apiRequest } from "../../API/get.js";
import { random } from "../../lib/utils.js";

export function Container() {
  const [click, setclick] = useState(false);
  const [cardInformations, setCardInformations] = useState([]);

  const apiRetun = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let index = 0; index < 3; index++) {
      await apiRequest(random()).then((resp) => {
        apiRetun.push(resp);
      });
    }
    setCardInformations(apiRetun);
    setclick(true);
  };

  return (
    <form onSubmit={handleSubmit} className={"container"}>
      {click ? <CardContainer cardInformations={cardInformations} /> : ""}
      <Button text="VER PERSONAGENS DE RICK AND MORTY" />
    </form>
  );
}
