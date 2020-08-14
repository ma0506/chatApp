import React from 'react'
import firebase from '../config/firebase'
import { useState } from 'react'

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(err => {
            alert(err,'err');
        })
        // .then(ok => {
        //     console.log(ok,'ok');
        // })
        console.log(email);
    }
    return (
        <>
            <h1>SignUp</h1>        
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='text'
                        value = {email}
                        onChange = {e => {
                            setEmail(e.target.value);
                        }} 
                        id='email' 
                        name='email' 
                        placeholder='Email'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='text'
                        value = {password}
                        onChange = {e => {
                            setPassword(e.target.value);
                        }}
                        id='password' 
                        name='password'
                        placeholder='password' 
                    />
                </div>
                <button type='submit'>SignUp</button>
            </form>
        </>
    )
}

export default SignUp