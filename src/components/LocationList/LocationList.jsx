import useFetch from "../../hooks/useFetch";



function LocationList() {
const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
if(isLoading) <p>Loading...</p>

  return (
 <div className="nearbyLocation">
    <h2>NearBy Locations</h2>
    {data.map((item)=>{

        return  <div className="locationItem" key={item.id} >
            <img src={item.picture_url.url} alt={item.name} />
            <div className="locationItemDesc">
                <p className="location">{item.smart_location_}</p>
                <p className="name">{item.name}</p>
                <p className="price">€&nbsp;{item.price}&nbsp;
                <span>night</span></p>
            </div>


        </div>;

    })}
 </div>
  )
}

export default LocationList;