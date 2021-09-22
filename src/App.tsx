import React from 'react';
import { Button, Spin } from 'antd';
import './App.css';
import { ReactComponent as ReactLog } from './style/svg/a.svg'
import './style/logo.scss'
import Login from './views/login/login'
import Test from './views/test_index/test'
import DynamicAntdTheme from 'dynamic-antd-theme';
import dark from 'antd/dist/antd.dark.less'
import { useState } from 'react'

// function addSkin(params: string) {
//   let head = document.getElementsByTagName('head')[0]
//   const getLink = head.getElementsByTagName('link')
//   // 查找style是否存在，存在的话就删除dom
//   if (getLink.length > 0) {
//     for (let i = 0; i < getLink.length; i++) {
//       if (getLink[i].getAttribute('data-type') === 'theme') {
//         getLink[i].remove()
//       }
//     }
//   }
//   // 查找script是否存在
//   const getScript = head.getElementsByTagName('script')
//   if (getScript.length > 0) {
//     for (let i = 0; i < getScript.length; i++) {
//       if (getScript[i].getAttribute('data-type') === 'theme') {
//         getScript[i].remove()
//       }
//     }
//   }
//   let link = document.createElement('link')
//   link.dataset.type = 'theme'
//   link.href = params
//   link.rel = 'stylesheet'
//   link.type = 'text/css'
//   head.appendChild(link)
//   let script = document.createElement('script')
//   script.type = 'text/javascript'
//   script.dataset.type = 'theme'
//   script.src = 'https://cdn.bootcdn.net/ajax/libs/less.js/4.1.1/less.js'
//   head.appendChild(script) 
//   // 最后加入对应的主题和加载的css文件
//   // let styleDom = document.createElement('style')
//   // styleDom.dataset.type = 'theme'
//   // styleDom.innerHTML = params
//   // head.appendChild(styleDom)
// }
function App() {
  console.log('1111',dark);
  
  return (
    <div className="App">
      <Login />
      <Test />
      <ReactLog className='App-logo'/>
      <Button type="primary">Button</Button>
      <div className='theme-container'>
        <span>Change antd theme: </span>
        <DynamicAntdTheme />
      </div>
    </div>
  );
}

export default App;
