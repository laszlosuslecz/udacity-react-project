import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
 
  state = {
    books: [] 
  }

  render() {
    return (
      <div className="app">
        
        <BookShelves />

        <SearchBooks />
      </div>
    )
  }
}

export default BooksApp
