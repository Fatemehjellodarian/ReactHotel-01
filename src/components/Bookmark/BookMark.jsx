import { Outlet } from "react-router-dom";
import Map from "../Map/Map";

function BookMark() {
  return (
    <div className="appLayout">
    <div className="sidebar">
        <div>bookmark list</div>
      <Outlet/>
    </div>
    <Map markerLocations={[]} />
 </div>

  )
}

export default BookMark;