// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, getDoc, addDoc, Timestamp} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAcoJLsVd-bJsuz8EvzdyiWeUMxO1W2Uk",
  authDomain: "crea-tubar.firebaseapp.com",
  projectId: "crea-tubar",
  storageBucket: "crea-tubar.appspot.com",
  messagingSenderId: "913986368303",
  appId: "1:913986368303:web:1b13f4952b090e14e767da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore()



// traer todos los items
export const getItems = async ()=>{
    const items = await getDocs(collection(db, "items"))
    return items
}

// traer 1 item
export const getItem = async (id)=>{
    const item = await getDoc(doc(db, "items", id))
    return item
}

// generacion de order

export const generateOrder = async (order)=>{
    const newOrder = addDoc(collection(db,"orders"),{
        ...order,
        date: Timestamp.fromDate(new Date)
    })
    return newOrder
}
export default db