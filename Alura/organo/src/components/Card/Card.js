import './Card.css';
import Card from 'react-bootstrap/Card';
import imageUrl from '../../img/lua.jpg';

export const BootstrapCard = (props) => {
  return (
    <Card style={{ maxWidth: '262px', height: '272px' }} className="card">
      <div className="card-banner">
        <div
          style={{
            backgroundColor: props.backgroundCard,
          }}
          className="cardBackground"
        ></div>
        <Card.Img className="card-img" variant="top" src={imageUrl} />
      </div>
      <div className="card-info">
        <h2>Teste</h2>
        <p>Desenvolvedora de software e instrutora</p>
      </div>
    </Card>
  );
};
