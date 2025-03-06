import { CDN_LINK } from "../utils/constant";

const CardComponent = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      className="w-[220px] h-[320px] border rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 bg-white p-3 mx-5 my-4"
      data-testid="resCard"
    >
      <img
        className="w-full h-[140px] rounded-md object-cover"
        alt={name}
        src={CDN_LINK + cloudinaryImageId}
      />
      <div className="flex flex-col items-center mt-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate w-full text-center">
          {name}
        </h3>
        <div className="flex justify-between w-full text-sm text-gray-600 mt-1">
          <h4 className="flex items-center gap-1">
            ⭐ {avgRating}
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} mins</h4>
        </div>
        <p className="text-xs text-gray-500 truncate w-full text-center mt-1">
          {cuisines.join(", ")}
        </p>
        <p className="text-xs text-gray-500 mt-1">{areaName}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (CardComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
          Promoted
        </span>
        <CardComponent {...props} />
      </div>
    );
  };
};

export default CardComponent;




// import { CDN_LINK } from "../utils/constant";

// const CardComponent=(props)=>{
  
//     const {resData}=props;
//     const {
//       cloudinaryImageId,
//       name,
//       areaName,
//       avgRating,
//       cuisines,
//       costForTwo,
//       sla,
//     } = resData?.info;
// // console.log(resData)
  
//     return(
//       <div className="w-[200px] h-[300px] border-2 rounded-xl mx-10 my-4"  data-testid="resCard">
//         <img className="w-[200px] h-[150px] p-2" alt={name} src={CDN_LINK
//            +
//             cloudinaryImageId
//           }></img>
//         <div className="flex-col justify-evenly">
//           <h3 className="text-center text-xl font-medium mx-2">
//             {name.slice(0, 22)}
//             {name.length > 22 ? "..." : ""}
//           </h3>
//           <div className="flex justify-evenly">
//             <h4 className="">
//               <span>{avgRating}</span>
//             </h4>
//             <h4>{costForTwo}</h4>
//             <h4>{resData.info.sla.deliveryTime} mins</h4>
//           </div>
//           <p className="text-center">
//             {cuisines.join(", ").slice(0, 30)}
//             {cuisines.join(", ").length > 30 ? "..." : ""}
//           </p>
//           <p className="text-center">{areaName}</p>
//         </div>
  
//       </div>
//     )
//   }
//   export const withPromotedLabel=(CardComponent)=>{
//     return(props)=>{ 
//       return(
// <div>
//   <label className="absolute left-2">
// </label>
//   <CardComponent {...props}/>
// </div>
//       )
//     }
//   }
// export default CardComponent;
