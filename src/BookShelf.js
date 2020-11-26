import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {


    render() {

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.Shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {(this.props.Books=== undefined) ||(this.props.Books.error==='empty query')
                         ?<p> No result found</p>
                         : this.props.Books.map((item)=>(<li><Book updateBook={this.props.updateBook} Obj={item}/></li>))
                       }       
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;