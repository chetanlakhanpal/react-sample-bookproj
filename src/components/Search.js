import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'
import Book from "./Book";

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      books: [],
      searching: false
    }
  }

  showBooks = (value) => {
    if(value){
      this.setState({searching: true, query: value})
      search(value).then((data) => {
        if(Array.isArray(data)){
         this.checkIfAlreadyinShelf(data)
        }else{
          this.setState({books: [], searching: false})
        }
      })
    }else{
      this.setState({books: [], searching: false, query: value})
    }
  }

  checkIfAlreadyinShelf = (data) => {
    const books = data.map(data => {
      if(data.imageLinks === undefined){
        data.imageLinks = {
          thumbnail: ''
        }
      }
      console.log(this.props.bookIds[data.id])
      if(this.props.bookIds[data.id] !== undefined){
        data.shelf = this.props.bookIds[data.id]
      }else{
        data.shelf = 'none'
      }
      return data
    })
    this.setState({books: books, searching: false})
  }

  render = () => {
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input autoFocus={true} type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.showBooks(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {!this.state.books.length && !this.state.searching && (<p>No books to display.</p>)}
          {!this.state.books.length && this.state.searching && (<p>Searching...</p>)}
          {this.state.books && (this.state.books.map(data => (
            <Book key={data.id} data={data} />
          ) ) )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search