import React, { Component } from "react";
import { Link } from 'react-router-dom'
import BookShelf from "./Bookshelf";

class ListBooks extends Component {
  constructor(props){
    super(props)
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
            {Object.keys(shelf).map((data) => (
              <BookShelf key={data} type={data} title={shelf[data]} info={this.props.books[data]}/>
              )
            )}
          </div>
        </div>
        <div className="open-search">
          <Link 
          to='/search'
          className="open-search"
          >
          Add a book
          </Link>
        </div> 
      </div>)
  }
}

export default ListBooks