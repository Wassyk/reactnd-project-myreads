import React from 'react';

class Book extends React.Component {



    render() {
const Obj= this.props.Obj;

 if(this.props.myBook!==undefined){
    Obj.shelf='none'
 this.props.myBook.map((mb)=>(mb.id===Obj.id ?Obj.shelf=mb.shelf :{}))}
 let img;
 Obj.imageLinks===undefined
 ? img=''
 :img='url('+Obj.imageLinks.thumbnail+')';
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: img }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={Obj.shelf} onChange={(e)=>{this.props.updateBook(Obj,e.target.value)}}>
                            <option value="move" disabled> Move to...</option>
                            <option value="currentlyReading"   disabled={this.props.Obj.shelf==='currentlyReading' ?true :null} >Currently Reading</option>
                            <option value="wantToRead"  disabled={this.props.Obj.shelf==='wantToRead' ?true :null} >Want to Read</option>
                            <option value="read"  disabled={this.props.Obj.shelf==='read' ?true :null} >Read</option>
                            <option value="none" disabled={this.props.Obj.shelf==='none' ?true :null} >None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{Obj.title}</div>
                <div className="book-authors">{Obj.authors ===undefined
                ? <p></p>
                : Obj.authors.map((auth)=>(<p key={auth}>{auth}</p>))}</div>
            </div>
        )
    }
}

export default Book;