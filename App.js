import { defineComponent } from 'vue';
import React from 'react';
import { BrouserRouter as Router, Route, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react';

import Login from './types/Login.ts';
function App(){
    return () => (
      <div>
        <h1>Welcome to My App</h1>
        <p>This is the main component of the application.</p>
      </div>
    );
  }

export default App;
