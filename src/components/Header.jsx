"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { services } from '@/data/services';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import '../app/stylings/Header.css';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [navVisibility, setNavVisibility] = useState(true)
    const router = useRouter()
    const pathname = usePathname()
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/TSTLUXKOM' : '';

    return (
        <div className="header-container">
            <header className="header">
                <div className="header-inner">
                    {/* Logo section */}
                    <div className="logo-container">
                        <Image
                            src={`${basePath}/tst-logo-v45deg.svg`}
                            alt="TST LUXKOM Logo"
                            priority
                            height={100}
                            width={100}
                        />
                        <div className="logo-text">
                            <p>TST LUXKOM</p>                         
                        </div>
                    </div>

                    {/* Navigation section */}
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li>
                                <Link 
                                    href={`${basePath}/`}
                                    className="nav-link"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href={`${basePath}/#about`}
                                    className="nav-link"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="relative">
                                <button
                                    className="services-button"
                                    onClick={async () => {
                                        if (pathname !== '/') {
                                            await router.push(`${basePath}/`)
                                            setTimeout(() => {
                                                const servicesSection = document.getElementById('services')
                                                if (servicesSection) {
                                                    servicesSection.scrollIntoView({ behavior: 'smooth' })
                                                }
                                            }, 100)
                                        } else {
                                            const servicesSection = document.getElementById('services')
                                            if (servicesSection) {
                                                servicesSection.scrollIntoView({ behavior: 'smooth' })
                                            }
                                        }
                                    }}
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    Services
                                    <ChevronDown className="dropdown-icon" />
                                </button>

                                {isOpen && (
                                    <div
                                        className="services-dropdown"
                                        onMouseEnter={() => setIsOpen(true)}
                                        onMouseLeave={() => setIsOpen(false)}
                                    >
                                        {services.map((service) => (
                                            <Link
                                                key={service.id}
                                                href={`${basePath}/services/${service.web}`}
                                                className="service-link"
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link 
                                    href={`${basePath}/contact`}
                                    className="nav-link"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Spacer to prevent content from going under fixed header */}
            <div className="header-spacer"></div>
        </div>
    );
}