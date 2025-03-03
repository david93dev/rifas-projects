import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Header.css";
import logo from "../../assets/img/logo1.png";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); 

    return (
        <header className="header">
            <nav className="nav">
                <div className="header-container">
                    <a href="#">
                        <img className="logo" src={logo} alt="Logo do site" />
                    </a>

                    <div
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </div>

                    <ul className={`header-list ${menuOpen ? "active" : ""}`}>
                        <li><button id="home-btn" onClick={() => navigate('/')}>Início</button></li>
                        <li><button onClick={() => navigate('/ganhadores')}>Ganhadores</button></li>
                        <li><button onClick={() => navigate('/quem-somos')}>Quem Somos</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
