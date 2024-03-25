import "./CardContainer.css";
import Card from "../Card";

export function CardContainer({ cardInformations }, ...props) {
  return (
    <div className={"card-container"}>
      {cardInformations.map((value, index) => {
        return <Card cardInfomation={value} key={index} />;
      })}
    </div>
  );
}
