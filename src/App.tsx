import React from 'react';
import { Button } from 'antd';
import './App.css';
import { ReactComponent as ReactLog } from './style/svg/a.svg'
import './style/logo.scss'
import Login from './views/login/login'
import Test from './views/test_index/test'


function App() {
  return (
    <div className="App">
      <Login />
      <Test />
      <ReactLog className='App-logo'/>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
