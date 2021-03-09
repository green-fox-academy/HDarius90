import {useState} from 'react';
import './ButtonComp.css'

export default function App (){
    const [isActive, setActive] = useState(false);

    return(
        <div className='border'>
            
            <AppState isActive={isActive} setActive={setActive}/>
            <BoxComponent isActive={isActive}/>
            <ButtonComponent isActive={isActive} setActive={setActive}/>
        </div>
    )
}


function AppState({isActive}){
    return (
        <h3>
            {isActive ? 'aktiv' : 'inaktiv'}
        </h3>
        )
}

function BoxComponent({isActive}){
    return(
        <div 
        className='box p-2 m-5 rounded'
        style={{
            backgroundColor: isActive ? 'green' : 'red'
        }}
        >
        <p>{isActive ? 'Aktiv' : 'Inaktív'}</p>
        </div>
    )
}

function ButtonComponent({isActive, setActive}){
    return (
        <div>
            <button 
            className='btn btn-success'
            type='button'
            disabled= {isActive}
            onClick={()=>{setActive(true)}}
            >
            Aktiválás

            </button>
            <button
            className='btn btn-danger'
            tpye='button'
            disabled= {!isActive}
            onClick={()=>{setActive(false)}}
            >
            Deaktiválás
            </button>
        </div>
    )
}
