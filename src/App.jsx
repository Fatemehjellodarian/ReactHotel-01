import "./App.css";
import Header from "../src/components/Header/Header";
import {  Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
import { Routes,Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hoteles from "./components/Hotels/Hoteles";
import HotelsProvider from "./components/Context/HotelsProvider";
 

function App() {
  return (
    <HotelsProvider>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={<LocationList/>}Route/>
        <Route path="/hotels" element={<AppLayout/>}>
          <Route index element={<Hoteles/>} />
          <Route path=":id" element={<div>Single Hotel</div>}/>
        </Route>

      </Routes>
      </HotelsProvider>
      
    ) ;
  
  }
export default App;
