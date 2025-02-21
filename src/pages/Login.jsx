import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen flex items-center justify-center">
      <div className="card bg-white w-full max-w-sm shadow-2xl p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome Back!</h1>
        <p className="mb-6 text-gray-600">Sign in with Google to access your account</p>
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              login(credentialResponse);
              navigate("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="mt-6">
          {/* <p className="text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500 font-semibold hover:underline">Sign up</a></p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
