import React, { useState } from 'react';

import './App.css';
import Video  from './components/video.tsx';
import Header from './components/header.tsx'


const Container = (props) => {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}

function App() {
  interface data {
    response: object
  }

  const [data, handleData] = useState({})

  const getData = async() =>{
    const res = await fetch(``)
    console.log(res)
  }

  return (
    <div className="App">
      <Header text={data.data || 'Welcome'}/>
      <button onClick={() => getData()}>Click me!</button>
        <Video/>
        <Container name='Luis' />
        <Container name='Anthony' />
        <Container name='Jesus' />
        <Container name='Brodey' />
    </div>
  );
}

export default App;
