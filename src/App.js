import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Search from './components/Search'
import ListBooks from './components/ListBooks'
import BookShelfContext from "../src/components/BookShelfContext";
import * as API from '../src/BooksAPI'


class BooksApp extends React.Component {

  constructor () {
    super()
    
    this.state = {
      showSearchPage: false,
      books: {
        currentlyReading: [],
        read: [],
        wantToRead: [],
        ids: {}
      }
    }
  }

  componentDidMount = () => {
    API.getAll().then((books) => {
      this.createBookShelf(books)
    })
  }

  createBookShelf = (books) => {
    const booksData = {currentlyReading: [],  read: [], wantToRead: [], ids: {}}
    books.forEach((data) => {
      booksData[data.shelf].push(data)
      booksData.ids[data.id] = data.shelf
    })
    this.setState({books: booksData})
  }

  onBookShelfChange = (newShelf, book) => {
    API.update(book, newShelf).then((data) => {
      this.setState((state) => {
        const books = state.books
        if(book.shelf !== 'none'){
          const oldShelf = book.shelf
          books[oldShelf] = books[oldShelf].filter(value => (value.id !== book.id))
          books.ids[book.id] = newShelf
        }
        if(newShelf !== 'none'){
          book.shelf = newShelf
          books[newShelf].push(book)
        }  
        else{
          delete books.ids[book.id]
        }
        return {books: books}
      })
    })
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
        <Route exact path='/' render={() => (
          <BookShelfContext.Provider value={{onBookShelfChange: this.onBookShelfChange}}>
            <ListBooks books={this.state.books}/>
          </BookShelfContext.Provider>
        )}>
        </Route>
        <Route path='/search' render={() => (
         <BookShelfContext.Provider value={{onBookShelfChange: this.onBookShelfChange}}>
          <Search bookIds={this.state.books.ids}/>
          </BookShelfContext.Provider>
          )}>
        </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
