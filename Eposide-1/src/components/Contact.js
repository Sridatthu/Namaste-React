import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="font-bold text-3xl mb-6 text-gray-800">Contact Us</h1>
      
      <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea 
          placeholder="Message" 
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />

        <button 
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;


// import React from 'react'

// const Contact = () => {
//   return (
//     <div><h1 className='font-bold text-2xl'>Contact us page
//       </h1>
//       <form>
//         <input type='text' placeholder='userName'className='p-2 m-2 border rounded-xl'></input>
//         <input type='text' placeholder='message'className='p-2 m-2 border rounded-xl'></input>
//         <button className='p-2 m-2 border-2 rounded-xl'>submit</button>
//         </form></div>
//   )
// }

// export default Contact
