import React, {Component} from 'react';
import Book from './Book';



class BookList extends Component{

    state = {
        books: [
            {
                title: 'Avatar',
                isbn : 'abc123'
            },
            {
                title: 'Sapiens',
                isbn : 'abc456'
            },
            {
                title: 'Star Wars',
                isbn : 'abc789'
            },
        ]
    }

    constructor(){
        super();
        console.log(1);
    }

    componentWillMount(){
        console.log(2);
    }

   
    componentDidMount(){
        console.log(4)
    }

    render(){
        console.log(3);
        return (
            <div>
              {this.state.books.map((book, index)=> (<Book book={book} key={index}/>) )}
            </div>
        );
    }

}

export default BookList;
