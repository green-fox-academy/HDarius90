import { useEffect, useState } from "react"



export default function AppCode(){

        const [items, setItems] = useState([]);
        const [tipus, setTipus] =useState('comments');

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/' + tipus)
        .then((res)=>(res.ok? res.json() : []))
        .then((tartalom)=>{
            setItems(tartalom)
        });
}, [tipus]);

    return(
        <div className='container'>
            <div className='row m-5 border p-5'>
             <FormKomponens setTipus={setTipus}/>   
            <ListaKomponens elemek={items}/>
            </div>
        </div>
        
        )
}

const ListaKomponens = ({elemek}) => (
        <ul>
            {elemek.map((elem)=>{
                <li key={elem.id} className='list-group-item'>
                    {elem.body}
                </li>
            })}
        </ul>
    );

function FormKomponens({setTipus}){
    return(
        <form
        className='w-100'
        onSubmit={(event)=>{
            event.preventDefault();
            setTipus(event.target.elements.contentType.value);
        }}
        >
            <select
            name='contentType'
            className='form-control mb-2'
            >
                <options value='comments'>Kommentek</options>
                <options value='posts'>Posztok</options>
            </select>
            <button
            className='btn- btn-primary mb-2'
            type='submit'
            >
                Kiválaszt
            </button>
        </form>
    );
}
