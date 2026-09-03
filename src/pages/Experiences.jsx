import {useSearchParams} from "react-router-dom";
import ExperienceCard from "../components/ExperienceCard";
import DestinationCard from "../components/DestinationCard";
import {experiences} from "../data/experiences";
import {destinations} from "../data/destinations";
import {useWishlist} from "../hooks/useWishlist";
export default function Experiences(){
 const [p]=useSearchParams(); const active=p.get("category"); const selected=active?destinations.filter(d=>d.category.toLowerCase()===active.toLowerCase()):[];
 const {wishlist,toggle}=useWishlist();
 return <><div className="page-hero"><div className="container"><span className="eyebrow">HOW WILL YOU TRAVEL?</span><h1>Experiences</h1><p>India is not one journey. It is thousands of ways to feel alive.</p></div></div><main className="section"><div className="container"><div className="experience-grid experience-large">{experiences.map(e=><ExperienceCard key={e.id} item={e}/>)}</div>{active&&<div className="experience-results"><span className="eyebrow">EXPLORE {active.toUpperCase()}</span><h2>Destinations for this experience</h2><div className="destination-grid">{selected.length?selected.map(d=><DestinationCard key={d.id} d={d} wishlisted={wishlist.includes(d.id)} onWish={toggle}/>):<p className="muted">More destinations are coming soon.</p>}</div></div>}</div></main></>;
}