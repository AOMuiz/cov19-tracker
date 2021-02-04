import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import CountryTable from "./components/CasePerCountry/index";
import CovidNews from "./components/CovidNews/Latestnews";
import Maps from "./components/Map/Map";
import VaccineNews from "./components/VaccineNews/VaccineNews";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <Redirect to='/Home' />
            </Route>
            <Route path='/Home' exact component={CountryTable} />
            <Route path='/News' exact component={CovidNews} />
            <Route path='/VaccineNews' exact component={VaccineNews} />
            <Route path='/CovidMap' exact component={Maps} />
          </Switch>
          <div class="footer">
            <p>Copyright &copy; 2021 <a href="https://github.com/AOMuiz">AOMuiz</a></p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
