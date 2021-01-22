import React, { Component } from "react";
import "./latestnews.css";

class LatestNews extends Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "",
  };

  getArticles = async () => {
    const response = await fetch(
      `https://api.currentsapi.services/v1/search?keywords=Coronavirus&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    return json;
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const response = await this.getArticles();
      this.setState({
        articles: response.news,
        laoding: true,
      });
    } catch (error) {
      this.setState({
        apiError: "There was an error fecthing News. Please try again.",
      });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className='App'>
        <div className='latestheadline'>
          <h1 className='text-center'>Covid-19 Latest Headline</h1>
        </div>

        {this.state.loading && (
          <div>
            <h4 style={{ textAlign: "center" }}>Loading Latest articles...</h4>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>        
        )}



        {this.state.apiError === "" ? (
          <div className='App-header cards'>
            {this.state.articles.map((articles, index) => (
              <div key={index + articles.id} className='container'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='single-blog'>
                      <p className='blog-meta'>
                        By : {articles.author}
                        <span>
                          {articles.published.split(" ")[0]} -{" "}
                          {articles.published.split(" ")[1]}
                        </span>
                      </p>
                      <img
                        src={
                          articles.image === "None"
                            ? "https://worldofspectrum.org/addons/shared_addons/themes/bootstrap/img/image-not-available.png"
                            : articles.image
                        }
                        alt='Not Available'
                      />
                      <h2>
                        <a href={articles.url}>{articles.title}</a>
                      </h2>
                      <p className='blog-text'>{articles.description}</p>
                      <p>
                        <a href={articles.url} className='read-more-btn'>
                          Read More
                        </a>
                        <span className='source'>
                          <a href={articles.url}>
                            Category: {articles.category}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h4 className='error'>Something went wrong: {this.state.apiError}</h4>
        )}
      </div>
    );
  }
}

export default LatestNews;
