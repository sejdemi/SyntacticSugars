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
display: grid;
font-size: 1.5em;
text-align: center;
grid-template-rows: 1fr;
place-items: center;
margin:0;`


class App extends Component {
  render() {
    return (
      <AppLayout>
      <div>
        <h1>App</h1>
        <div style={{margin: 0, backgroundColor:'blue'}}>
          {/* <h1>DUMMY COMPONENT ONE</h1> */}
          <DummyComponent/>
        </div>
        <div style={{backgroundColor:'red'}}>
        {/* <h1>DUMMY COMPONENT TWO</h1> */}
          <DummyComponent/>
        </div>
        <div style={{backgroundColor:'yellow'}}>
        {/* <h1>DUMMY COMPONENT THREE</h1> */}
          <DummyComponent/>
        </div>
        <div style={{backgroundColor:'purple'}}>
        {/* <h1>DUMMY COMPONENT FOUR</h1> */}
          <DummyComponent/>
        </div>
      </div>
      </AppLayout>
    );
  }
}


export default App;
