import {Link,useParams} from "react-router-dom";
import {CalendarDays,Heart,MapPin,Utensils,Music,Star,CheckCircle} from "lucide-react";
import TourismAgent from "../components/TourismAgent";
import {destinations} from "../data/destinations";
import {useWishlist} from "../hooks/useWishlist";
export default function DestinationDetails(){
 const {slug}=useParams(); const d=destinations.find(x=>x.slug===slug); const {wishlist,toggle}=useWishlist();
 if(!d) return <div className="empty-page"><h1>Destination not found</h1><Link to="/destinations" className="btn">Back to destinations</Link></div>;
 return <><section className="detail-hero" style={{"--hero":`url(${d.image})`}}><div className="container detail-hero-content"><span className="pill">{d.category}</span><h1>{d.name}</h1><p><MapPin size={17}/> {d.state} · <Star size={15} fill="currentColor"/> {d.rating}</p></div></section>
 <main className="section"><div className="container"><div className="detail-grid"><article><span className="eyebrow">THE EXPERIENCE</span><h2>Welcome to {d.name}</h2><p className="lead">{d.description}</p><div className="info-row"><div><CalendarDays/><span>Best time<strong>{d.bestTime}</strong></span></div><div><MapPin/><span>State<strong>{d.state}</strong></span></div></div>
 <h3>Popular places</h3><div className="tag-list">{d.places.map(x=><span key={x}>{x}</span>)}</div><h3>Things to do</h3><div className="check-grid">{d.things.map(x=><span key={x}><CheckCircle size={17}/>{x}</span>)}</div>
 <div className="culture-detail"><div><Utensils/><h3>Food to try</h3><p>{d.food.join(" • ")}</p></div><div><Music/><h3>Dance & tradition</h3><p>{d.dance}</p></div><div><Star/><h3>Famous for</h3><p>{d.famous}</p></div></div>
 <div className="gallery"><img src={d.image} alt={d.name}/><img src={d.image} alt={`${d.name} travel`}/><img src={d.image} alt={`${d.name} culture`}/></div></article>
 <aside className="detail-side"><div className="sticky-card"><button className={`wish-large ${wishlist.includes(d.id)?"liked":""}`} onClick={()=>toggle(d.id)}><Heart fill={wishlist.includes(d.id)?"currentColor":"none"}/> {wishlist.includes(d.id)?"Saved to Wishlist":"Save to Wishlist"}</button><h3>Ready to explore?</h3><p>Build a personalised plan or speak to our Tourism Agent.</p><Link to="/plan-trip" className="btn full">Plan My Trip</Link><a href="tel:+91XXXXXXXXXX" className="btn btn-outline full">Call Tourism Agent</a></div></aside></div><div className="agent-wrap"><TourismAgent destination={d.name}/></div></div></main></>;
}