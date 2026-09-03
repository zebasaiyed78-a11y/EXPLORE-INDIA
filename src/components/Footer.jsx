import {Link} from "react-router-dom";
import {Instagram, Facebook, Youtube, Mail, Phone} from "lucide-react";
import {tourismAgent,getWhatsAppUrl} from "../config/contact";
export default function Footer() {
  return <footer className="footer">
    <div className="footer-grid">
      <div><div className="brand footer-brand"><span className="brand-mark">✦</span><span>Explore <b>India</b></span></div><p>One Country. A Thousand Stories.</p><p className="muted">Discover places, people, food, art and unforgettable journeys across India.</p></div>
      <div><h4>Explore</h4><Link to="/destinations">Destinations</Link><Link to="/experiences">Experiences</Link><Link to="/itineraries">Itineraries</Link><Link to="/plan-trip">Plan Your Trip</Link></div>
      <div><h4>Culture</h4><a href="/destinations/rajasthan">Rajasthan</a><a href="/destinations/kerala">Kerala</a><a href="/destinations/gujarat">Gujarat</a><a href="/destinations/tamil-nadu">Tamil Nadu</a></div>
      <div><h4>Tourism Agent</h4><p><Phone size={15}/> {tourismAgent.phone}</p><p><Mail size={15}/> {tourismAgent.email}</p><a className="whatsapp-link" href={getWhatsAppUrl()}>WhatsApp us</a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Explore India. College full-stack project.</span><span><Instagram size={17}/> <Facebook size={17}/> <Youtube size={17}/></span></div>
  </footer>;
}