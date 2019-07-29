// get request for JSON book data // this goes inside of API.js inside of SRC/utils

export default {

    getBook: function(book) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
      }

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

  //information we need from API

  items.volumeInfo.title
  items.volumeInfo.authors
  items.volumeInfo.description
  items.volumeInfo.previewLink
  items.volumeInfo.imageLinks.thumbnail


  //handleInputChange on search page

  handleInputChange = event => {
      this.setState({search: event.target.value})
  }



