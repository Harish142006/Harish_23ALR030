import React from "react";
import { BrouserRouter as Router, Route, Switch } from  'react-router-dom';
import Login from './types/Login.js';
import profile from './types /profile.js';
import Dashboard from './Dashboard.js';
import { useEffect,useState } from "react";
const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <p>This is the registration page.</p>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="abc123@gmail.com"/>
      <input type="password"placeholder="password"/>
      <button>Register</button>
      <button>Already have an account? <a href="/Login">Login here</a></button>
      
    </div>
  );
};

export default Register;