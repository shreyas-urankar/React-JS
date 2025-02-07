import "./App.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from "react-toastify";
function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);
  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  let handleSubmit = (event) => {
    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };

    let checkFilterUser = userData.filter(
      (v) => (v.uemail === formData.uemail || v.uphone === formData.uphone)
    );

    if (checkFilterUser.length === 1) {
      toast.error("Email-Id or Phone Number already Exists ")
    } else {
      let oldUserData = [...userData, currentUserFormdata];
      console.log(oldUserData);
      setUserData(oldUserData);
      setFormData({
        uname: "",
        uemail: "",
        uphone: "",
        umessage: "",
        index: "",
      });
    }
    event.preventDefault();
  };

  console.log(formData);

  let deleteRow = (indexNumber) => {
    let filterDataafterDelete = userData.filter((v, i) => i !== indexNumber)
    toast.success("Data Delete. ")
    setUserData(filterDataafterDelete)
  };
  return (
    <Container fluid>
      <ToastContainer/>
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
                <input
                  type="text"
                  onChange={getValue}
                  value={formData.uname}
                  name="uname"
                  className="form-control"
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  onChange={getValue}
                  value={formData.uemail}
                  name="uemail"
                  className="form-control"
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  onChange={getValue}
                  value={formData.uphone}
                  name="uphone"
                  className="form-control"
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="umessage"
                  onChange={getValue}
                  value={formData.umessage}
                  className="form-control"
                  rows="3"
                />
              </div>

              <button className="btn btn-primary">
                {formData.index !== "" ? "Update" : "Save"}
              </button>
            </form>
          </Col>
          <Col lg={7}>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email-Id</th>
                  <th>Phone Number</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.length >= 1 ? (
                  userData.map((obj, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{obj.uname}</td>
                        <td>{obj.uemail}</td>
                        <td>{obj.uphone}</td>
                        <td>{obj.umessage}</td>
                        <td>
                          <button onClick={() => deleteRow(i)}>
                            Delete
                          </button>
                          <button>Edit</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6}>No Data Found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
