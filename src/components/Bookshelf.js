import React, { Component } from "react";
import Book from "./Book"

class BookShelf extends Component {
  render = () => {
    return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{this.props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {this.props.info && (this.props.info.map((data, index) => (
          <Book key={data.id}  data={data}/>
        )))}
      </ol>
    </div>
  </div>
  )
  }
}

export default BookShelf