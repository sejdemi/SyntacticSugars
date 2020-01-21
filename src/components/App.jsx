/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import DummyComponent from './DummyComponents.js';
import styled from 'styled-components';

//create dummy components here and render them onto the screen
//once they are rendered then begin the process of finalizing their layout
//upon pulling requests from rest of team replace dummy components with actual components
//test in browser to see how dimensions change from a desktop to mobile version

const AppLayout = styled.div`
padding: 40px;
display: grid;
grid-template-columns: 180px auto 100px 100px`;


class App extends Component {
  // renders a button and a boolean; the button flips the boolean
  render() {
    return (
      <AppLayout>
      <div>
        <h1>App</h1>
        <div style={{width: '100%', backgroundColor:'blue'}}>
          <h1>DUMMY COMPONENT ONE</h1>
          <DummyComponent/>
        </div>
        <div style={{width: '100%', backgroundColor:'red'}}>
        <h1>DUMMY COMPONENT TWO</h1>
          <DummyComponent/>
        </div>
        <div style={{width: '100%', backgroundColor:'yellow'}}>
        <h1>DUMMY COMPONENT THREE</h1>
          <DummyComponent/>
        </div>
        <div style={{width: '100%', backgroundColor:'purple'}}>
        <h1>DUMMY COMPONENT FOUR</h1>
          <DummyComponent/>
        </div>
      </div>
      </AppLayout>
    );
  }
}


export default App;
