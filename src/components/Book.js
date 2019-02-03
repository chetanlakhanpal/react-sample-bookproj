import React, { Component } from "react";
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

  render = () => {
    return (
      <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.data.imageLinks.thumbnail})`}}></div>
                <BookShelfChanger id={this.props.data.id} book={this.props.data}/>
            </div>
            <div className="book-title">{this.props.data.title}</div>
            <div className="book-authors">{this.props.data.authors}</div>
          </div>
        </li>
    )
  }
}

export default Book