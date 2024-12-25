import './App.css'; // For App.css file
import { Header } from './Header'; // For Header component
import Footer from './Footer'; // For Footer component
import {Container} from 'react-bootstrap';

function App() {
  return (
    <div className="main">
      <Header />
      <Container fluid>
        hello
      </Container>
      <div className="container">
        <h1 className="text-danger">Welcome to Home</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
