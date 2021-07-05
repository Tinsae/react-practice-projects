import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: name,
    isValid: isNameValid,
    hasError: nameHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    isValid: isEmailValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  const nameClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  let formIsValid = false;
  if (isNameValid && isEmailValid) {
    formIsValid = true;
  }

  const formSubmisionHandler = event => {
    event.preventDefault();
    if (!isNameValid) {
      resetName();
      resetEmail();
    }
    console.log("form can be submitted");

  }
  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'> Name</label>
        <input
          value={name}
          type='text' id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler} />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'> Email</label>
        <input
          value={email}
          type='email' id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form >
  );
};

export default SimpleInput;
