import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBsdE1Y2eNGwXHuy583o77cxLF6r4FFIXc",
    authDomain: "disney-plus-clone-e3886.firebaseapp.com",
    projectId: "disney-plus-clone-e3886",
    storageBucket: "disney-plus-clone-e3886.appspot.com",
    messagingSenderId: "311652920949",
    appId: "1:311652920949:web:83816b5ab077853974923c",
    measurementId: "G-JPVCJ1XVGB"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export {auth, provider, storage, signInWithPopup};
  
  export default db;