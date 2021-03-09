import React, {Component} from 'react';


class Book extends Component{

state = {
    a1: true,
    a2: [],
    selected : null
}

onClickHandler = (title) =>{
    this.setState({
        selected: title //megváltoztatjuk a selected értékét a title.re
    }, () =>{
        console.log(this.state.selected)
    }
    );
}
//a sima function nem lát ki a scoopejából, ugyh benne nem tudunk a this-szel hivatkozni
onClickHandler2(){
    console.log('../')
}

    render(){

const {title, isbn} = this.props.book;

//const{name, age} = this.props.person; (másik video)

        return ( 
    <div> 
        <h2 onClick={ () => this.onClickHandler(title)}>{title}</h2>
        <p>{isbn}</p>
     </div>
    );
    }  
}

export default Book;