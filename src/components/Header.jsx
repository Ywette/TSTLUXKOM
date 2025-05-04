"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../components/ui/Navigation"; // <- New import
import '@/app/stylings/Header.css';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/tst-web-app' : '';

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
                        <Navigation 
                            isMobileMenuOpen={isMobileMenuOpen}
                            setIsMobileMenuOpen={setIsMobileMenuOpen}
                        />
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
