import React, { useRef, useState } from "react";
import { checkValidate } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addIsLogin, addUserDetail } from "../utils/slice/userSlice";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

function Login() {
  let [isSignIn, setIsSighIn] = useState(true);
  let [errorMessage, setErrorMessage] = useState(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null);

  let isLogin = useSelector((store) => store.user.isLogin);

  const handleClick = () => {
    const message = setErrorMessage(
      checkValidate(email.current.value, password.current.value)
    );

    if (message) return;

    if (!isSignIn) {
      // sigh up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
          })
            .then(() => {
              // Profile updated!

              const {
                uid,
                email,
                displayName = "user",
                photoURL,
              } = auth.currentUser;
              dispatch(
                addUserDetail({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              dispatch(addIsLogin(true));
              navigate("/");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      // sigh in

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/userprofile");
          const {
            uid,
            email,
            displayName = "user",
            photoURL,
          } = auth.currentUser;
          dispatch(
            addUserDetail({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      {isLogin ? (
        <Profile />
      ) : (
        <div className="md:pl-32  flex justify-center align-middle items-center">
          <form
            className="flex flex-col w-1/2 md:mt-28 mt-10 mb-28 md:p-8 rounded-lg items-center"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1 className="text-white text-2xl font-bold md:mb-6 mb-3">
              {isSignIn ? "Log In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={name}
                className="my-4 p-3 md:w-2/3 focus:bg-gray-950 outline-none border border-yellow-700  rounded-md bg-transparent text-white"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              ref={email}
              className="my-4 p-3  md:w-2/3 focus:bg-gray-950 outline-none border border-yellow-700  rounded-md bg-transparent text-white"
              type="email"
              placeholder="Email"
            />
            <input
              ref={password}
              className="my-4 p-3  md:w-2/3 focus:bg-gray-950 outline-none border border-yellow-700 rounded-md bg-transparent text-white"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500 items-start">{errorMessage}</p>
            <button
              className="md:mt-2 p-3 w-/12 outline-none font-bold text-xl rounded-md bg-transparent text-white "
              onClick={() => {
                handleClick();
              }}
            >
              Submit
            </button>
            <p
              onClick={() => {
                setIsSighIn(!isSignIn);
              }}
              className="text-white opacity-55 cursor-pointer mb-12"
            >
              {isSignIn ? "Sign Up" : "Log In"}
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
