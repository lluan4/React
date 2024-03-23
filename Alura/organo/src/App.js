import Banner from './components/Banner/';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';
import { teamsOptions } from './components/Dropdown/Dropdown';
import { getTeams } from './Lib/utils';

function App() {
  const [collaborators, setCollaborator] = useState([]);
  const { teams } = getTeams(teamsOptions);
  const arrayTeams = Object.values(teams);
  const newCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
    console.log(collaborators);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        toResgisteredCollaborator={(collaborator) =>
          newCollaborator(collaborator)
        }
      />
      {arrayTeams.map((team) => {
        if (team.team !== 'Escolha o Time') {
          return (
            <Team
              key={team.team}
              name={team.team}
              background={team.background}
              highlight={team.highlight}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;
