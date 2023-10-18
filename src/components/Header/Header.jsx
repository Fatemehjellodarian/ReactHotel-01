import {MdLocationOn} from "react-icons/md";
import {HiCalendar, HiMinus,  HiPlus, HiSearch} from "react-icons/hi";
import { useState,useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";


function Header() {

const [destination,setDestination] = useState("");
const [openOptions,setOpenOptions] = useState(false);
const [options,setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
});

const handleOptions = (name,operation)=>{
    console.log(name , operation);
    setOptions((prev)=>{
        return{
            ...prev,
            [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
    };
    });

};


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
                 
                 {options.adult} adult &nbsp;&bull;&nbsp; {options.children} children &nbsp;
                 &bull;&nbsp;{options.room} room</div>

                 {openOptions &&
                 
                 <GuestOptionsList 
                 setOpenOptions={setOpenOptions}  
                 handleOptions={handleOptions} 
                 options={options} />}

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







function GuestOptionsList ({options ,handleOptions,setOpenOptions}) {

const optionsRef = useRef();
useOutsideClick(optionsRef,()=> setOpenOptions(false));

    return(
        <div className="guestOptions"  ref={optionsRef}>

            <OptionItem 
             handleOptions={handleOptions} 
             type="adult" options={options}
             minLimit={1}/>


            <OptionItem
              handleOptions={handleOptions}  
              type="children" options={options} 
              minLimit={0}/>


            <OptionItem
              handleOptions={handleOptions}   
              type="room" options={options} 
              minLimit={1}/>

        </div>
    );

}


function OptionItem ({options,type,minLimit,handleOptions}){

    return( 
        
        <div className="guestOptionItem">
                <span className="OptionText">{type}</span>
                <div className="optionCounter">
                    <button  
                    onClick={ ()=>{
                       
                        handleOptions(type,"dec")}}
                      className="optionCounterBtn" 
                       disabled={options[type] <= minLimit} 
                       >
                        <HiMinus className="icon"/>
                    </button>



                    <span className="optionCounterNumber">{options[type]}</span>
                    <button 
                     onClick={()=>{ 
                        handleOptions(type,"inc")}}
                       className="optionCounterBtn">
                        <HiPlus className="icon"/>
                    </button>
                </div>

            </div>


    );
}