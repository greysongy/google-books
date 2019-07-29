// models 
    // book.js

    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;
    
    const bookSchema = new Schema({
      title: { type: String, required: true },
      author: { type: String, required: true },
      description: { type: String, required: true },
      previewLink: { type: String, required: false },
      thumbnail: { type: String, required: false },
    
    });
    
    const Book = mongoose.model("Book", bookSchema);
    
    module.exports = Book;