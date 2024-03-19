import Banner from "./components/Banner/";
import Form from "./components/Form";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Banner />
      <Form />
      <Button variant="primary">Primary</Button>{" "}
    </div>
  );
}

export default App;
