import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {ArrowRight,MapPin,Utensils,Music,Landmark} from "lucide-react";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import ExperienceCard from "../components/ExperienceCard";
import IndiaMap from "../components/IndiaMap";
import TourismAgent from "../components/TourismAgent";
import {destinations} from "../data/destinations";
import {experiences} from "../data/experiences";
import {useWishlist} from "../hooks/useWishlist";

export default function Home(){
 const {wishlist,toggle}=useWishlist();
 return <><Hero/>
 <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">START EXPLORING</span><h2>Explore India</h2><p>From the Himalayas to the Indian Ocean.</p></div><Link className="text-link" to="/destinations">View all destinations <ArrowRight size={17}/></Link></div>
 <div className="destination-grid">{destinations.slice(0,6).map(d=><DestinationCard key={d.id} d={d} wishlisted={wishlist.includes(d.id)} onWish={toggle}/>)}</div></div></section>
 <section className="section section-tint"><div className="container"><div className="section-head"><div><span className="eyebrow">TRAVEL YOUR WAY</span><h2>Explore by Experience</h2><p>Find the India that speaks to you.</p></div></div><div className="experience-grid">{experiences.map(e=><ExperienceCard key={e.id} item={e}/>)}</div></div></section>
 <section className="culture-strip"><div className="container culture-grid"><div><span className="eyebrow">MORE THAN A DESTINATION</span><h2>Travel through India's living culture.</h2><p>Meet traditions shaped by centuries of art, food, music, dance and craftsmanship.</p></div><div className="culture-stat"><span><Utensils/> <b>Regional Food</b><small>Every state has a story to taste.</small></span><span><Music/> <b>Dance & Music</b><small>From Kathak to Garba.</small></span><span><Landmark/> <b>Heritage</b><small>Forts, temples & monuments.</small></span></div></div></section>
 <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">WHAT'S HOT</span><h2>Trending Destinations</h2></div><Link className="text-link" to="/destinations">See all <ArrowRight size={17}/></Link></div><div className="trend-grid">{destinations.slice(0,4).map((d,i)=><motion.div key={d.id} className="trend-card" whileHover={{y:-5}}><img src={d.image} alt={d.name}/><div><span>0{i+1}</span><h3>{d.name}</h3><p>{d.category} • {d.rating} ★</p></div></motion.div>)}</div></div></section>
 <IndiaMap/><div className="container agent-wrap"><TourismAgent/></div>
 </>;
}