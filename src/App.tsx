import React from 'react';
import { Button } from 'antd';
import './App.css';
import { ReactComponent as ReactLog } from './styles/svg/a.svg'

function App() {
  return (
    <div className="App">
      <ReactLog className='App-logo'/>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
