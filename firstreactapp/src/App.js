import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Card, Button  } from 'react-bootstrap';


function App() {
  let headerInfo={
    email="abcdefg@gmail.com",
    phone='9812345678'
  }
  return (
    <div className="main">
      <h1>Welcome to Shreyas First React Tutorial.</h1>
      <Header headerInfo={headerInfo} cname="IT Company"/>
      <Container fluid>
        <Row>
          <Col className="col-12 text-center py-4">
            <h1>This is React JS using Bootstrap</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="container">
        <h1>Hi what you think about React</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;

