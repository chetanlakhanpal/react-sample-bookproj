import React, { Component } from "react";
import BookShelfContext from "./BookShelfContext"

class BookShelfChanger extends Component {
  render = () => {
    return (
    <div className="book-shelf-changer">
      <BookShelfContext.Consumer>
        {({types, onBookShelfChange}) => (
        <select onChange={(event) => onBookShelfChange(event.target.value, this.props.book)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading" selected={this.props.book.shelf === 'currentlyReading'}>Currently Reading</option>
          <option value="wantToRead" selected={this.props.book.shelf === 'wantToRead'}>Want to Read</option>
          <option value="read" selected={this.props.book.shelf === 'read'}>Read</option>
        </select>
        )}
      </BookShelfContext.Consumer>
    </div>)
  }
}

export default BookShelfChanger