import React from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer
      className="p-3 my-5 d-flex flex-column w-50"
      style={{ backgroundColor: "white",
      borderRadius: "10px",}}
    >
      <MDBInput
        wrapperClass="mb-4"
        label="Username"
        id="form1"
        type="email"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        

        
      </div>
    </MDBContainer>
  );
}

export default App;
