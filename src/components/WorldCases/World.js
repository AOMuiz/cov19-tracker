import React, { Component } from "react";
import "./World.css";
class World extends Component {
  state = {
    Worldcases: [],
    loading: false,
    apiError: "",
  };

  getCases = async () => {
    const response = await fetch(`https://disease.sh/v3/covid-19/all`);
    const json = await response.json();
    return json;
  };

  async componentDidMount() {
    try {
      this.setState({
        loading: true,
      });
      const response = await this.getCases();
      console.log(response);
      this.setState({
        Worldcases: response,
      });
    } catch (error) {
      this.setState({
        apiError: "There was an error Fetching Cases. Please try again.",
      });
    }
    this.setState({ loading: false });
  }

  render() {
    //destructure
    const { cases, deaths, recovered } = this.state.Worldcases;

    return (
      <div>
      <h3 class="w-text">World Cases</h3>
      <div className='section group'>
        <h4 className='col col-1'>Total Cases: {new Intl.NumberFormat().format(cases)}</h4>
        <h4 className='col col-2'>Total Deaths: {new Intl.NumberFormat().format(deaths)}</h4>
        <h4 className='col col-3'>Total Recovered: {new Intl.NumberFormat().format(recovered)}</h4>
      </div>
      </div>
      
    );
  }
}

export default World;
