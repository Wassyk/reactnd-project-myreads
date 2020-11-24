import React from 'react'
import {Link, Route} from 'react-router-dom'
import './App.css'
import SearchBook from './SearchBook'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    const displayTitle = ['Currently reading', 'Want to read', 'Read']
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBook backPage={() => this.setState({ showSearchPage: false })} />
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {displayTitle.map((item) => (<BookShelf Shelf={item} />))}

            </div>
          </div>
          <div className="open-search">
            <Link to='/search'><button></button></Link>
          </div>
        </div>
        )} />
        

      </div>
    )
  }
}

export default BooksApp
