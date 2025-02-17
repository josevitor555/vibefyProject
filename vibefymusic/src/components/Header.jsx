import React from "react";
import VibefyLogo from "../assets/logo/vibefy-white.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img src={VibefyLogo} alt="Image not found" />
            </Link>
            
            <Link to="/" className="header__link" href="#">
                <h1 className="text-3xl font-bold hover:underline"> VibeFy </h1>
            </Link>
        </div>
    )
};

export default Header;