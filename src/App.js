import React, { Component, Suspense, lazy } from 'react';
import { Router } from '@reach/router';

// components
import Loading from './components/common/loading';
import Nav from './components/common/nav';
import { Path } from "./constants/paths";


// Lazy Load Module
const HouseWorkList = lazy(() => import('./modules/task-list/HouseWorkList'));
const User = lazy(() => import('./modules/user/User'));
const ModifyHouseWorkList = lazy(() => import('./modules/modify-task/ModifyHouseWorkList'));


class App extends Component {

  render() {
      return (
          <div className="App">
              <Nav/>
              <Suspense fallback={<Loading/>}>
                  <Router>
                      <HouseWorkList path={Path.Home}/>
                      <User path={Path.User}/>
                      <ModifyHouseWorkList path={Path.Task}/>
                  </Router>
              </Suspense>
          </div>
      );
  }

}

export default App;
