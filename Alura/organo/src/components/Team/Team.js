import './Team.css';
import BootstrapCard from '../Card';
export const Team = (props) => {
  return (
    <section
      style={{
        backgroundColor: props.background,
      }}
      className="team flex-column"
    >
      <div className="card-content">
        <div className="title-team mb-3">
          <h3>{props.name}</h3>
          <div
            style={{ borderTop: '4px solid ' + props.highlight }}
            className="title-border"
          ></div>
        </div>
        <div>
          <BootstrapCard backgroundCard={props.highlight}></BootstrapCard>
        </div>
      </div>
    </section>
  );
};
