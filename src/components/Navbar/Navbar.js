import './Navbar.css'
import { 
  AiFillIdcard,
  AiFillProfile,
  AiFillSchedule,
  AiFillCrown,
} from 'react-icons/ai'

// TODO: Add animation to hide the navbar as scrolling down 
// TODO: Improve the way of setting active tab
// TODO: Makes it to be more responsive

export default function Navbar({ active }) {
  return(
    <ul id="navbar">
        <li><a href="/" className={active === 0 ? "active" : ""}> <AiFillIdcard /> About Me</a></li>
        <li><a href="/experiences" className={active === 1 ? "active" : ""}> < AiFillProfile/> Experiences</a></li>
        <li><a href="/projects" className={active === 2 ? "active" : ""}> <AiFillSchedule /> Projects</a></li>
        <li><a href="/achievements" className={active === 3 ? "active" : ""}> <AiFillCrown /> Achievements</a></li>
    </ul>
  );
}