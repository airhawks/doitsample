import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirebaseContainer from './stateContainer/FirebaseState';
import Home from './containers/home';
import 'react-mdl/extra/material.min.js';
import 'react-mdl/extra/material.min.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Provider, Subscribe } from 'unstated';

class App extends Component {
  render() {
    return (
      <Provider>
         <Subscribe to={[FirebaseContainer]}>
          {
            (firebase) => {
              const {login, logout, state: {user}} = firebase;
              return (
                <div style={{height: '100vh', position: 'relative'}}>
                  <Layout fixedHeader fixedDrawer>
                      <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>Do It</strong></span>}>
                          <Navigation>
                              <a href="#">Link</a>
                          </Navigation>
                      </Header>
                      <Drawer title="DoIt">
                          <Navigation>
                              <a href="#">Link</a>
                          </Navigation>
                      </Drawer>
                      <Content />
                  </Layout>
              </div>
              )
            }
          }
         </Subscribe>
      </Provider>
    );
  }
}

export default App;
