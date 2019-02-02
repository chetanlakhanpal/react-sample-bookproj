import React from 'react'
import './App.css'
import Search from './components/Search'
import ListBooks from './components/ListBooks';

class BooksApp extends React.Component {

  constructor () {
    super()
    
    this.state = {
      showSearchPage: false
    }
  }
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? <Search /> : <ListBooks />}
      </div>
    )
  }
}

export default BooksApp