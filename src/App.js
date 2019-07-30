import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Jumbotron from './components/Jumbotron';
import Home from "../src/Components/pages/Home";
import Saved from "../src/Components/pages/Saved";
import './App.css';
// import SearchForm from '../src/Components/SearchForm';
// import ResultsField from './components/ResultsField';
// import ResultCard from './components/ResultCard';

function App() {

    return (
      <Router>
      <div>


            {/* <Navbar> */}
              <Route exact path="/" component={Home}/>
              <Route exact path="/saved" component={Saved} />
            {/* </Navbar> */}

      </div >
      </Router>
    );

  }


export default App;
