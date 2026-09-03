import {useState} from "react";
import {states} from "../data/states";
export default function IndiaMap(){
 const [selected,setSelected]=useState(states[0]);
 return <section className="section map-section"><div className="container"><div className="section-head"><div><span className="eyebrow">THE MANY INDias</span><h2>Explore India State by State</h2></div><p>Select a state to discover its character, seasons and culture.</p></div>
 <div className="map-layout"><div className="map-visual"><div className="india-silhouette">INDIA</div><div className="map-dots">{states.map((s,i)=><button key={s.name} className={`map-dot dot-${i} ${selected.name===s.name?"selected":""}`} onClick={()=>setSelected(s)} title={s.name}/>)}</div></div>
 <div className="state-panel"><img src={selected.image} alt={selected.name}/><div className="state-content"><span className="eyebrow">STATE SPOTLIGHT</span><h3>{selected.name}</h3><p>{selected.description}</p><div className="state-meta"><span>Capital<strong>{selected.capital}</strong></span><span>Best time<strong>{selected.bestTime}</strong></span></div><div className="state-buttons">{states.map(s=><button key={s.name} className={s.name===selected.name?"selected":""} onClick={()=>setSelected(s)}>{s.name}</button>)}</div></div></div></div>
 </div></section>
}