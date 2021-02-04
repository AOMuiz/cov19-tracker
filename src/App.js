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
            <Route path='/cov19-tracker' exact component={CountryTable} />
            <Route path='/' exact>
              <Redirect to='/cov19-tracker'/>
            </Route>
            <Route path='/cov19-tracker/news'  component={CovidNews} />
            <Route path='/cov19-tracker/vaccineNews' component={VaccineNews} />
            <Route path='/cov19-tracker/covidMap' component={Maps} />
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
