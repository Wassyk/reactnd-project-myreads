import React from 'react';

class Book extends React.Component {

    render() {
 const Obj= this.props.Obj;
 const img='url('+Obj.imageLinks.thumbnail+')';
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: img }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{Obj.title}</div>
                <div className="book-authors">{Obj.authors ===undefined
                ? <p></p>
                : Obj.authors.map((auth)=>(<p>{auth}</p>))}</div>
            </div>
        )
    }
}

export default Book;