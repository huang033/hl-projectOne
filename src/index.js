import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import "antd/dist/antd.css";
import * as antd from 'antd' 
//App组件，组件要求大写字母开头
// import HelloWorld from './components/helloworld/helloworld.jsx'
import Home from './components/home/index.jsx'

// ReactDOM.render(<HelloWorld />, document.getElementById('root'))
// ReactDOM.render(<Home />, document.getElementById('root'))

ReactDOM.render(
    <Home />,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render((
//   <div>
//     helloworld1111111111<p></p>
//     <helloworld name="React"/>
//   </div>
//   ),document.getElementById('helloworld'));

reportWebVitals()
