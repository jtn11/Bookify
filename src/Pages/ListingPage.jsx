import React, { useState } from "react";

import { useFirebase } from "../context/Firebase";

export const ListingPage = ()=>{

    const firebase = useFirebase();

    const [name , setName] = useState("");
    const [isbnNumber , setisbnNumber] = useState("");
    const [price , setPrice] = useState("")
    // const [coverPic , setCoverPic] = useState("")


    const handleSubmit = async(e)=>{
        e.preventDefault();
        //pass cover
        await firebase.handleCreateNewListing(name , isbnNumber , price);
    }


    return (
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Book Name
                </label>
                <div className="mt-2">
                    <input onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>
            

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        ISBN Number
                    </label>
                    <div className="text-sm">
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        onChange={(e) => setisbnNumber(e.target.value)}
                        value={isbnNumber}
                        type="text"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="text" className="block text-sm/6 font-medium text-gray-900">
                    Price
                </label>
                <div className="mt-2">
                    <input onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="text"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Create
                </button>
            </div>
        </form>
    </div>
    )
}