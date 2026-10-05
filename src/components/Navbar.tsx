import {NavLink} from "react-router-dom";

function Navbar() {
    const getNavClass = ({isActive} : {isActive : boolean}) => isActive ? "nav-link active" : "nav-link";
  return ( 
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
           <img src="/public.tsx/Logo.png"
           alt="Syeda Anamta Aziz"
           className="logo-image"
        />
        </NavLink>
        <nav className="nav-links">
              
            <NavLink to="/" end className={getNavClass}>Home</NavLink>
            <NavLink to="/about" end className={getNavClass}>About</NavLink>
            <NavLink to="/education" end className={getNavClass}>Education</NavLink>
            <NavLink to="/projects" end className={getNavClass}>Projects</NavLink>
            <NavLink to="/services" end className={getNavClass}>Services</NavLink>
            <NavLink to="/contact" end className={getNavClass}>Contact</NavLink>
        </nav>
            
       </div>
    </header>
   );
}
export default Navbar;

