import React from 'react';
import ReactDOM from 'react-dom/client';
/* import App from './App'; */
import 'bootstrap/dist/css/bootstrap.css';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from './layout/Login';
import FAQ from './layout/FAQ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Main /> */}
    {/*  <App /> */}
    {/* <Footer /> */}
    {/* <FAQ /> */}
    <Login />
  </>
);

