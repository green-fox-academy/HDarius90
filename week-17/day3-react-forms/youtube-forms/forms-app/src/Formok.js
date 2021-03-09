import { useState } from 'react';
import './Formok.css'


let textForErrorMessages = {
  username: 'Név megadása kötelező',
  email: 'Email cím megadása kötelező',
  password: 'jelszó megadása kötelező',
  choice: 'válassz egyet'
}

function ActiveInput({value, type='text', active, setActive, name, label, onChange, onBlur, errorMessages}) {
  const classes = ['input'];
  if(value !== '' || active === name) {
    classes.push('active')
  }
  
  console.log(errorMessages[name])
  return <div className={classes.join(' ') }>
    
          <label htmlFor={`form-${name}`}>{label}</label>
          <input 
          type={type}
          id={`form-${name}`}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={e => onBlur(e.target.value, name)}
          onFocus={()=> setActive(name)}
          />
          {errorMessages[name] && (
        <div className="text-danger">{errorMessages[name]}</div>
      )}
        </div>

}

export default function Formok() {
  const [active, setActive] = useState(null)
  const [sent, setSent] = useState(false)
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    choice: '',
    newsletter: []
});

let [errorMessages, setErrorMessages] = useState({
  username: '',
  email: '',
  password: '',
  choice: ''
});



const handleCheckBoxChange = ({target: {name, value, checked}}) => setData(data=>{
  console.log(data[name])
  return ({
    ...data,
    [name] : checked ? [...data[name], value] : data[name].filter(element => element !== value)
})})


function validateRequiredField(value, name) {
  console.log(value)
  let isValid = value.length > 0;
console.log([name])
  setErrorMessages({
   
    ...errorMessages,
    [name]: isValid ? '' : textForErrorMessages[name]
  });

  return isValid;
}

function handleValueChange(e) {
  // let newFormValues = { ...formValues };
  // newFormValues[e.target.name] = e.target.value;
  // setFormValues(newFormValues);

  setData({
    ...data,
    [e.target.name]: e.target.value
  });
}

  return (
    
    <div className="container">
      <h1>Alkalmazás state</h1>
      {sent ? <p>köszönjük a regisztrációt</p> :
      <>
      <p>Felhasználónév: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Jelszó: {data.password}</p>
      <p>A választott elem: {data.choice}</p>
      <p>Hírlevél: {data.newsletter.join(', ')}</p>
      </>}
      <h1>Regisztrációs ürlap</h1>
      
      <form
      onSubmit={(e)=>{
        e.preventDefault()
       
        Object.keys(errorMessages).map(name => validateRequiredField(data[name], name));

        // 2. Megnézzük, hogy minden error message üres-e
        let isFormValid = Object.values(errorMessages).every(v => v === '');
    
        if (!isFormValid) {
          return;
        }

        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'post',
          body: JSON.stringify(data)
        })
          .then((response)=>response.json())
          .then((result) => 
            console.log('sent to the server', result))
            setSent(true)
      }}
      >
      <ActiveInput 
        label='Felhasználónév'
        name='username'
        value={data.username}
        active={active}
        //onChange={handleChange}
        setActive={setActive}
        onChange={handleValueChange}
        onBlur={validateRequiredField}
        errorMessages={errorMessages}
        />
        <ActiveInput 
        label='Email'
        type='email'
        name='email'
        value={data.email}
        active={active}
        //onChange={handleChange}
        setActive={setActive}
        onChange={handleValueChange}
        onBlur={validateRequiredField}
        errorMessages={errorMessages}
        />
        <ActiveInput 
        label='Jelszó'
        name='password'
        type='password'
        value={data.password}
        active={active}
        //onChange={handleChange}
        setActive={setActive}
        onChange={handleValueChange}
        onBlur={validateRequiredField}
        errorMessages={errorMessages}
        />
        
        <div className={`input${data.choice !== `` ? active  : ''}`}>
          <label htmlFor="form-choice">Válassz egyet!</label>
          <select 
            name="choice" 
            id="form-choice"
            value={data.choice}
            //onChange={handleChange}
            onBlur={validateRequiredField}
            onChange={handleValueChange}
            errorMessages={errorMessages}
            >
            <option value=""></option>
            <option value='első'>Első választás</option>
            <option value='második'>Második választás</option>
            <option value='harmadik'>Harmadik választás</option>
          </select>
        </div>
        <div className='inputt'>
          <input type="checkbox" name='newsletter' value='sales' id='news-letter-sales' onChange={handleCheckBoxChange}/>
          <label htmlFor="news-letter-sales">Szeretnék feliratkozni a sales hírlevélre</label>
        </div>
        <div className='inputt'>
          <input type="checkbox" name='newsletter' value='marketing' id='news-letter-marketing' onChange={handleCheckBoxChange}/>
          <label htmlFor="news-letter-marketing">Szeretnék feliratkozni a marketing hírlevélre</label>
        </div>
        <button>
          Elküld
        </button>
      </form>
        
      </div>
  );
}


