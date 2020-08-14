import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCU8CPofpKFR60lwJAlRuVWKNJyKYT5NGU",
    authDomain: "chat-applesson.firebaseapp.com",
    databaseURL: "https://chat-applesson.firebaseio.com",
    projectId: "chat-applesson",
    storageBucket: "chat-applesson.appspot.com",
    messagingSenderId: "1082641019608",
    appId: "1:1082641019608:web:56ed4319c349995061ddad"
}

firebase.initializeApp(firebaseConfig)

export default firebase;

