import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class BookShelves extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {

    const { books, changeShelf } = this.props

    if(!books) {
      return(<div>Loading...</div>)
    }

    const currentlyReading = books.filter((e) => e.shelf === "currentlyReading"),
          wantToRead = books.filter((e) => e.shelf === "wantToRead"),
          read = books.filter(e => e.shelf === 'read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf 
              name='Currently Reading'
              books={ currentlyReading }
              changeShelf={ changeShelf }
            />
            <Shelf 
              name='Want To Read'
              books={ wantToRead }
              changeShelf={ changeShelf}
            />
            <Shelf 
              name='Read'
              books={ read }
              changeShelf={ changeShelf }
            />             
          </div>
        </div>
        <Link 
          to="/search"
          className="open-search"
          >Search books
        </Link>
      </div>
    )
  }
}

export default BookShelves