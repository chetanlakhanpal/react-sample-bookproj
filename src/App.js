import React from 'react'
import './App.css'
import Search from './components/Search'
import ListBooks from './components/ListBooks'
import { BrowserRouter, Route } from 'react-router-dom'


class BooksApp extends React.Component {

  constructor () {
    super()
    
    this.state = {
      showSearchPage: false
    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
        <Route exact path='/' component={ListBooks}>
        </Route>
        <Route path='/search' component={Search}>
        </Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
