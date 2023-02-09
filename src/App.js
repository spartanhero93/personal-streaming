import Header from './components/header'
import './App.css';
import { useState } from 'react';
import Video from './components/video';

function App() {
  const [data, handleData] = useState({})

  const getData = async() =>{
    const res = await fetch(``)
    console.log(res)
  }

  return (
    <div className="App">
      <Header text={data.data || 'No data'}/>
      <button onClick={() => getData()}>Click me!</button>
      <Video/>
    </div>
  );
}

export default App;
