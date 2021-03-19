import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom';
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App/>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> 
    <script src="//geodata.solutions/includes/statecity.js"></script>
  </Router>,
  document.getElementById('root')
);
