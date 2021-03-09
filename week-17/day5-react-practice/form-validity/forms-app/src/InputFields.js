

export default function InputFields({ type, name, fieldValues, onChange, labelText, onBlur, errorMessages }) {
    return (
      <div className='mb-4'>
        <label htmlFor="username">{labelText}</label>
        <input
          className={`form-control ${errorMessages[name] ? 'invalid' : ''}`}
          type={type}
          id={name}
          name={name}
          value={fieldValues[name]}
          onChange={onChange}
          onBlur={e => onBlur(e.target.value, name)}
        />
        {errorMessages[name] && (
        <div className="text-danger">{errorMessages[name]}</div>
      )}
      </div>
    );
  }