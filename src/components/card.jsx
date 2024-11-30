import React from "react";
import { useNavigate } from "react-router-dom";

export const Bookcard = ({ name, isbnNumber, price, userEmail , bookid }) => {
    const firstName = userEmail?.split('@')[0] || 'Unknown'; // Extract first name

    const Navigate = useNavigate();

    return (
        <div class=" max-w-xs mt-20 mx-auto p-4 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
            <img
                class="w-full h-48 object-cover rounded-md"
                src="https://www.popsci.com/wp-content/uploads/2024/07/buy_physical_books.jpg?quality=85"
                alt="Book Cover"
            />
            <div class="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-gray-600 mt-2">ISBN - {isbnNumber}</p>
            <p class="text-gray-700 mt-4 text-sm">
                    {`This book was added by ${firstName} and name of the ${name}`}
                </p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-lg font-bold text-gray-900">${price}</span>
                    <button 
                    class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-800 transition-colors duration-300"
                    onClick={e=>Navigate(`/book/view/${bookid}`)}
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
         

    )
}