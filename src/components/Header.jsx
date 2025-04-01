"use client";
import { ChevronDown, Satellite, Wifi, Globe, Shield, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { services } from '@/data/services';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import '../app/stylings/Header.css';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname()
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/TSTLUXKOM' : '';

    // Map icons to services
    const serviceIcons = {
        'satcom': Satellite,
        'connectivity': Wifi,
        'consulting': Globe,
        'security': Shield
    };

    const navItems = {
        'Home': '/',
        'Services': '/#services',
        'About': '/#about',
        'Contact': '/contact'
    }

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close mobile menu when screen size increases
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle navigation with smooth scroll
    const handleNavClick = (e, path) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        
        if (path.startsWith('/#')) {
            const sectionId = path.substring(2);
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(`${basePath}${path}`);
        }
    };

    return (
        <>
            <div className="header-container">
                <header className="header">
                    <div className="header-inner">
                        {/* Logo section */}
                        <div className="logo-container">
                            <div className="logo-image-wrapper">
                                <Image
                                    src={`${basePath}/tst-logo-v45deg.svg`}
                                    alt="TST LUXKOM Logo"
                                    priority
                                    fill
                                    className="logo-image"
                                />
                            </div>
                            <div className="logo-text-wrapper">
                                <p className="logo-text">TST LUXKOM</p>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button 
                            className="mobile-menu-button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Navigation section */}
                        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                            <ul className="nav-list">
                                {Object.entries(navItems).map(([name, path], index) => (
                                    <li key={index}>
                                        <Link
                                            href={`${basePath}${path}`}
                                            className="nav-link services-button"
                                            onClick={(e) => handleNavClick(e, path)}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
            <div className="header-spacer"></div>

            {/* Overlay for mobile menu backdrop */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-menu-overlay" 
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}

// Add this CSS to your Header.css file:
/*
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 40;
}

@media (min-width: 769px) {
    .mobile-menu-button {
        display: none;
    }

    .nav-menu {
        display: flex;
    }
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        z-index: 50;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .mobile-menu-open {
        display: block;
    }

    .nav-list {
        flex-direction: column;
        padding: 1rem 0;
    }

    .nav-list li {
        width: 100%;
    }

    .nav-link, .services-button {
        width: 100%;
        padding: 0.75rem 1.5rem;
        text-align: left;
    }
}
*/