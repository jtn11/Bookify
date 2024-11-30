import { Children, createContext, useContext , useState ,useEffect} from "react";
import { initializeApp } from "firebase/app";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth"

import { getFirestore , collection ,addDoc , getDocs , doc , getDoc , query,where} from "firebase/firestore";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCO4MF_e4ZvHyOHUuri4lQe7aEmqOdM8LY",
    authDomain: "bookify-f37ef.firebaseapp.com",
    projectId: "bookify-f37ef",
    storageBucket: "bookify-f37ef.firebasestorage.app",
    messagingSenderId: "191795805301",
    appId: "1:191795805301:web:1b5701450990973cfc8c3c"
};

//hook
export const useFirebase = () => {
    return useContext(FirebaseContext);
}

const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();
const    firestore = getFirestore(firebaseapp);


export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth , user =>{
            console.log(user)
            if(user){
                setUser(user);
            }
            else setUser(null)
        })
    },[])

    const signupUserwithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    }

    const signInUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    const signInwithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    const isLoggedIn = user ? true : false

    console.log(user)

    const handleCreateNewListing = async(name , isbnNumber , price)=>{

        // add coverPic in parameter
        // this way add image to storage then provide url of the img in storage to store in collection
        // const imgref = ref(storage , `uploads/images/${cover}`)
        // const uploadResult = await uploadBytes(imgref , cover);  

        return await addDoc(collection(firestore ,'books'),{
            name,
            isbnNumber , 
            price,
            // imageURL : uploadResult.ref.fullpath
            userID : user.uid,
            userEmail : user.email,
            displayname : user.displayName
        })
    }

    const listAllbooks = ()=>{
        return getDocs(collection(firestore, 'books'))
    }

    const getBookById = async (id) =>{
        const docRef = doc(firestore , 'books', id);
        const result = await getDoc(docRef);
        return result;
    }

    // this will create a new collection in each document that is a book that has orders of that book 
    const PlaceOrders = async(bookId , qty)=>{
        const collectionRef = collection(firestore, 'books' , bookId, "orders");  
        const result = await addDoc(collectionRef , {
            userID : user.uid,
            userEmail : user.email,
            displayname : user.displayName,
            qty : qty,
        });

        return result
    }

    const FetchMyBooks = async(userId)=>{
        const collectionRef = collection(firestore , "books");
        const q = query(collectionRef, where("userID" , "==" , userId));
        const result = await getDocs(q);
        return result;
    }

    return (
        <FirebaseContext.Provider 
        value={{ 
            signupUserwithEmailAndPassword, 
            signInUserWithEmailAndPassword, 
            signInwithGoogle,
            isLoggedIn,
            handleCreateNewListing,
            listAllbooks,
            getBookById,
            PlaceOrders,
            FetchMyBooks,
            user,
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}