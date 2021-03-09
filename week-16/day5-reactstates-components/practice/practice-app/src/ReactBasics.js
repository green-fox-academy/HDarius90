import React, { useEffect } from 'react';
import {useState} from 'react';


function SzamKiiro({szam}){
    const [minus, setMinus] = useState(0)


useEffect(()=>{
    const frissito = setInterval(()=>{
        setMinus(minus => minus-1)
        console.log('fut az interval')
    }, 2000)
    return () => clearInterval(frissito)
    }
    ,[])



    return (
        <span className='a-szam' onClick={()=> setMinus(minus-1)}>
        A szam (minusszal: {minus}): {szam - minus}
        </span>
    )
}

function FelhazsnaloForm ({HandleLogin: kulsoHandleLogin}){
    const [name, setName] = useState('');

    const HandleLogin = (name) =>{
        setName('');
        kulsoHandleLogin(name)
    }
    return(
        <>
<div>
    Felhasználónév: <input 
        value={name} 
        onChange={(event)=>setName(event.target.value)}
        >
        </input>
</div>
<div>
    A tárolt felhasználónév: {name}
     <button 
     className='button' 
     onClick={()=>kulsoHandleLogin(name)}
     >belépés
     </button>
</div>
        </>
    )
}


export default function ReactBasics(){
    const [counter, setCounter] = useState(12);
    const [loggidInUser, setLoggedInUser] = useState(null)

    const colors = ['orange', 'green', 'pink'];

    return(
        <div className='App'>
<header className='App-header'>
    <div className='form'>
    {loggidInUser && 'Hello,'}
      {loggidInUser 
      ? <> Belépett felhasználó: {loggidInUser}</>
      : <FelhazsnaloForm HandleLogin={setLoggedInUser}/>
}
{colors.map(color=> <div key={color} className='box' style={{background: color}}></div>)}

    </div>
            
        <div>
           <SzamKiiro szam={counter} />  
           
            <span 
            role='button' 
            className='button'
            onClick={()=>setCounter(counter + 1)}
            >
                Növel
            </span>
            <div className='secDiv'>
             
            </div>
            
        </div>

</header>

        

        </div>
    )
}