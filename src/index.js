import React from "react";
import  { createRoot }  from "react-dom/client";
import App from './components/App';
import './styles/global.scss';

const main = document.getElementById('app');
const root = createRoot(main);
root.render(<App /> );


