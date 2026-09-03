import {useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import {MessageCircle,Phone, X} from "lucide-react";
import {tourismAgent,getWhatsAppUrl} from "../config/contact";
export default function FloatingContact() {
 const [show,setShow]=useState(false);
 return <div className="floating-contact">
   <AnimatePresence>{show && <motion.div initial={{opacity:0,y:15,scale:.95}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15,scale:.95}} className="contact-pop">
     <button className="pop-close" onClick={()=>setShow(false)}><X size={17}/></button>
     <span className="eyebrow">TRAVEL SUPPORT</span><h3>Need help planning your trip?</h3>
     <p>Talk to our Tourism Agent.</p><strong>{tourismAgent.phone}</strong>
     <div className="contact-pop-actions"><a href={`tel:${tourismAgent.tel}`} className="btn"><Phone size={16}/> Call Now</a><a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn btn-outline"><MessageCircle size={16}/> WhatsApp</a></div>
   </motion.div>}</AnimatePresence>
   <button className="floating-btn" onClick={()=>setShow(!show)}><MessageCircle size={20}/><span>Contact Tourism Agent</span></button>
 </div>;
}