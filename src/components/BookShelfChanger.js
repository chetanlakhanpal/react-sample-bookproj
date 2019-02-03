import React, { Component } from "react";
import BookShelfContext from "./BookShelfContext"

class BookShelfChanger extends Component {
  render = () => {
    return (
    <div className="book-shelf-changer">
      <BookShelfContext.Consumer>
        {({types, onBookShelfChange}) => (
        <select value={this.props.book.shelf} onChange={(event) => onBookShelfChange(event.target.value, this.props.book)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
        )}
      </BookShelfContext.Consumer>
    </div>)
  }
}

export default BookShelfChanger