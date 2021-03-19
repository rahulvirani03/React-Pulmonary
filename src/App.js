import React, { Component } from "react";
import "./App.css";
import CovidApp from "./components/CovidApp";
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Header from "./components/Header";
import Diagnosis from "./components/Diagnosis";
import GuidelineCard from "./components/GuidelineCard";
import VaccinationTable from "./components/VaccinationTable";
import Main from "./components/Main"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <Route exact path="/">
            <Redirect exact to="/Home"/>
          </Route>   
          <Route path="/Home" component={CovidApp}/>
          <Route path="/Guidelines" component={GuidelineCard}/>
          <Route path="/Vaccination" component={VaccinationTable}/>
          <Route path="/Diagnosis" component={Diagnosis}/>
        </Router>
      </div>
    );
  }
}

export default App;
