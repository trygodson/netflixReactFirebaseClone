import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCiSIsCIL-akqLJtEWNzAKktLWUyQUIRZQ",
    authDomain: "reactnetflix-35ac8.firebaseapp.com",
    projectId: "reactnetflix-35ac8",
    storageBucket: "reactnetflix-35ac8.appspot.com",
    messagingSenderId: "79345746670",
    appId: "1:79345746670:web:bd74e489fdcd40fa34e9ff"
}
const firebase = Firebase.initializeApp(config);

export { firebase }