import React from "react";
import Jumbotron from "../Jumbotron"
import Navbar from "../Navbar";


class Saved extends React.Component {

  // //information we need from API

  // items.volumeInfo.title
  // items.volumeInfo.authors
  // items.volumeInfo.description
  // items.volumeInfo.previewLink
  // items.volumeInfo.imageLinks.thumbnail




  render() {
    return (
        <div>
          <Navbar />
            <Jumbotron />
        </div>
    )
}


}

export default Saved;