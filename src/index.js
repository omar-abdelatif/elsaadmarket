import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app';
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import './Components/index.css';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
