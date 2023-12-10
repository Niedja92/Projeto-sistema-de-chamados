import {initializeApp} from "firebase/app"
import { getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyARVIMtyruei2KFiIJ32BhDNXlgvod0tcM",
    authDomain: "tickets-94155.firebaseapp.com",
    projectId: "tickets-94155",
    storageBucket: "tickets-94155.appspot.com",
    messagingSenderId: "886802804358",
    appId: "1:886802804358:web:4bce4cb28bf512752deb07",
    measurementId: "G-47F5H1YMLJ"
  };

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export {auth, db, storage}

//3º passo: Criando e configurando a parte de dados (firebase) para autenticação