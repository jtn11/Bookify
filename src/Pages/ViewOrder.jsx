import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Bookcard } from "../components/card";
import { OrderCountCard } from "../components/OrderCard"; // Import new card

export const OrderPage = ()=>{

    const firebase = useFirebase();
    const [books, setbooks] = useState([]);

    useEffect (()=>{
        if(firebase.isLoggedIn)
        firebase.FetchMyBooks(firebase.user.uid).then((books) => setbooks(books.docs))
    },[firebase])

    console.log(books)

    if(!firebase.isLoggedIn) return <h1>Please Login</h1>
    
    return (
        <div className="grid mt-20 gap-6 grid-cols-3 px-6">
          {books.map((book, key) => (
            <OrderCountCard
              key={key}
              name={book.data().name}
              isbnNumber={book.data().isbnNumber}
              userEmail={book.data().userEmail}
            />
          ))}
        </div>
      );
    };