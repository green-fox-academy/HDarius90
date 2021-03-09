import React from 'react';


const person = (props) =>{


    return (
        <div>
        <p>Nevem {props.name}, korom {props.age}</p>
        <p>{props.children}</p> 
        </div>

        //props.children, ami az App.js-ben a Person nyitó és zártag között van
        //ebben az esetben: hobbim az informatika
    
    )}


export default person;


//return <p>Üdvözlet a Person komponensből! Véletlen szám 1 és 6 között: {Math.floor(Math.random() * 6 + 1)}</p>
