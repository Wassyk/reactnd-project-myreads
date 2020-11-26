import React from 'react';

class Book extends React.Component {



    render() {
 const Obj= this.props.Obj;
 let img;
 Obj.imageLinks===undefined
 ? img=''
 :img='url('+Obj.imageLinks.thumbnail+')';
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: img }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e)=>{this.props.updateBook(Obj,e.target.value)}}>
                            <option value="move" > Move to...</option>
                            <option value="currentlyReading"  selected={this.props.Obj.shelf==='currentlyReading' ?true :null} disabled={this.props.Obj.shelf==='currentlyReading' ?true :null} >Currently Reading</option>
                            <option value="wantToRead" selected={this.props.Obj.shelf==='wantToRead' ?true :null} disabled={this.props.Obj.shelf==='wantToRead' ?true :null} >Want to Read</option>
                            <option value="read"  selected={this.props.Obj.shelf==='read' ?true :null} disabled={this.props.Obj.shelf==='read' ?true :null} >Read</option>
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