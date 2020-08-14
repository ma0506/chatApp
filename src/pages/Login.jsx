import React from 'react';
import firebase from '../config/firebase';
import { useState,useContext } from 'react';
import { Redirect } from 'react-router-dom'
import AuthContext from '../AuthService';

const Login = ({history}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to="/" />
    }
    const handleSubmit = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            history.push('/')
        })
        .catch(err => {
            alert(err,'err');
            // console.log(err);
        })
    }
    return (
        <>
            <h1>Login</h1>        
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                    // type = カリキュラムではemailだったけど
                    // textに変えた!!input(form)の中が入力されていたから
                        type='text'
                        value = {email}
                        onChange = {e=>{
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
                        onChange = {e=>{
                            setPassword(e.target.value);
                        }}
                        id='password' 
                        name='password'
                        placeholder='password' 
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login