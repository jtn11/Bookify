import React from "react";

export const OrderCountCard = ({ name, isbnNumber, userEmail }) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center text-xl text-gray-700 font-bold shadow-inner">
        {name.charAt(0).toUpperCase()}
      </div>
      <h3 className="text-xl font-bold text-gray-800 ml-4">{name}</h3>
    </div>
    <div className="border-t border-gray-200 pt-4">
      <p className="text-sm text-gray-700 mb-2">
        <span className="font-medium text-gray-800">ISBN:</span> {isbnNumber}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-medium text-gray-800">Owner:</span> {userEmail.split('@')[0]}
      </p>
    </div>
  </div>
  
  );
};
