import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
function LocationList() {
  const { data, isLoading } = useFetch(" https://bookinghotel-1zdw.onrender.com/hotels", "");

  if (isLoading) return <Loader />;
  
  return (
    <div className="nearbyLocation">
      <h2>Nearby Locations</h2>
      <div className="locationList">
        {data.map((item) => {
          return (
            <div className="locationItem" key={item.id}>
              <img src={item.picture_url.url} alt={item.name} />
              <div className="locationItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">
                  €&nbsp;{item.price}&nbsp;
                  <span>night</span>
                </p>
              </div>
            </div>
          );0
        })}
      </div>
    </div>
  );
}
export default LocationList;
