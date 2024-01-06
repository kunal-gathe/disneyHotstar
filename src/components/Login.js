import React, { useRef, useState } from "react";
import { checkValidate } from "../utils/formValidation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {

  const [isLogIn, setIsLogIn] = useState(false);
  const [isError, setIsError] = useState(null);
  

  let email = useRef(null);
  let password = useRef(null);

  let handleClick = () => {
    let message = checkValidate(email.current.value, password.current.value);
    setIsError(message);

    if (message) return;

    if (!isLogIn) {

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsError(errorMessage)
          // ..
        });
    } else {
    }
  };
  return (
    <div className="pl-32  flex justify-center align-middle items-center">
      <form
        className="flex flex-col w-1/2 mt-28 mb-28 p-8 rounded-lg items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-white text-2xl font-bold mb-6">
          {isLogIn ? "Log In" : "Sign Up" }
        </h1>
        {!isLogIn && (
          <input
            className="my-4 p-3 w-2/3 focus:bg-gray-950 outline-none border border-yellow-700  rounded-md bg-transparent text-white"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="my-4 p-3  w-2/3 focus:bg-gray-950 outline-none border border-yellow-700  rounded-md bg-transparent text-white"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="my-4 p-3  w-2/3 focus:bg-gray-950 outline-none border border-yellow-700 rounded-md bg-transparent text-white"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 items-start">{isError}</p>
        <button
          className="mt-2 p-3 w-/12 outline-none font-bold text-xl rounded-md bg-transparent text-white"
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </button>
        <p
          onClick={() => {
            setIsLogIn(!isLogIn);
          }}
          className="text-white opacity-55 cursor-pointer"
        >
          {isLogIn ? "Sign Up" :  "Log In"}
        </p>
      </form>
    </div>
  );
}

export default Login;
