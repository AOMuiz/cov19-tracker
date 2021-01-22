import React, { Component } from "react";

import World from "../WorldCases/World";
import { SearchBox } from "./search-box.component";
import Table from "./Table";
import "./Table.css";
import Pagination from "./Pagination";

class CasePerCountry extends Component {
  state = {
    cases: [],
    searchQuery: "",
    postsPerPage: 23,
    currentPage: 1,
    loading: false,
    apiError: "",
  };

  getCases = async () => {
    const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const json = await response.json();
    return json;
  };

  setCurrentPage(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    });
  }

  async componentDidMount() {
    try {
      this.setState({
        loading: true,
      });
      const response = await this.getCases();
      console.log(response);
      this.setState({
        cases: response,
      });
    } catch (error) {
      this.setState({
        apiError: "There was an error Fetching Cases. Please try again.",
      });
    }
    this.setState({ loading: false });
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    //destructure
    const { cases, searchQuery } = this.state;
    const filteredCountries = cases.filter((countries) =>
      countries.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // getCurrentPost
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentCases = filteredCountries.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    //Change Page
    const paginate = (pageNumber) => this.setCurrentPage(pageNumber);

    const paginatedCases = currentCases.map((currentCase) => currentCase);
    // console.log(paginatedCases);

    return (
      <div className='App'>
        <main>
          {/* <iframe
            title='covid map'
            src='https://public.domo.com/cards/bWxVg'
            width='90%'
            height='200'
            marginHeight='0'
            marginWidth='0'
            frameBorder='0'></iframe> */}
          <World />
          <SearchBox
            placeholder='search countries'
            handleChange={this.handleChange}
          />
          {this.state.loading && (
            <h4 style={{ color: "white", textAlign: "center" }}>
              Loading Latest Cases per Country...
            </h4>
          )}

          {this.state.apiError === "" ? (
            <Table filteredCountries={paginatedCases} />
          ) : (
            <h4 className='error'>
              Something went wrong: {this.state.apiError}
            </h4>
          )}
          <Pagination
            postsPerPage={this.state.postsPerPage}
            // totalPosts={this.state.cases.length}
            totalPosts={filteredCountries.length}
            paginate={paginate}
          />
        </main>
      </div>
    );
  }
}

export default CasePerCountry;
