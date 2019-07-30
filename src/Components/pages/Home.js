import React from "react";
import Jumbotron from '../Jumbotron';
import API from "../../utils/API";
import SearchForm from "../../Components/SearchForm"
import Navbar from "../Navbar"


class Home extends React.Component {


    state = {
        books: [],
    }


//handleFormSubmit on search page


handleFormSubmit = event => {
    event.preventDefault();
    API.getBook(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data);
        }
        this.setState({ results: res.data.items.volumeInfo, error: "" });
      })
      .catch(err => this.setState({ error: err }));
  };

  render() {
      return (
          <div>
            <Navbar />
              <Jumbotron />
              <SearchForm />
          </div>
      )
  }


}


export default Home;

