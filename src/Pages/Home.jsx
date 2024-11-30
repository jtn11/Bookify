import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { Bookcard } from "../components/card";

export const HomePage = ()=>{

    const [books , setbooks] = useState([]);

    const firebase = useFirebase();
    useEffect(()=>{
        firebase.listAllbooks().then((books)=> setbooks(books.docs));
    },[])

    return (
        <>
        <div class="grid gap-auto grid-cols-3 grid-rows-auto">
         {books.map((book , key)=>
         <div key={key}>
            <Bookcard 
              name={book.data().name}
              isbnNumber={book.data().isbnNumber}
              price={book.data().price}
              userEmail={book.data().userEmail}
              bookid = {book.id}
            />
         </div>
        )} 
        
        </div>
        </>


    )
}