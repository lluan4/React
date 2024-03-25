import './Card.css';
import Card from 'react-bootstrap/Card';
import imageUrl from '../../img/lua.jpg';

export const BootstrapCard = (
  { name, role, backgroundCard, image },
  ...props
) => {
  return (
    <Card style={{ maxWidth: '262px', height: '272px' }} className="card">
      <div className="card-banner">
        <div
          style={{
            backgroundColor: backgroundCard,
          }}
          className="cardBackground"
        ></div>
        <Card.Img className="card-img" variant="top" src={image} />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </Card>
  );
};
