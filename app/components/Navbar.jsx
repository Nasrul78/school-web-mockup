import { Link } from 'react-router-dom';
import slogan from "../assets/school-slogan.png";
import "../App.css"

const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white p-2 flex items-center justify-around">
            <img src={slogan} alt="School Slogan" className="h-16 w-32.88 inline-block" />
            <nav className="mx-auto">
                <ul className="flex space-x-4">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;