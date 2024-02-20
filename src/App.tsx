import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Video  from './components/video.tsx';
import {Link, Route} from 'react-router-dom'
import styled from 'styled-components'

import logo from './images/logo.svg'

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`

const ImageGeneration = () => {

}


function Header(props){
  return(
    <header >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.text}
        </p>
        <List>
          <li><a href="/imageGen">Image generation</a></li>
          <li><a href="">Search videos</a></li>
          <li><a href="">chat!</a></li>
          <li><a href="">Login</a></li>
        </List>
      </header>
  )
}

const Container = (props) => {
  return (
    <div>
      Hello {props.name}
    </div>
  )
}

const router = createBrowserRouter([
  {
    // it renders this element
    element: <h1>Image generation</h1>,
    // when the URL matches this segment
    path: "/images",

    // with this data loaded before rendering
    // loader: async ({ request, params }) => {
    //   return fetch(
    //     `/fake/api/teams/${params.teamId}.json`,
    //     { signal: request.signal }
    //   );
    // },

    // performing this mutation when data is submitted to it
    // action: async ({ request }) => {
    //   return updateFakeTeam(await request.formData());
    // },

    // and renders this element in case something went wrong
    //errorElement: <ErrorBoundary />,
  },
  {
    element: <h1>Search videos</h1>,
    path: '/videoSearch'
  }
]);

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
