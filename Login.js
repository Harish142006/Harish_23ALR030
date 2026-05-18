import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, use State } from 'react';

import Register from './types/Register';
import Profile from './types/Profile';
import Dashboard from './types/Dashboard';

  
function Login(){
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button> 
            <button>Forgot Password</button>
            <p>Don't have an account? <a href="/register">Register here</a></p> 
        </div>
    )
}

export default Login;