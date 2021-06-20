// The cleanup function is called every time before this effect runs – to clean up from the last run.
// when the firsttime page loads cleanup function doesn't run

import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from '../UI/Input/Input';
import classes from './Login.module.css';

const userInputReducer = (state, action) => {
  if (action.type === "EMAIL_UPDATE") {
    return {
      ...state, email: {
        value: action.val || state.val || "",
        isValid: action.val && action.val.includes("@") ? true : false
      }
    };
  }
  else if (action.type === "PASSWORD_UPDATE") {
    return {
      ...state, password: {
        value: action.val || state.val || "",
        isValid: action.val && action.val.length > 6 ? true : false
      }
    };
  }
  return state;
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [userInputState, dispatchUserInput] = useReducer(userInputReducer, {
    email: {
      value: "",
      isValid: false
    },
    password: {
      value: "",
      isValid: false
    }
  });

  const {
    email: { isValid: emailIsValid, value: emailValue },
    password: { isValid: passwordIsValid, value: passwordValue }
  } = userInputState;

  const emailChangeHandler = (event) => {
    dispatchUserInput({ type: "EMAIL_UPDATE", val: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchUserInput({ type: "PASSWORD_UPDATE", val: event.target.value })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (emailIsValid && passwordIsValid) {
      ctx.onLogin(emailValue, passwordValue);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailChangeHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={emailIsValid}
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordChangeHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
