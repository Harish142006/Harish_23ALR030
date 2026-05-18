import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './types/Login';
import Register from './types/Register';
import Profile from './types/Profile';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is the dashboard page.</p>
      <button>View Reports</button>
      <button>Manage Users</button>
      <button>Settings</button>
      <button>Notifications</button>
      <button>Help</button>
      
    </div>
  );
};

export default Dashboard;