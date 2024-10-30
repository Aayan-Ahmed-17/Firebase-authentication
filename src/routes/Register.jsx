import React, { useRef } from "react";
import Form from "../components/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const Register = () => {
  function registerUser(event) {
    console.log(event.email);
    console.log(event.password);
    console.log(event.confirmPassword);

    createUserWithEmailAndPassword(auth, event.email, event.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
