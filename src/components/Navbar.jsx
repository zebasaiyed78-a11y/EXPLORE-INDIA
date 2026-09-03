import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Menu, X, Phone} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import {tourismAgent} from "../config/contact";

export default function Navbar({dark,setDark}) {
  const [open,setOpen] = useState(false);
  const links = [["/","Home"],["/destinations","Destinations"],["/experiences","Experiences"],["/itineraries","Itineraries"],["/plan-trip","Plan Trip"],["/about","About"]];
  return <header className="navbar">
    <div className="nav-inner">
      <Link className="brand" to="/" onClick={()=>setOpen(false)}>
        <span className="brand-mark">✦</span><span>Explore <b>India</b></span>
      </Link>
      <nav className={`nav-links ${open ? "open":""}`}>
        {links.map(([to,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>isActive?"active":""}>{label}</NavLink>)}
      </nav>
      <div className="nav-actions">
        <a className="agent-phone" href={`tel:${tourismAgent.tel}`}><Phone size={16}/> {tourismAgent.phone}</a>
        <ThemeToggle dark={dark} setDark={setDark}/>
        <Link className="btn btn-small" to="/plan-trip">Plan Trip</Link>
        <button className="mobile-menu icon-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
    </div>
  </header>;
}