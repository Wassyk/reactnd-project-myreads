import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
class SearchBook extends React.Component {

    state = {
        Books: []
    }



    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    Books: books
                }))
            })

    }

    search = (value) => {
        BooksAPI.update(value)
        .then((books) => {
            this.setState(() => ({
                Books: books
            }))
        })
    }

    render() {

        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.props.backPage}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author"
                            onChange={(event) => this.search(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.Books.length === 0 
                        ? <p>No Result</p>
                        : this.state.Books.map((book) => (<li>
                            <Book Obj={book} />
                        </li>))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook