import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useEffect,useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Experiences from "./pages/Experiences";
import Itineraries from "./pages/Itineraries";
import PlanTrip from "./pages/PlanTrip";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import "./index.css";

export default function App(){
 const [dark,setDark]=useState(()=>localStorage.getItem("exploreTheme")==="dark");
 useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light";localStorage.setItem("exploreTheme",dark?"dark":"light")},[dark]);
 return <BrowserRouter><Navbar dark={dark} setDark={setDark}/><Routes>
   <Route path="/" element={<Home/>}/><Route path="/destinations" element={<Destinations/>}/><Route path="/destinations/:slug" element={<DestinationDetails/>}/>
   <Route path="/experiences" element={<Experiences/>}/><Route path="/itineraries" element={<Itineraries/>}/><Route path="/plan-trip" element={<PlanTrip/>}/>
   <Route path="/login" element={<Login/>}/><Route path="/signup" element={<Signup/>}/><Route path="/about" element={<About/>}/>
   <Route path="*" element={<Home/>}/>
 </Routes><Footer/><FloatingContact/></BrowserRouter>
}