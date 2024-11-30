import React  , {useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

export const BookDetailPage = ()=>{

    const params = useParams();
    const firebase = useFirebase();

    const [qty , setqty] = useState(1);


    const [data , setdata] = useState(null);

    useEffect(()=>{
        firebase.getBookById(params.bookId)
        .then(value => setdata(value.data()))
    },[]);

    const placeOrder = async()=>{
        const result = await firebase.PlaceOrders(params.bookId , qty)
        console.log("order placed " ,result);
    }

    if(data ==null) return <h1>Loading...</h1>

    return (
        <>
        <div className="text-center my-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">{data.name}</h1>
        <img
          className="ml-10 rounded-lg shadow-md"
          src="https://americanbookco.com/wp-content/uploads/2021/06/reading-books-1920x960.jpeg"
          alt="Book Cover"
          width="600"
        />
        <h1 className="text-2xl text-left ml-10 mt-4 font-semibold text-gray-800 mb-4">Details</h1>
        <p className="text-xl text-left ml-10 mt-2 font-semibold text-gray-800">Price. ${data.price}</p>
        <p className="text-xl text-left ml-10 mt-2 font-semibold text-gray-800">ISBN Number. {data.isbnNumber}</p>
        <h1 className="text-2xl text-left ml-10 mt-4 font-semibold text-gray-800 mb-4">Owner Details</h1>
        <p className="text-xl text-left ml-10 mt-2 font-semibold text-gray-800">User :  {data.userEmail.split('@')[0]}</p>
        </div>
        <form method="POST" className="space-y-6 ml-10">
                        <div>
                            <label htmlFor="number" className="block text-sm/6 font-medium text-gray-900">
                                Enter Quantity
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    required
                                    className="block w-80 mb-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                    </form>
    <button onClick={placeOrder}
    className="px-3 py-1 ml-10 bg-indigo-600 text-white text-lg font-medium rounded-md hover:bg-indigo-800 transition duration-300">
      Buy Now
    </button>
    </>
     
    )
}