import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`

export default function Header(props){
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
          <li><a href="">about</a></li>
        </List>
      </header>
  )
}