import React from "react";
import Form from "../components/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

const Login = () => {
  // signInWithEmailAndPassword(auth, event.email, event.password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });

  function LoginUser(event) {
    console.log(event.email);
    console.log(event.password);

    signInWithEmailAndPassword(auth, event.email, event.password)
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
      <Form name={"Login User"} onSubmitFunc={LoginUser} />
    </>
  );
};

export default Login;
