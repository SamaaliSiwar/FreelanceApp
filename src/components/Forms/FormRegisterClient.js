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
  
export default function FormRegisterClient (){
const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const data = {
  firstName,
  lastName,
  email,
  password,
};
const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const url = "http://localhost:5000/api/auths/client/signup";
    const { data: res } = await axios.post(url, data);
    // eslint-disable-next-line no-alert
    alert("um message d'activation de compte est envoyées à votre mail");
    // eslint-disable-next-line no-console
    console.log(res);
  } catch (error) {
    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
      // eslint-disable-next-line no-undef
      setError(error.response.data.message);
    }
  }
};
  return (
    <MDBContainer style={{marginTop: '6%',height: '30%'}} className=" w-50 h-10 ">

    <MDBCard>
      
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: 'yellow' }}/>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>S'nscrire en tant que Client</h5>

            <form  onSubmit={submitHandler}>
            
            <div className="flex w-full items-end gap-4">
            <MDBInput wrapperClass='mb-4 mt-2' label='Nom' id='formControlLg' type='text' size="md" onChange={(e) => setfirstName(e.target.value)}/>
            <MDBInput wrapperClass='mb-4 mt-2' label='Prénon' id='formControlLg' type='text' size="md"  onChange={(e) => setlastName(e.target.value)}/>

    </div>
    
    <MDBInput wrapperClass='mb-4 mt-2' label='Email address' id='formControlLg' type='email' size="lg"  onChange={(e) => setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)}/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit'>Register</MDBBtn>
            </form>
            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>vous avez déja un compte? <a href="client/login" style={{color: '#393f81'}}>Connextion</a></p>

          

          </MDBCardBody>
    
    </MDBCard>

  </MDBContainer>
  )
}
