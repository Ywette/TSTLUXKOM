"use client";
import { ChevronDown, Satellite, Wifi, Globe, Shield } from "lucide-react";
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

    // Map icons to services
    const serviceIcons = {
        'satcom': Satellite,
        'connectivity': Wifi,
        'consulting': Globe,
        'security': Shield
    };

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
                            height={50}
                            width={50}
                            className="logo-image"
                        />
                        <div className="logo-text-wrapper">
                            <p className="logo-text">TST LUXKOM</p>
                        </div>
                    </div>

                    {/* Navigation section */}
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li>
                                <Link
                                    href={`${basePath}/`}
                                    className="nav-link services-button"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`${basePath}/#about`}
                                    className="nav-link services-button"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="services-dropdown-container">
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
                                    // onMouseEnter={() => setIsOpen(true)}
                                >
                                    Services
                                    {/* <ChevronDown className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} /> */}
                                </button>
                            </li>
                            <li>
                                <Link
                                    href={`${basePath}/contact`}
                                    className="nav-link services-button"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {isOpen && (
                    <div
                        className="services-dropdown"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        {services.map((service) => {
                            const Icon = serviceIcons[service.web];
                            return (
                                <Link
                                    key={service.id}
                                    href={`${basePath}/services/${service.web}`}
                                    className="service-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {Icon && <Icon className="service-icon" />}
                                    <span className="service-title">{service.title}</span>
                                    {/* <span className="service-description">{service.description}</span> */}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </header>
            {/* Spacer to prevent content from going under fixed header */}
            {/* <div className="header-spacer"></div> */}

        </div>
    );
}