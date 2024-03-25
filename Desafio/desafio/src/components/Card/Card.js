import "./Card.css";

export function Card({ cardInfomation }, ...props) {
  const cardInformation = cardInfomation.results[0];

  return (
    <div className={"card"}>
      <div className={"card-image"}>
        <img src={cardInformation.image} props="img"></img>
      </div>
      <div className={"card-content"}>
        <p>{cardInformation.name}</p>
        <p>{cardInformation.species}</p>
        <p>{cardInformation.status}</p>
      </div>
    </div>
  );
}
