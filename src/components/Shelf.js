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

          </ol>
          </div>
        </div>
      </div>  
    )
  }
}

export default Shelf 