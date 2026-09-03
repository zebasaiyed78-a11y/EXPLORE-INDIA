import {useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import {ArrowLeft,ArrowRight,CheckCircle,Phone} from "lucide-react";
import {Link} from "react-router-dom";
import {tourismAgent} from "../config/contact";
const steps=[
 {title:"Where do you want to go?",key:"destination",options:["Goa","Rajasthan","Kerala","Kashmir","Himachal Pradesh","Gujarat","Not sure yet"]},
 {title:"How long are you travelling?",key:"duration",options:["2–3 days","4–5 days","6–7 days","8–14 days","2+ weeks"]},
 {title:"What's your budget?",key:"budget",options:["Under ₹15,000","₹15,000–₹30,000","₹30,000–₹50,000","₹50,000–₹1 lakh","₹1 lakh+"]},
 {title:"Who are you travelling with?",key:"travelType",options:["Solo","Couple","Family","Friends"]},
 {title:"What are you interested in?",key:"interests",options:["Adventure","Beaches","Heritage","Food","Wildlife","Spiritual","Nature"]}
];
export default function PlanTrip(){
 const [step,setStep]=useState(0); const [data,setData]=useState({});
 const choose=v=>{const key=steps[step].key; setData({...data,[key]:v}); if(step<steps.length)setTimeout(()=>setStep(s=>s+1),160)};
 if(step>=steps.length) return <div className="planner-done"><div className="success-icon"><CheckCircle size={42}/></div><span className="eyebrow">YOUR JOURNEY STARTS HERE</span><h1>Your trip preferences are ready!</h1><p>We've captured your preferences. This demo is ready for a future AI/backend itinerary generator.</p><div className="summary">{Object.entries(data).map(([k,v])=><span key={k}><b>{k}</b>{v}</span>)}</div><div className="planner-actions"><button className="btn" onClick={()=>setStep(0)}>Start Over</button><a href={`tel:${tourismAgent.tel}`} className="btn btn-outline"><Phone size={17}/> Talk to Tourism Agent</a></div></div>;
 const s=steps[step]; return <div className="planner"><div className="planner-art"><div><span className="eyebrow">EXPLORE INDIA</span><h1>Design a journey that feels like <em>yours.</em></h1><p>Tell us a little about your trip and we'll shape the experience around you.</p></div></div><div className="planner-form"><div className="progress"><span>0{step+1}</span><div><i style={{width:`${((step+1)/steps.length)*100}%`}}/></div><span>0{steps.length}</span></div><AnimatePresence mode="wait"><motion.div key={step} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}><span className="eyebrow">STEP {step+1} OF {steps.length}</span><h2>{s.title}</h2><div className="option-grid">{s.options.map(o=><button className={data[s.key]===o?"selected":""} key={o} onClick={()=>choose(o)}>{o}<ArrowRight size={16}/></button>)}</div></motion.div></AnimatePresence>{step>0&&<button className="back-link" onClick={()=>setStep(step-1)}><ArrowLeft size={16}/> Back</button>}</div></div>;
}