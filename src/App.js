import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './components/BookShelves'
import SearchBooks from './components/SearchBooks'
import NoMatch from './components/NoMatch'

class BooksApp extends Component {
 
  state = {
    books: [] 
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      book.shelf = shelf
      const bookList = this.state.books.filter((e) => e.id !== book.id)
      bookList.push(book)
      this.setState({ books: bookList })
    })
  }

  render() {

    const { books } = this.state

    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <BookShelves 
              books={ books }
              changeShelf={ this.changeShelf }
            />
          )}/>
          <Route exact path='/search' render={() => (
            <SearchBooks
              books={ books }
              changeShelf={ this.changeShelf }
            />
          )}/>
          <Route component={ NoMatch } />
        </Switch>
      </div>
    )
  }
}

export default BooksApp