import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './components/BookShelves'
import SearchBooks from './components/SearchBooks'


class BooksApp extends Component {
 
  state = {
    books: [] 
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {

    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelves 
            books={ books }
          />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchBooks
            books={ books }
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
