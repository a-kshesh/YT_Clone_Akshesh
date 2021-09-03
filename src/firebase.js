import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB8Tp34oeyV9sdRSahLoR8LzG4ilcRuvcM",
  authDomain: "akshesh-yt-clone.firebaseapp.com",
  projectId: "akshesh-yt-clone",
  storageBucket: "akshesh-yt-clone.appspot.com",
  messagingSenderId: "676986716499",
  appId: "1:676986716499:web:8ff4d11f75b69f844121a6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth()