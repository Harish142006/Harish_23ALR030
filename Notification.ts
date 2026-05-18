import React from 'react';
import { NotificationProps } from './NotificationProps';
import { NotificationState } from './NotificationState';
import { NotificationContext } from './NotificationContext';
import { NotificationService } from './NotificationService';
import { NotificationUtils } from './NotificationUtils';
import { NotificationConstants } from './NotificationConstants';
import { NotificationTypes } from './NotificationTypes';
import { NotificationActions } from './NotificationActions';
import { NotificationReducer } from './NotificationReducer';
import { NotificationSelectors } from './NotificationSelectors';
import { NotificationHooks } from './NotificationHooks';
import { NotificationProvider } from './NotificationProvider';
import { NotificationConsumer } from './NotificationConsumer';  
import { NotificationComponent } from './NotificationComponent';
import { NotificationContainer } from './NotificationContainer';
import { NotificationItem } from './NotificationItem';  
import { NotificationList } from './NotificationList';
import { NotificationManager } from './NotificationManager';
import { NotificationDispatcher } from './NotificationDispatcher';  
import { NotificationMiddleware } from './NotificationMiddleware';
import { NotificationSaga } from './NotificationSaga';
import { NotificationEpic } from './NotificationEpic';
import Login from 'myapp/src/types/Login.js'
import Register from 'myapp/src/types/Register.js'
import Dashboard from 'myapp/src/types/Dashboard.js'
import Profile from 'myapp/src/types/Profile.js'
import { BrouserRouter, Route, Switch} from 'react-router-dom';
import { useEffect , useStete} from 'react';


function Notification() {
  return (
    <div>
      <h2>Notification</h2>
      <p>This is the Notification component.</p>
      <NotificationProvider>
        <NotificationConsumer>
          <NotificationComponent />
          <NotificationContainer />
          <NotificationItem />
          <NotificationList />
          <NotificationManager />   
        </NotificationConsumer>
      </NotificationProvider>  
    </div>
  );
}

export default Notification;