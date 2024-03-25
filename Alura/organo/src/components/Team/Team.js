import './Team.css';
import BootstrapCard from '../Card';
export const Team = (props) => {
  return (
    props.collaborators.length > 0 && (
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
          <div className="card-container">
            {props.collaborators.map((collaborator) => (
              <BootstrapCard
                backgroundCard={props.highlight}
                name={collaborator.name}
                role={collaborator.role}
                image={collaborator.image}
              ></BootstrapCard>
            ))}
          </div>
        </div>
      </section>
    )
  );
};
