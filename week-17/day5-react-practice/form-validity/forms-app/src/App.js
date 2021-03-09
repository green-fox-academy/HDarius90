import {  useState } from 'react';
import './App.css'


let textForErrorMessages = {
  name: 'Név megadása kötelező',
  email: 'Cím megadása kötelező',
  password: 'Jelszó megadása kötelző, legalább 8 karakter szükséges'
}

export default function App() {

  const [submit, setSubmit] = useState(false);
  const [enable, setEnable] = useState(false);  

 

  function handleFormSubmit(e) {
    e.preventDefault();

  
    // 1. Lefuttatjuk az összes inputon a validációt, megadjuk a 2 értéket,
    // a formValues-ból kiszedjuk a a valuet(formValues[fieldName]), és megadjuk a name-et (fieldName)
    Object.keys(errorMessages).map(fieldName => validateRequiredField(formValues[fieldName], fieldName));

    // 2. Megnézzük, hogy minden error message üres-e
    let isFormValid = Object.values(errorMessages).every(v => v === '');

    if (!isFormValid) {
      return;
    }

    

    fetch('https://60381e5d4e3a9b0017e92cc3.mockapi.io/api/orders', {
      method: 'post',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setFormValues(()=>({
      name: '',
      email: '',
      password: ''
  }))

  setSubmit(true)

  }


  let [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
    
  });
  let [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    password: ''
  });

// {formValues !== '' && setEnable(true)} 

  function validateRequiredField(value, fieldName) {
    let isValid = value.length > 0;
    setEnable(true)
    

    setErrorMessages(previousErrorMessages=>({
        ...previousErrorMessages,
        [fieldName]: isValid ? '' : textForErrorMessages[fieldName]
      }))
      
     
    return isValid;
  }

  function validatePasswordField(value, fieldName) {
    let isValid = value.length > 7;
    setEnable(true)

    setErrorMessages({
      ...errorMessages,
      [fieldName]: isValid ? '' : textForErrorMessages[fieldName]
    });

    
    return isValid;
    
  }
 


  function handleValueChange(e) {

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }



  return (
    <div className="container">
      <h1 className="mb-5">RegForm</h1>
      <form onSubmit={handleFormSubmit}>
      
        <Input
          labelText="Name"
          name="name"
          type='text'
          errorMessages={errorMessages}
          formValues={formValues}
          onChange={handleValueChange}
          onBlur={validateRequiredField}
          //child komponensnél átneveztük, de igazából az a validateReq...
        />
        <Input
          labelText="Email"
          name="email"
          type='email'
          errorMessages={errorMessages}
          formValues={formValues}
          onChange={handleValueChange}
          onBlur={validateRequiredField}
        />
          <Input
          labelText="Password"
          name='password'
          type='password'
          errorMessages={errorMessages}
          formValues={formValues}
          onChange={handleValueChange}
          onBlur={validatePasswordField}
        />

          <SubmitButton disabled={enable}/>
      </form>
      {submit &&  'sikeres regisztráció' }
    </div>
  );
}

function SubmitButton({enable}){
  return (
      <button 
      className='btn'
      type='submit'
      disabled={!enable}
      >
          Submit
      </button>
  )
}

function Input(props) {
  let { labelText, name, type, errorMessages, formValues, onChange, onBlur} = props;

  return (
    <div className="mb-4">
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        className={`form-control ${errorMessages[name] ? 'invalid' : ''}`}
        id={name}
        name={name}
        value={formValues[name]}
        onChange={onChange}
        onBlur={e => onBlur(e.target.value, name)}
        
      />
      {errorMessages[name] && (
        <div className="text-danger">{errorMessages[name]}</div>
      )}
    </div>
  );
}