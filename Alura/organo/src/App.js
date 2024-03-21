import Banner from './components/Banner/';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';

function App() {
  const [collaborators, setCollaborator] = useState([]);

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
      <Team name="Programação" />
      <Team name="Fronend" />
      <Team name="Data Science" />
    </div>
  );
}

export default App;
