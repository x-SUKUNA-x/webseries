import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { movieList } from '../config/movieList';
import GooeyNav from './GooeyNav';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const token = localStorage.getItem('token');
    const genres = Object.keys(movieList);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const location = useLocation();
    const isProfilePage = location.pathname === '/profile';
    const isGenrePage = location.pathname === '/' && new URLSearchParams(location.search).get('genre');
    const isHomePage = location.pathname === '/' && !isGenrePage;

    return (
        <header className="header-container">
            {/* Background SVG */}
            <svg
                className="header-bg-svg"
                width="1440"
                height="676"
                viewBox="0 0 1440 676"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMin slice"
            >
                <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#header-gradient)" />
                <defs>
                    <radialGradient
                        id="header-gradient"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(90 428 292)scale(812)"
                    >
                        <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
                        <stop offset="1" stopColor="#372AAC" />
                    </radialGradient>
                </defs>
            </svg>

            <nav className="navbar">
                <Link to="/" className="brand-logo">
                    Watchory
                </Link>

                {/* Genre Menu (Centered) */}
                <div className="header-genre-menu" style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                    <GooeyNav
                        items={genres.map((genre) => ({ label: genre, href: `/?genre=${genre}` }))}
                        initialActiveIndex={
                            new URLSearchParams(location.search).get('genre')
                                ? genres.findIndex(g => g === new URLSearchParams(location.search).get('genre'))
                                : null
                        }
                    />
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {!token ? (
                        <GooeyNav items={[{ label: 'Login', href: '/login' }]} />
                    ) : (
                        <GooeyNav items={[
                            ...((isProfilePage || isGenrePage) ? [{ label: 'Home', href: '/' }] : []),
                            ...((isHomePage || isGenrePage) ? [{ label: 'Profile', href: '/profile' }] : [])
                        ]} />
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 5h16" />
                        <path d="M4 12h16" />
                        <path d="M4 19h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-menu-btn" onClick={closeMenu} aria-label="Close menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>

                <div className="mobile-nav-links">
                    {/* Mobile Genres */}
                    <div className="mobile-genres-list">
                        {genres.map((genre) => (
                            <Link
                                key={genre}
                                to={`/?genre=${genre}`}
                                onClick={closeMenu}
                                className="mobile-genre-link"
                            >
                                {genre}
                            </Link>
                        ))}
                    </div>
                    <div className="mobile-auth-links">
                        {!token ? (
                            <Link to="/login" onClick={closeMenu}>Login</Link>
                        ) : (
                            <>
                                {(isProfilePage || isGenrePage) && <Link to="/" onClick={closeMenu}>Home</Link>}
                                {(isHomePage || isGenrePage) && <Link to="/profile" onClick={closeMenu}>Profile</Link>}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
