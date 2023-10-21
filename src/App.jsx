import "./App.css";
import Header from "../src/components/Header/Header";
import {  Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
import { Routes,Route } from "react-router-dom";
 

function App() {
  return (<div>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={<LocationList/>}Route/>
      </Routes>
      
    </div>) ;
  
  }
export default App;
