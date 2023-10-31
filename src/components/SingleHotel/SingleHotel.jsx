import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { useHotels } from "../Context/HotelsProvider";

function SingleHotel() {
const {id} = useParams();
const {isLoadingCurrHotel,getHotel,currentHotel} = useHotels();
console.log(isLoadingCurrHotel,currentHotel);

useEffect(()=>{
    getHotel (id);                                                                                                                                                                 (id);
},[id]);

 if(isLoadingCurrHotel|| !currentHotel) return <Loader/>;


  return (
    <div className="room">
    <div className="roomDetail">
        <h2>{currentHotel.name}</h2>
        <div>
            {currentHotel.number_of_reviews} reviews &bull; {currentHotel.smart_location};
        </div>
        <img src={currentHotel.xl_picture_url} alt={currentHotel.name} />

    </div>
  </div>)  
  
}
export default SingleHotel;