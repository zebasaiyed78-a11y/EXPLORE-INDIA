import {motion} from "framer-motion";
import {Search,ArrowRight} from "lucide-react";
import {Link,useNavigate} from "react-router-dom";
const popular=["Goa","Rajasthan","Kerala","Kashmir","Himachal Pradesh","Varanasi"];
export default function Hero(){
 const nav=useNavigate();
 const search=e=>{e.preventDefault(); const q=e.currentTarget.elements.q.value.trim(); if(q) nav(`/destinations?search=${encodeURIComponent(q)}`)};
 return <section className="hero">
  <motion.div className="hero-bg" animate={{scale:[1,1.06,1]}} transition={{duration:18,repeat:Infinity,ease:"easeInOut"}}/>
  <div className="hero-overlay"/>
  <div className="hero-content container">
   <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}><span className="eyebrow hero-eyebrow">NAMASTE • INDIA</span><h1>Discover <em>India</em></h1><p className="hero-sub">One Country. A Thousand Stories.</p><p className="hero-copy">From Himalayan peaks to tropical shores, discover the places, flavours, festivals and traditions that make India extraordinary.</p></motion.div>
   <motion.form className="hero-search" onSubmit={search} initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.2}}><Search size={21}/><input name="q" placeholder="Where do you want to go?"/><button className="btn">Explore <ArrowRight size={17}/></button></motion.form>
   <motion.div className="popular" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}><span>Popular:</span>{popular.map(x=><Link key={x} to={`/destinations?search=${encodeURIComponent(x)}`}>{x}</Link>)}</motion.div>
   <div className="hero-cta"><Link to="/plan-trip" className="btn btn-large">Plan My Trip</Link><a href="tel:+91XXXXXXXXXX">📞 Need help? Talk to our Tourism Agent</a></div>
  </div>
 </section>
}