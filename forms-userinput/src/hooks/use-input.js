import { useReducer } from "react";
const initialState = {
    value: "",
    isTouched: false
}
const inputStateReducer = (state, action) => {
    if (action.type === "CHANGE") {
        return { ...state, value: action.value }

    }
    else if (action.type === "BLUR") {
        return { ...state, isTouched: true }
    }
    else if (action.type == "RESET") {
        return initialState;
    }
    else {
        return initialState
    }
}

const useInput = (validator) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialState);


    const isValid = validator(inputState.value);
    const hasError = !isValid && inputState.isTouched;

    const changeHandler = event => {
        dispatch({ type: "CHANGE", value: event.target.value })
    }

    const blurHandler = event => {
        dispatch({ type: "BLUR" })
    }

    const reset = () => {
        dispatch({ type: "RESET" })
    }

    return (
        {
            value: inputState.value,
            isValid,
            hasError,
            changeHandler,
            blurHandler,
            reset
        }
    )
}

export default useInput
