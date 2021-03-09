import { useState } from "react";
import "./App.css";
import InputFields from './InputFields'
import SubmitButton from './SubmitButton'



let textForErrorMessages = {
    username: 'Név megadása kötelező',
    email:  'érvénytelen email cím',
    password: 'adj megjelszót, legalább 8 karakter'
}

export default function App() {

    const [submit, setSubmit] = useState(false);
    const [enable, setEnable] = useState(false);  

    

  let [fieldValues, setFieldValues] = useState({
    username: "",
    email: "",
    password: "",
  });

const validators = {
    username: [
        validateRequiredField
    ],
    email: [
        emailValidity
    ],
    password: [
        validatePasswordField
    ]
}

  let [errorMessages, setErrorMessages] = useState({
    username: '',
    email: '',
    password: ''
  });


  function handleOnChange(e){
        setFieldValues({
            ...fieldValues,
            [e.target.name] : e.target.value
        });
  }



 function handleOnSubmit(e){
    e.preventDefault();

    // 1. Lefuttatjuk az összes inputon a validációt, megadjuk a 2 értéket,
    // a fieldValues-ból kiszedjuk a a valuet(formValues[fieldName]), és megadjuk a name-et (fieldName)
    Object.keys(errorMessages).map(fieldName => validateRequiredField(fieldValues[fieldName], fieldName));
    
    // 2. Megnézzük, hogy minden error message üres-e
    let isFormValid = Object.values(errorMessages).every(v => v === '');

    

    if (!isFormValid) {
      return;
    }

    fetch('https://60381e5d4e3a9b0017e92cc3.mockapi.io/api/orders', {
      method: 'post',
      body: JSON.stringify(fieldValues),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    
    console.log(
        {
            username: fieldValues.username ,
            email: fieldValues.email ,
            password: fieldValues.password
          }
    )

    setFieldValues(()=>({
        username: '',
        email: '',
        password: ''
    }))

    setSubmit(true)
 }

 ////////


 function validateRequiredField(value, fieldName) {
    let isValid = value.length > 0;
    
    setErrorMessages(previousErrorMessages=>({
        ...previousErrorMessages,
        [fieldName]: isValid ? '' : textForErrorMessages[fieldName]
      }))
      
    return isValid;
  }

 function validateUserName(value, fieldName){
    validateRequiredField(value, fieldName);
    checkFormValidity(fieldName);
 }

 function checkFormValidity(fieldnameNotToCheck){
     let allValidity = true;
       for(let [fieldname, validateFunctions] of Object.entries(validators) ){
           if(fieldname!==fieldnameNotToCheck){
            validateFunctions.forEach((validateFunction)=>{
              let elementValidity = validateFunction(fieldValues[fieldname], fieldname)
              if(elementValidity === false){
                  allValidity = false;
              }
            })
           }
       } 
      
        setEnable(allValidity)
       
       return allValidity;
 }


  function emailValidity(value, fieldName){
    let isValid = value.includes('@');
  
    setErrorMessages(previousErrorMessages=>({
        ...previousErrorMessages,
        [fieldName]: isValid ? '' : textForErrorMessages[fieldName]
      }))
     

    return isValid;

  }

  function validatePasswordField(value, fieldName) {
    let isValid = value.length > 7;
    

    setErrorMessages(previousErrorMessages=>({
        ...previousErrorMessages,
        [fieldName]: isValid ? '' : textForErrorMessages[fieldName]
      }))

    return isValid;    
  }

  
  
  return (
    <div className='container'>
        <h1>Form</h1>
      <form onSubmit={handleOnSubmit}>
        <InputFields
          type="text"
          name="username"
          labelText="Username"
          fieldValues={fieldValues}
          id="username"
          onChange={handleOnChange}
          onBlur={validateUserName}
          errorMessages={errorMessages}
        />
        <InputFields
          type="email"
          name="email"
          labelText="Email"
          fieldValues={fieldValues}
          id="email"
          onChange={handleOnChange}
          onBlur={emailValidity}
          errorMessages={errorMessages}
        />
        <InputFields
          type="password"
          name="password"
          labelText="Password"
          fieldValues={fieldValues}
          id="password"
          onChange={handleOnChange}
          onBlur={validatePasswordField}
          errorMessages={errorMessages}
        />
        <SubmitButton enable={enable}/>
        <div>
            {submit &&  'sikeres regisztráció' }
        </div>
        
      </form>
    </div>
  );
}



