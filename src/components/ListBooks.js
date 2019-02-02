import React, { Component } from "react";
import BookShelf from "./Bookshelf";
import * as API from '../../src/BooksAPI'

class ListBooks extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: {}
    }
  }

  componentDidMount = () => {
    API.getAll().then((books) => {
      this.createBookShelf(books)
    })
  }

  createBookShelf = (books) => {
    const booksData = {currentlyReading: [],  read: [], wantToRead: []}

    books.forEach((data) => {
      booksData[data.shelf].push(data)
    })

    this.setState({books: booksData})
  }

  render = () => {
    const shelf = {currentlyReading: "Currently Reading", read: "Read", wantToRead: "Want To Read"}
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.keys(shelf).map((data, index) => (
              <BookShelf key={index} title={shelf[data]} info={this.state.books[data]}/>
            )
            )}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>)
  }
}

export default ListBooks