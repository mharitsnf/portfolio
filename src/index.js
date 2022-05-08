import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './routes/home';
import Projects from './routes/projects';
import Resume from './routes/resume';
import Contact from './routes/contact';

import './fonts/Print-Clearly/PrintBold.otf';
import './fonts/Print-Clearly/PrintClearly.otf';
import './fonts/Print-Clearly/PrintDashed.otf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
