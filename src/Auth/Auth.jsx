import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import axios from 'axios';
import SetCookie from "../Hooks/SetCookie";

function Auth(props) {
  // sign up 
  const [getFullName,setFullName] = useState('');
  const [getEmail,setEmail] = useState('');
  const [getPwd,setPwd] = useState('');
  // log in 
  const [getLoginEmail,setLoginEmail] = useState('');
  const [getLoginPassword,setLoginPassword] = useState('');

  // page shifting start 
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  // page shifting end 

  // sign up start
  const handleSignUpSubmit = (e)=>{
    e.preventDefault();
    console.log(getEmail,getPwd,getFullName);
    axios.post('http://localhost:4000/signup', {
      fullName: getFullName,
      email: getEmail,
      pwd:getPwd
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    setFullName('');
    setEmail('');
    setPwd('');
  }
  // sign up end 

  //login start 
  // const navigate = useNavigate();
  const handleLoginSubmit = async(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4000/login', {
      email: getLoginEmail,
      pwd: getLoginPassword
    })
    .then(function (response) {
      if(response.status===200){
        console.log('logged in');
        props.setIsLoggedIn(true);
        console.log(response.data.tk);
        SetCookie(response.data.tk);
        // navigate("messenger", { replace: true, state:'123' });
        // navigate('/messenger',{ state:'hello' })
          //set cookies here and sent it to server
      }
      else{
        //password wrong message to front end
      };
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  //login end 

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLoginSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e)=>setLoginEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e)=>setLoginPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="#">Forgot password?</a>
            </p>
            {/* ----------or login with-------------- */}
            <div className="d-grid gap-2 mt-3">
              <p className="text-center">
                ------------------ OR ------------------
              </p>
              <a
                className="btn btn-md btn-block my-2 d-flex justify-content-center align-items-center"
                style={{}}
                href="#!"
                role="button"
              >
                {<FacebookIcon style={{ color: "#3b5998" }} />}{" "}
                <span className="ps-2">
                  Continue with{" "}
                  <span style={{ color: "#3b5998" }}> Facebook</span>
                </span>
              </a>
              <a
                className="btn btn-outline-dark btn-md btn-block mb-4 d-flex justify-content-center align-items-center"
                style={{}}
                href="#!"
                role="button"
              >
                {<GoogleIcon />}{" "}
                <span className="ps-2">
                  Continue with
                  <span style={{ color: "#4285F4" }}> G</span>
                  <span style={{ color: "#DB4437" }}>o</span>
                  <span style={{ color: "#F4B400" }}>o</span>
                  <span style={{ color: "#0F9D58" }}>g</span>
                  <span style={{ color: "#0F9D58" }}>l</span>
                  <span style={{ color: "#DB4437" }}>e</span>
                </span>
              </a>
            </div>
            {/* -----------------------end---------------- */}
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSignUpSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e)=>setFullName(e.target.value)}
              value={getFullName}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e)=>setEmail(e.target.value)}
              value={getEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e)=>setPwd(e.target.value)}
              value={getPwd}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Auth;
