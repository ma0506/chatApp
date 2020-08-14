import React from 'react'
import firebase from './../config/firebase';
import { useState,useEffect,useContext } from 'react';
import AuthContext from '../AuthService';

const Room = () => {
    const [messages,setMessages] = useState(null);
    const [value,setValue] = useState('');
    const user = useContext(AuthContext);

    useEffect(() => {
        // firebase.firestore().collection('messages').get().then((el)=> {
        //     console.log(el.docs);
        // })
        
        firebase.firestore().collection('messages')
        // .orderBy('createdAt')
        .onSnapshot((snapshot) => {
            const messages = snapshot.docs.map(doc => {
                return {...doc.data(),id:doc.id}
            })
            
            // console.log(messages);
            setMessages(messages);
        })
    }, [])

        const handleSubmit = (e) => {
            e.preventDefault();
            firebase.firestore().collection('messages').add({
                content: value,
                user: user.displayName
            })
            // handleSubmitした後はsetValueを文字列を''にする
            setValue('');
        }
    // useEffect(() => {
    //     firebase.firestore().collection('messages')
    //         .onSnapshot((snapshot) => {
    //             const messages = snapshot.docs.map(doc => {
    //                 return doc.data()
    //             })
    //             setMessages(messages)
    //         })
    // }, [])
    const handleDelete = (id) => {
        firebase.firestore().collection("messages").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        })
        // .catch(function(error) {
        //     console.error("Error removing document: ", error);
        // });
    }
    return (
        <>
            <h1>Room</h1>
            <ul>
                    {messages && messages.map(message => {
                        return (
                            <>
                                <li>
                                    {message.content}
                                    {/* {message.user} */}
                                    <button onClick = { () => handleDelete(message.id)}>削除</button>
                                </li>
                            </>
                            )
                    })}
            </ul>
            <form onSubmit = {handleSubmit}>
                <input 
                type= 'text' 
                value = {value}
                onChange = {e => {
                    setValue(e.target.value)
                }}
                />
                <button type = 'submit'>送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room
