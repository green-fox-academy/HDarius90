import './EventReg.css'

import {useState} from 'react';

export default function EventReg(){

const [inputFields, setInputFields] = useState({
    firstname : '',
    lastname: '',
    password: ''
})

const [submit, setSubmit] = useState(false);

const [result, setResult] = useState({});

const handleChange = ({target: {name, value}}) => setInputFields(inputFields=>({
    ...inputFields,
    [name] : value
  })) 


  
function handleFormSubmit(e) {
    e.preventDefault();


    fetch('https://60381e5d4e3a9b0017e92cc3.mockapi.io/api/orders', {
      method: 'POST',
      body: JSON.stringify(inputFields),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );


    //const copyInput = Object.assign({}, inputFields);

    setResult(()=>({
        ...inputFields
    }
    ))

    setInputFields(()=>({
        firstname : '',
        lastname: '',
        password: ''
    }))


    setSubmit(true)
  }


    return (
        <main>
          
            <form onSubmit={handleFormSubmit}>
                <Input
                    label='Firstname'
                    name='firstname'
                    value={inputFields.firstname}
                    onChange={handleChange}  
                />
                 <Input
                    label='Lastname'
                    name='lastname'
                    value={inputFields.lastname}
                    onChange={handleChange}  
                />
                 <Input
                    label='Password'
                    name='password'
                    type='password'
                    value={inputFields.password}
                    onChange={handleChange}  
                />
               
                <SubmitButton/>
                
            </form>
            
          {submit &&  <InputList inputFields={result}/> }
                

        </main>
        
    )
}



function Input ({name, value, type, onChange}){
    return(
        <div className='container'>
            <label htmlFor={name} >{name}</label>
            <input className='input'
                type={type} 
                id={name} 
                name={name} 
                value={value}
                onChange={onChange}
                />
        </div>
    )
}



function SubmitButton(){
    return (
        <button 
        className='btn'
        type='submit'
        >
            Submit
        </button>
    )
}


function InputList({inputFields}){
    return(
        
        <ul className='mt-3'>  
        {Object.keys(inputFields).map((inputname)=>(
            
            <li>{inputFields[inputname]}</li>
            
        ))}
        </ul>
    )
}
