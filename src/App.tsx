import { Button } from 'antd';
import './App.css';
import { ReactComponent as Log } from './style/svg/a.svg' // svg图片
import './style/logo.scss'
// import Login from './views/login/login'
import Login from '@V/login'
import Test from '@V/test_index/test'
import DynamicAntdTheme from 'dynamic-antd-theme'; // 换肤

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Test />
      <Log className='App-logo'/>
      <Button type="primary">Button</Button>
      <div className='theme-container'>
        <span>Change antd theme: </span>
        <DynamicAntdTheme />
      </div> */}
    </div>
  );
}

export default App;
