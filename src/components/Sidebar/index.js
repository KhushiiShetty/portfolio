import {Link, NavLink} from 'react-router-dom'
import './index.scss'

import LogoS from '../../assets/Logos/S.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode,faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to= '/'>
            <img src={LogoS} alt="Logos" />

        </Link>
        <nav>
            <NavLink exact="true" activeclassname = "active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color= "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname = "active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser } color= "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname = "active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color= "#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname = "active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faCode} color= "#4d4d4e" />
            </NavLink>
           
            
        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/khushii-shetty-0538012b5/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className='anchor-icon'/>
                </a>
            </li>
            <li>
                <a 
                href="https://github.com/KhushiiShetty"
                target="_blank"
                rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className='anchor-icon'/>
               

                </a>
            </li>
        </ul>
        
        
    </div>
)

export default Sidebar