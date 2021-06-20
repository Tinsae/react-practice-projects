import React, { useState, useRef } from 'react';

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

const AddUser = ({ onAddUser }) => {
    /* using refs instead of state */
    /*
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    */
    const nameRef = useRef()
    const ageRef = useRef()
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault()
        const username = nameRef.current.value;
        const age = ageRef.current.value;
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return
        }
        if (age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return
        }
        /* using refs instead of state */
        /* setUsername('')
           setAge('')
        */
        onAddUser(username, age);
        nameRef.current.value = ''
        ageRef.current.value = ''
    };

    /* using refs instead of state */
    /*
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    };*/
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" /*value={username} onChange={usernameChangeHandler}*/ ref={nameRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" /*value={age} onChange={ageChangeHandler}*/ ref={ageRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};
export default AddUser;