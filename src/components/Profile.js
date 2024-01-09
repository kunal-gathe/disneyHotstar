import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import userSlice, { addIsLogin } from "../utils/slice/userSlice";

function Profile() {
  let userData = useSelector((store) => store.user.userData);
  const { displayName, email, photoURL } = userData;
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div className="text-white md:p-40 mb-40 pt-24 flex flex-col items-center">
      <img className="w-16 rounded-lg " src={photoURL} alt="img" />
      <div className="my-4 font-semibold text-lg">
        <h1>Name: {displayName}</h1>
        <h1>Email: {email}</h1>
      </div>
      <button
      className="mb-12"
        onClick={() => {
          signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
            dispatch(addIsLogin(false));
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Profile;
