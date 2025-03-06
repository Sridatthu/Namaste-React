const Shimmer = () => {
    return (
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Array(12) // Generates 12 shimmer cards
          .fill("")
          .map((_, index) => (
            <div key={index} className="w-64 h-40 bg-gray-200 animate-pulse rounded-xl shadow-md"></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  


// const Shimmer=()=>{
//     return(
//         <div>
//             <div className="shimmer-box">
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//                 <div className="shimmer-card"></div>
//             </div>
//         </div>
//     )
// }
// export default Shimmer
