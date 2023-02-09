import react from 'react'

import logo from './../logo.svg'

export default function Header(props){
  return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  )
}