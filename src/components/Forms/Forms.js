import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
  
export default function Forms (){
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const data = {

  email,
  password,
};
const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const url = "http://localhost:5000/api/auths/login";
    const { data: res } = await axios.post(url, data);
    localStorage.setItem("userInfo", JSON.stringify(res));

    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-console
    console.log(res);
  } catch (error) {
    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
      // eslint-disable-next-line no-undef
     return("verifier vous données")
    }
  }
};
  return (
    <MDBContainer style={{marginTop: '6%'}} className=" w-50 ">
    <MDBCard>
      
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: 'yellow' }}/>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Connecté en tant que Freelancer</h5>
              <form  onSubmit={submitHandler}>
              <MDBInput wrapperClass='mb-4' label='Email address' type='email' size="lg"  onChange={(e) => setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit'>Connecté</MDBBtn>
            </form>
            <a className="small text-muted" href="#!">mdp oblié?</a>
            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>vous n'avez pas de compte? <a href="/register" style={{color: '#393f81'}}>S'inscrire</a></p>

          

          </MDBCardBody>
    
    </MDBCard>

  </MDBContainer>
  )
}
