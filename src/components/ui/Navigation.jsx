"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import '@/app/stylings/Navigation.css';

export default function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isClosing, setIsClosing] = useState(false);

    const navItems = {
        'Home': '/',
        'About': '/#about',
        'Services': '/#services',
        'Contact': '/contact'
    };

    // Handle menu closing animation
    useEffect(() => {
        if (!isMobileMenuOpen && isClosing) {
            const timer = setTimeout(() => {
                setIsClosing(false);
            }, 300); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [isMobileMenuOpen, isClosing]);

    // Auto-close menu on route change
    useEffect(() => {
        if (isMobileMenuOpen) {
            setIsClosing(true);
            setIsMobileMenuOpen(false);
        }
    }, [pathname]);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        if (isMobileMenuOpen) {
            setIsClosing(true);
            setIsMobileMenuOpen(false);
        }

        if (path.startsWith('/#')) {
            const sectionId = path.substring(2);
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(path);
        }
    };

    return (
        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu-open' : isClosing ? 'mobile-menu-closing' : ''}`}>
            <ul className="nav-list">
                {Object.entries(navItems).map(([name, path], index) => (
                    <li key={index}>
                        <Link
                            href={path}
                            className="nav-link services-button"
                            onClick={(e) => handleNavClick(e, path)}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
