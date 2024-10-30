import React, { useRef } from 'react'
import Form from '../components/Form'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../configs/firebaseConfig';

const Register = () => {
  const email = useRef()
  const password = useRef()

  function registerUser(event){
    event.preventDefault()
    console.log(email.current.value);
    console.log(password.current.value);
  }

  return (
    <>
      <Form name={"Register Now!"} showConfirmPassword={true} />
      
    </>
  )
}

export default Register
