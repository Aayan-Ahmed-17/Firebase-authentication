import React, { useRef } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const Register = () => {

  function registerUser(event) {

    createUserWithEmailAndPassword(auth, event.email, event.password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log(user);            
        console.log(event.email);
        console.log(event.password);
        console.log(event.confirmPassword);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <>
      <Navbar />
      <Form
        name={"Register Now!"}
        showConfirmPassword={true}
        onSubmitFunc={registerUser}
      />
    </>
  );
};

export default Register;
