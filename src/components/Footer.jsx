import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <p> </p>
            <select className="language-selector">
                <option value="English">English</option>
                <option value="Spanish">Español</option>
                <option value="French">Français</option>
                <option value="German">Deutsch</option>
                <option value="Italian">Italiano</option>
                <option value="Portuguese">Português</option>
                <option value="Chinese">中文</option>
                <option value="Japanese">日本語</option>
                </select>
            <p>© 2025 Instagram from Meta</p>
        </div>
        </footer>
    );
    }

export default Footer;