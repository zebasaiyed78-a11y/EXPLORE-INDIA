import {motion} from "framer-motion";
import {Heart,Star,ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
export default function DestinationCard({d,wishlisted,onWish}) {
 return <motion.article className="destination-card" whileHover={{y:-7}} layout>
   <div className="card-image"><img src={d.image} alt={d.name}/><span className="pill">{d.category}</span><button className={`heart ${wishlisted?"liked":""}`} onClick={()=>onWish(d.id)} aria-label="Wishlist">{wishlisted?"♥":"♡"}</button></div>
   <div className="card-body"><div className="card-top"><span className="muted">{d.state}</span><span className="rating"><Star size={14} fill="currentColor"/> {d.rating}</span></div><h3>{d.name}</h3><p>{d.description}</p><Link to={`/destinations/${d.slug}`} className="card-link">Explore <ArrowUpRight size={16}/></Link></div>
 </motion.article>;
}