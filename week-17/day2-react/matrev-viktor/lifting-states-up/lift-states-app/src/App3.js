import {useState} from 'react'
import './App3.css';

export default function App() {

    const [notes, setNotes] = useState('lorem ipsum')
   
   

function handleClick(event){
   
  event.target.nextSibling.classList.remove('content');
  event.target.previousSibling.classList.add('content');
}

function handleClickFirstContent(event){
    event.target.nextSibling.classList.remove('content');
  }


    return(
        <div >
            <div>
               
            </div>
           <div className='main'>
           <Notes notes={notes}/>
            <Note title="Bejegyzés1"  handleClick={handleClickFirstContent} />
           <NoteContent1 />
           <Note title="Bejegyzés2" handleClick={handleClick} />
           <NoteContent2/>
           <Note title="Bejegyzés3" handleClick={handleClick} />
           </div>
          <div className='main2'>
              <Contents/>
          </div>

           <NoteContent3/>
        </div> 
    )
}

function Notes (){

    return(
        <div >
           <h2>Bejegyzések</h2> 
        </div>
    )
}

function Note ({title, handleClick}){
return(
    <button
    className='title'
      type="button"
      onClick={handleClick}
    >
    {title}
    </button>
)
}

function NoteContent1(){
    return (
        <div className='content content-style'>
           
            <p>
                lorem ipsum 1
                <a
               
                href='#' >Szerkesztés</a>
            </p>
        </div>
    )
}

function NoteContent2(){
    return (
        <div className='content content-style'>
            <p>
                lorem ipsum 2 
                <a href='#' >Szerkesztés</a>
            </p>
        </div>
    )
}
function NoteContent3(){
    return (
        <div className='content content-style'>
           
            <p>
                lorem ipsum 3
                <a href='#' >Szerkesztés</a>
            </p>
        </div>
    )
}


function Contents (){
return (
    <div>
        <p>
        jkdosad
    </p>
    <p>
    jkdosad
</p>
<p>
        jkdosad
    </p>  
    </div>
  
)
}






