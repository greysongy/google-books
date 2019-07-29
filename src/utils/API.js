// Components
    //utils
        //API.js
        import axios from "axios";

        export default {

        // get request for JSON book data // this goes inside of API.js inside of SRC/utils

          getBook: function(book) {
          return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book);
          },
          // Gets all books
          getAllBooks: function() {
            return axios.get("/api/books");
          },
          // Deletes the book with the given id
          deleteBook: function(id) {
            return axios.delete("/api/books/" + id);
          },
          // Saves a book to the database
          saveBook: function(bookData) {
            return axios.post("/api/books", bookData);
          }
        };

