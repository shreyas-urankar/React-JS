import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index:""
  });

  let[userData, setUserData]=useState([])
  let getValue=(event)=>{
    let oldData={...formData}
    let inputName=event.target.name;
    let inputValue=event.target.value;
    oldData[inputName]=inputValue;
    setFormData(oldData )
  }

  let handleSubmit=(event)=>{
    let currentUserFormdata={
      uname:formData.uname,
      uemail:formData.uemail,
      uphone:formData.uphone,
      umessage:formData.umessage
    }
    let oldUserData=[...userData, currentUserFormdata]

    setUserData(oldUserData)
    event.prevebtDefault();
  }
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
          {userData.length}
            <form onSubmit={handleSubmit}>
              <div className="pb-3">
                <label className="form-label">Name</label>
                <input type="text" onChange={getValue} value={formData.uname} name="uname" className="form-control" />
              </div>

              <div className="pb-3">
                <label className="form-label">Email</label>
                <input type="text" onChange={getValue} value={formData.uemail} name="uemail" className="form-control" />
              </div>

              <div className="pb-3">
                <label className="form-label">Phone</label>
                <input type="text" onChange={getValue} value={formData.uphone} name="uphone" className="form-control" />
              </div>

              <div className="pb-3">
                <label className="form-label">Message</label>
                <textarea name="umessage" onChange={getValue} value={formData.umessage} className="form-control" rows="3" />
              </div>

              <button className="btn btn-primary">
                {
                  formData.index!==""?'Update':'Save'
                }
              </button>
            </form>
          </Col>
          <Col lg={7}></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
