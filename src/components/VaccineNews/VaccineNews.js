import React, { Component } from "react";
import "./VaccineNews.css";
class VaccineNews extends Component {
  state = {
    articles: [],
    loading: false,
    apiError: "",
  };

  getVaccineNews = async () => {
    const response = await fetch(`https://disease.sh/v3/covid-19/vaccine`);
    const json = await response.json();
    console.log(json);
    return json;
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await this.getVaccineNews();
      console.log(response);
      this.setState({
        articles: response.data,
        laoding: true,
      });
    } catch (error) {
      this.setState({
        apiError: "There was an error fecthing News. Please try again.",
      });
    }
    this.setState({ loading: false });
  }

  // https://disease.sh/v3/covid-19/vaccine
  render() {
    return (
      <div className='covidVaccine'>
        <div className='covidheadline'>
          <h1 className='text-center'>COVID-19 vaccine tracker</h1>
          <img
            src='https://www.raps.org/RAPS/media/Education-Events/2020-04-COVID-19-Vaccine-Tracker-500x300-(1).jpg?ext=.jpg?maxsidesize=100'
            alt='vaccine'
          />
          <h4 className='introduction'>
            Researchers worldwide are working around the clock to find a vaccine
            against SARS-CoV-2, the virus causing the COVID-19 pandemic. Experts
            estimate that a fast-tracked vaccine development process could speed
            a successful candidate to market in approximately 12-18 months – if
            the process goes smoothly from conception to market availability.
          </h4>
          <p>
            To date, just one coronavirus vaccine has been approved. Sputnik V –
            formerly known as Gam-COVID-Vac and developed by the Gamaleya
            Research Institute in Moscow – was approved by the Ministry of
            Health of the Russian Federation on 11 August. Experts have raised
            considerable concern about the vaccine’s safety and efficacy given
            it has not yet entered Phase 3 clinical trials.
          </p>
          <p>
            This tracker lists COVID-19 vaccine candidates currently in Phase
            1-3 trials, as well as major candidates in pre-clinical stages of
            development and research. To reveal in-depth information about each
            candidate, select the “More Information” button below.
          </p>

        </div>

        {this.state.loading && (
          <div>
            <h4 style={{ textAlign: "center" }}>Loading Latest articles...</h4>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
        )}

        {this.state.apiError === "" ? (
          <main>
            <div className="vaccine-head">
              <h3>Vaccinations in status: All Vaccines</h3>
              <h3>Total Candidates: "51"</h3>
            </div>

            <div className="vaccine-container">
            {this.state.articles.map((articles, index) => (
              <div className='article' key={index + articles.candidate}>
                <div className='wrapper'>
                  <div className='wrapperText'>
                    <h3>
                      Candidate : {articles.candidate}
                    </h3>
                    <p id='author'>
                      Mechanism: {articles.mechanism}
                    </p>
                    <p className="phase">Phase: <span>{articles.trialPhase}</span></p>
                  <h3 className="institute">Institutions: {articles.institutions.join(", ")}</h3>
                  </div>
                </div>
                <div className="card-footer"><a href="https://www.raps.org/news-and-articles/news-articles/2020/3/covid-19-vaccine-tracker" className="card-footer-item">More Information</a></div>
              </div>
            ))}
          </div>
          </main>
         
        ) : (
          <h4 className='error'>Something went wrong: {this.state.apiError}</h4>
        )}

      </div>
    );
  }
}

export default VaccineNews;
