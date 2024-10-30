import React, { useRef } from "react";
import Form from "../components/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const Register = () => {
  function registerUser(event) {
    event.email &&
      event.password &&
      event.confirmPassword &&
      (console.log(event.email),
      console.log(event.password),
      console.log(event.confirmPassword));
  }

  return (
    <>
      <Form
        name={"Register Now!"}
        showConfirmPassword={true}
        onSubmitFunc={registerUser}
      />
    </>
  );
};

export default Register;
