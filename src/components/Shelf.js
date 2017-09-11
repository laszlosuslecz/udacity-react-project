import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Shelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {

    const { books, changeShelf, name } = this.props

    return (
      
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf">{ name }</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((e) => (
              <li key={e.id}>

                <div className="book">
                  <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${e.imageLinks.thumbnail})`}}></div>
                  <div className="book-shelf-changer">
                    <select value={e.shelf} onChange={(event) => changeShelf(e, event.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                  </div>
                  <div className="book-title">{e.title}</div>
                  <div className="book-authors">{e.authors}</div>
                </div>

              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>  
    )
  }
}

export default Shelf 