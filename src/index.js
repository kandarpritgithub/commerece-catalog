import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Router } from 'react-router-dom';

// let Element=()=>{return(<h1 id="h">Element Component</h1>)}
// let Element1=()=>{return(React.createElement('h1',{id:"h"},'Element1 Component'))}

// let Element2=()=>{return(  <div className='container'>
//                             <h1 className="text-danger"> Hello React </h1>
//                             <h2>Welcome to LRA</h2>
//                             </div>
// )}

// let Element3=()=>{return (React.createElement("div",{className:"container"},
// React.createElement('h1',{className:'text-danger'},'Hello React '),React.createElement('h2',null,'Welcome to My Project')))}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
