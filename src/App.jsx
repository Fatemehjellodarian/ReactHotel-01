import "./App.css";
import Header from "../src/components/Header/Header";
import {  Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
 

function App() {
  return (<div>
      <Toaster/>
      <Header/>
      <LocationList/>
    </div>) ;
  
  }
export default App;
