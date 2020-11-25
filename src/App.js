import React from 'react'
import {Link, Route} from 'react-router-dom'
import './App.css'
import SearchBook from './SearchBook'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    MyBooks:[]
  }

  componentDidMount() {
    BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                MyBooks: books
            }))
        })
}

  render() {
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
            <BookShelf Shelf='Currently reading' Books={this.state.MyBooks.filter((book)=> book.shelf==='currentlyReading')} />
            <BookShelf Shelf='Want to read' Books={this.state.MyBooks.filter((book)=> book.shelf==='wantToRead')}/>
            <BookShelf Shelf='Read' Books={this.state.MyBooks.filter((book)=> book.shelf==='read')}/>

            </div>
          </div>
          <div className="open-search">
          {console.log(this.state.MyBooks)}
            <Link to='/search'><button></button></Link>
          </div>
        </div> 
        )} />
        

      </div>
    )
  }
}

export default BooksApp
