import React  from "react";
import { BrowerRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './types/Login.js';
import Register from './Notification.js';
import Dashboard from './types/Dashboard.js';
import {useEffect, useState}from 'react';

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <p>This is the profile page.</p>
      <button>Edit Profile</button>
      <button>Logout</button>  
      <button>Delete Account</button>
      <button>Change Password</button>
      <button>View Activity</button>
    </div>
  );
};

export default Profile;