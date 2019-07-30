import React from "react";
import Jumbotron from '../Jumbotron';
import API from "../../utils/API";
// import SearchForm from "../../Components/SearchForm"
import Navbar from "../Navbar"
import ResultCard from "../ResultCard";


class Home extends React.Component {


  state = {
    books: [],
    results: [],
    title: "",
    author: ""
  }


  //handleFormSubmit on search page


  handleFormSubmit = event => {
    event.preventDefault();
    console.log("below", this.state.title)
    API.getBook(this.state.title)

      .then(res => {
        // if (res.data.status === "error") {
        //   throw new Error(res.data);
        // }
        console.log(res.data)
        this.setState({ results: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err }));
  };


    //handleInputChange on search page

  handleInputChange = event => {
     const {name, value } = event.target;
    this.setState({
      [name]: value
    })};

  saveBook = (id) => {
   
console.log(id)
    const newBookArray = this.state.results.filter((book) => book.id ===id)
    console.log(newBookArray)
    const newBooksArray = this.state.results.filter((book) => book.id !==id)
    const Book = {
      title:newBookArray[0].volumeInfo.title,
      image:newBookArray[0].volumeInfo.imageLinks.thumbnail,
      authors:newBookArray[0].volumeInfo.authors,
      description:newBookArray[0].volumeInfo.description,
      id:newBookArray[0].id,
      link:newBookArray[0].volumeInfo.infoLink
    }
    API.saveBook(Book)
    .then(response => {
      console.log(response);
      this.setState({
        results:newBooksArray
      })
    })
  }
   
  

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
          <h3>Book Search</h3>
          <p>{this.state.title}</p>
          <form className="form">
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <button style={{ marginLeft: 10 }} onClick={this.handleFormSubmit}>Submit</button>
          </form>
          {this.state.results.map((book, i) => (
            <ResultCard
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
            saveBook={this.saveBook}
            index={i}
            id={book.id}
            />
          ))}

      </div>
    )
  }


}


export default Home;

