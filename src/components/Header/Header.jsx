import {MdLocationOn} from "react-icons/md";
import {HiCalendar, HiMinus, HiPlay, HiPlus, HiSearch} from "react-icons/hi";
import { useState } from "react";


function Header() {

const [destination,setDestination] = useState("");
const [openOptions,setOpenOptions] = useState(false);
const [options,setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
})


  return (
    <div className="header">
        <div className="headerSearch">
            <div className="headerSearchItem">
                <MdLocationOn className="heaaderIcon  locationIcon " />
                <input 
                value={destination}
                onChange={(e)=> setDestination(e.target.value)}
                 type="text"
                 placeholder="Where To Go?"
                 className="headerSearchIcon" 
                  name="destination"
                  id="destination" />
                  <span className="seperator"></span> </div>
                  

            <div className="headerSearchItem">
                <HiCalendar  className="headerIcon dateIcon"/>
                <div className="dateDropDown">2023/06/23</div>
                <span className="seperator"></span></div>


            <div className="headerSearchItem">
                <div
                 id="optionDropDown"
                 onClick={()=> setOpenOptions(!openOptions)}  >
                 1 children &bull; 1room &bull; 3 adult</div>

                 {openOptions && <GuestOptionsList options={options} />}

                <span className="seperator"></span> </div>



            <div className="headerSearchItem">
                <button className="headerSearchBtn">
                    <HiSearch className="headerIcon" />
                </button>

            </div>
        </div>
    </div>
  )
}

export default Header;

function GuestOptionsList () {

    return(
        <div className="guestOptions">

            <OptionItem/>
            <OptionItem/>
            <OptionItem/>

        </div>
    );

}


function OptionItem (){
    return(            <div className="guestOptionItem">
                <span className="OptionText">Adult</span>
                <div className="optionCounter">
                    <button className="optionCounterBtn">
                        <HiMinus className="icon"/>
                    </button>
                    <span className="optionCounterNumber">2</span>
                    <button className="optionCounterBtn">
                        <HiPlus className="icon"/>
                    </button>
                </div>

            </div>


    );
}