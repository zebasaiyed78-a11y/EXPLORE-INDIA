import {Phone,MessageCircle} from "lucide-react";
import {motion} from "framer-motion";
import {tourismAgent,getWhatsAppUrl} from "../config/contact";
export default function TourismAgent({destination}) {
 return <motion.section className="agent-banner" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
   <div><span className="eyebrow">PERSONAL TRAVEL SUPPORT</span><h2>{destination ? `Planning a trip to ${destination}?` : "Need help planning your journey?"}</h2><p>Our Tourism Agent can help you choose destinations, experiences and travel plans.</p></div>
   <div className="agent-actions"><div><strong>{tourismAgent.name}</strong><div className="agent-number">{tourismAgent.phone}</div></div><a href={`tel:${tourismAgent.tel}`} className="btn"><Phone size={17}/> Call Tourism Agent</a><a href={getWhatsAppUrl(destination ? `Hello, I want help planning my trip to ${destination}.` : undefined)} target="_blank" rel="noreferrer" className="btn btn-light"><MessageCircle size={17}/> WhatsApp</a></div>
 </motion.section>;
}