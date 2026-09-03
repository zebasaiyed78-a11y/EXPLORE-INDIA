import {motion} from "framer-motion";
import {Link} from "react-router-dom";
export default function ExperienceCard({item}) {
 return <motion.div className="experience-card" whileHover={{scale:1.025}}><img src={item.image} alt={item.title}/><div className="experience-overlay"><span className="experience-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><Link to={`/experiences?category=${encodeURIComponent(item.category)}`}>Explore →</Link></div></motion.div>;
}