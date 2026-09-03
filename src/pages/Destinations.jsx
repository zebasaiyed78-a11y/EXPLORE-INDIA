import {useMemo,useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Search,SlidersHorizontal} from "lucide-react";
import DestinationCard from "../components/DestinationCard";
import TourismAgent from "../components/TourismAgent";
import {destinations} from "../data/destinations";
import {useWishlist} from "../hooks/useWishlist";
export default function Destinations(){
 const [params]=useSearchParams(); const [q,setQ]=useState(params.get("search")||""); const [cat,setCat]=useState("All"); const [sort,setSort]=useState("rating"); const {wishlist,toggle}=useWishlist();
 const cats=["All",...new Set(destinations.map(d=>d.category))];
 const list=useMemo(()=>destinations.filter(d=>(!q||`${d.name} ${d.state} ${d.category}`.toLowerCase().includes(q.toLowerCase()))&&(cat==="All"||d.category===cat)).sort((a,b)=>sort==="rating"?b.rating-a.rating:a.name.localeCompare(b.name)),[q,cat,sort]);
 return <><div className="page-hero"><div className="container"><span className="eyebrow">DISCOVER INDIA</span><h1>Destinations</h1><p>Choose your next chapter from India's most captivating places.</p></div></div>
 <main className="section"><div className="container"><div className="filters"><div className="search-input"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search destinations, states or experiences..."/></div><select value={cat} onChange={e=>setCat(e.target.value)}><option value="All">All categories</option>{cats.slice(1).map(c=><option key={c}>{c}</option>)}</select><select value={sort} onChange={e=>setSort(e.target.value)}><option value="rating">Top rated</option><option value="name">Name A–Z</option></select></div>
 <div className="results-line"><span>{list.length} destinations found</span><SlidersHorizontal size={16}/></div>
 {list.length?<div className="destination-grid">{list.map(d=><DestinationCard key={d.id} d={d} wishlisted={wishlist.includes(d.id)} onWish={toggle}/>)}</div>:<div className="empty-state"><h3>No destinations found</h3><p>Try another search or category.</p></div>}
 <div className="agent-wrap"><TourismAgent/></div></div></main></>;
}