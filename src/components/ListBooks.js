import React, { Component } from "react";
import BookShelf from "./Bookshelf";
import * as API from '../../src/BooksAPI'
import BookShelfContext from "./BookShelfContext";

class ListBooks extends Component {

  constructor(props){
    super(props)
    this.state = {
      books: {
        currentlyReading: [],
        read: [],
        wantToRead: []
      }
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

  onBookShelfChange = (newShelf, book) => {
    this.setState((state) => {
      const books = state.books
      const oldShelf = book.shelf
      books[oldShelf] = books[oldShelf].filter(value => (value.id !== book.id))
      book.shelf = newShelf
      books[newShelf].push(book)
       return {books: books}
    })
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
            <BookShelfContext.Provider value={{onBookShelfChange: this.onBookShelfChange, types: shelf}}>
            {Object.keys(shelf).map((data) => (
                <BookShelf key={data} type={data} title={shelf[data]} info={this.state.books[data]}/>
                )
                )}
            </BookShelfContext.Provider>
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>)
  }
}

export default ListBooks