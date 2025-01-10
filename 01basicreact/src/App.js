import "./App.css"; // For styles
import { Header } from "./Header"; // For Header component
import Footer from "./Footer"; // For Footer component
import { Button, Card,  Container, Row } from "react-bootstrap";
import { blog } from './Data/blog'; // Make sure the file is named `blog.js`
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function App() {
  let headerInfo = {
    name: "Shreyas Urankar",
    email: "sheryasurankar@gmail.com",
  };

  return (
    <div className="main">
      <Header headerInfo={headerInfo} cname="shreyasurankar@gmail.com" />
      <h1>Welcome to Header Section</h1>
      <FontAwesomeIcon icon={faWhatsapp} style={{marginRight: '10px'}} className="text-danger"/>
      <FontAwesomeIcon icon={faPhone} style={{marginLeft:'10px'}}/>
      <Container>
        <Row>
           {blog.map((v,i)=>{
          return(
              <ProductItems pitems={v} key={i}/>
          )})}
        </Row>
      </Container>

      <div className="container">
        <h1 className="text-danger">Welcome to Home</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;

function ProductItems({pitems}) {
  return (
    <div className ="col-lg-3 mb=4">
      <Card>
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
