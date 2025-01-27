import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  inputMovie = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={(event => (
                    this.inputMovie(event)
                  ))}
                />
              </div>
            </div>
          </div>
          <MoviesList
            movies={moviesFromServer.filter(movie => movie.title.toLowerCase()
              .includes(this.state.query.toLowerCase())
              || movie.description.toLowerCase()
                .includes(this.state.query.toLowerCase()))}
          />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
