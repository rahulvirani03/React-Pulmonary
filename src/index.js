import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, HashRouter} from 'react-router-dom';
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App/>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
