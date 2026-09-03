import {Moon, Sun} from "lucide-react";
export default function ThemeToggle({dark, setDark}) {
  return <button className="icon-btn" onClick={()=>setDark(!dark)} aria-label="Toggle theme" title="Toggle light/dark theme">
    {dark ? <Sun size={19}/> : <Moon size={19}/>}
  </button>;
}