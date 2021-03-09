import { useEffect, useRef, useState } from 'react';
import './styles.scss';

let textForErrorMessages = {
  name: 'Név megadása kötelező',
  address: 'Cím megadása kötelező',
}

export default function App() {
  let nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();

    //let isFormValid = true;

    // for (let fieldName of Object.keys(errorMessages)) {
    //   if (!validateRequiredField(formValues[fieldName], fieldName)) {
    //     isFormValid = false;
    //   }
    // }

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
  }

  // let [name, setName] = useState('');
  // let [address, setAddress] = useState('');

  let [formValues, setFormValues] = useState({
    name: '',
    address: '',
    notes: ''
  });
  let [errorMessages, setErrorMessages] = useState({
    name: '',
    address: ''
  });

  // function validateName(value) {
  //   let isValid = value.length > 0;

  //   if (isValid) {
  //     setNameErrorMessage('');
  //   }
  //   else {
  //     setNameErrorMessage('Név megadása kötelező');
  //   }

  //   return isValid;
  // }

  function validateRequiredField(value, fieldName) {
    let isValid = value.length > 0;

    setErrorMessages({
      ...errorMessages,
      [fieldName]: isValid ? '' : textForErrorMessages[fieldName]
    });

    return isValid;
  }

  function handleValueChange(e) {
    // let newFormValues = { ...formValues };
    // newFormValues[e.target.name] = e.target.value;
    // setFormValues(newFormValues);

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="container">
      <h1 className="mb-5">Checkout</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          labelText="Name"
          name="name"
          errorMessages={errorMessages}
          formValues={formValues}
          onChange={handleValueChange}
          onBlur={validateRequiredField}
          inputRef={nameInputRef}
        />

        <Input
          labelText="Address"
          name="address"
          errorMessages={errorMessages}
          formValues={formValues}
          onChange={handleValueChange}
          onBlur={validateRequiredField}
        />

        <button type="submit" className="btn btn-primary mt-2">Complete</button>
      </form>
    </div>
  );
}



function Input(props) {
  let { labelText, name, errorMessages, formValues, onChange, onBlur, inputRef } = props;

  return (
    <div className="mb-4">
      <label htmlFor={name}>{labelText}</label>
      <input
        type="text"
        className={`form-control ${errorMessages[name] ? 'invalid' : ''}`}
        id={name}
        name={name}
        value={formValues[name]}
        onChange={onChange}
        onBlur={e => onBlur(e.target.value, name)}
        ref={inputRef}
      />
      {errorMessages[name] && (
        <div className="text-danger">{errorMessages[name]}</div>
      )}
    </div>
  );
}