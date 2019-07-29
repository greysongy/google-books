import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Jumbotron from './components/Jumbotron';
import Home from "./components/pages/Home";
import Saved from "./Components/pages/Saved";
import './App.css';
import SearchForm from './components/SearchForm';
import ResultsField from './components/ResultsField';
import ResultCard from './components/ResultCard';

class App extends Component {
  handleFormSubmit() {
    //TODO
  }

  render() {
    return (
      <div>

        <Router>
          <div className="container">
            <Navbar>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Home} />
              <Route exact path="/saved" component={Saved} />
            </Navbar>
          </div>
        </Router>

        <Jumbotron>
          Google Books Search
        </Jumbotron>

        <SearchForm
          handleFormSubmit={this.handleFormSubmit}>

        </SearchForm>

        <ResultsField>

        </ResultsField>
      </div >
    );

  }
}

export default App;
