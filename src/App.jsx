import "./App.css";
import Header from "../src/components/Header/Header";
import {  Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
import { Routes,Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./components/Context/HotelsProvider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookMark from "./components/Bookmark/BookMark";

 

function App() {
  return (
    <HotelsProvider>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={<LocationList/>}Route/>
        <Route path="/hotels" element={<AppLayout/>}>
          <Route index element={<Hotels/>} />
          <Route path=":id" element={<SingleHotel/>}/>
        </Route> 
        
        <Route path="/bookmark" element={<BookMark/ >}/>
      </Routes>
      </HotelsProvider>
      
    ) ;
  
  }
export default App;
