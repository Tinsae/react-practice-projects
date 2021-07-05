import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastName,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    isValid: isEmailValid,
    hasError: emailHasError,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  let isFormValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }

  const firstNameClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';


  const emailClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  const formSubmisionHandler = event => {
    event.preventDefault();
    if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
      resetFirstName();
      resetLastName();
      resetEmail();
    }
    else {
      console.log("form can be submitted");
    }
  }

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameHasError && <p className="error-text">first name must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className="error-text">last name must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">email is not valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
