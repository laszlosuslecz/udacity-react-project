import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  state = {
    query: '',
    searchResults: []
  }

  getSearchResults() {
    if (this.state.query.length > 0) {
      BooksAPI.search(this.state.query, 20).then(results => 
        results ? this.setState({ searchResults: results }) : []
      )
    } 
  }

  updateQuery = (e) => {
    e.preventDefault()
    this.setState({ query: e.target.value })
    this.getSearchResults()
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {

    const { books, changeShelf } = this.props
    const { query, searchResults } = this.state

    const getShelf = (books, id) => {
      const book = books.find(b => b.id === id)
      return (book && book.shelf) ? book.shelf : 'none'
    }

    if(!searchResults) {
      return(<div>Loading...</div>)
    }

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search" 
              >Close Search Page
            </Link>  
            <div className="search-books-input-wrapper">           
              <input 
                type="text" 
                placeholder="Search by title or author"
                value={ query }
                onChange={(event) => this.updateQuery(event)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchResults.map((e) => (
              <li key={e.id}>
                <div className="book">
                  <div className="book-top">
                    {e.imageLinks ? 
                    (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${e.imageLinks.thumbnail})`}}></div>) :
                    (<div className="book-cover">No cover image</div>)
                    }  
                      <div className="book-shelf-changer">
                        <select
                          defaultValue={getShelf(books, e.id)}
                          onChange={(event) => changeShelf(e, event.target.value)}
                        >
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{e.title}</div>
                    <div className="book-authors">{e.author}</div>
                </div>
              </li>
              ))}
            </ol>
          </div>
        </div>
    )
  }
}

export default SearchBooks