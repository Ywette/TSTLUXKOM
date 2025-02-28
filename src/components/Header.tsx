"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { services } from '@/data/services';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [navVisibility, setNavVisibility] = useState(true)
    const router = useRouter()
    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-primary">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo section */}
                <div className="flex items-center">
                    <Image
                        src="/TSTLUXKOM/tst-logo-v45deg.svg"
                        alt="TST LUXKOM Logo"
                        priority
                        height={100}
                        width={100}
                    />
                    <div className="px-[10px] pt-5 font-semibold tracking-wide text-text-light">
                        <p className="text-lg">TST</p>
                        <p className="text-lg">LUXKOM</p>
                    </div>
                </div>

                {/* Navigation section */}
                <nav className="hidden md:block">
                    <ul className="uppercase flex items-center space-x-8 text-sm font-medium tracking-wider text-text-light">
                        <li>
                            <Link 
                                href="/" 
                                className="hover:opacity-80 transition-opacity py-2 px-3 rounded-md hover:bg-white/10 text-text-light"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#about" 
                                className="hover:opacity-80 transition-opacity py-2 px-3 rounded-md hover:bg-white/10 text-text-light"
                            >
                                About
                            </Link>
                        </li>
                        <li className="relative">
                            <button
                                className="uppercase inline-flex items-center gap-1 py-2 px-3 rounded-md hover:bg-white/10 font-medium text-text-light"
                                onClick={async () => {
                                    if (pathname !== '/') {
                                        await router.push('/')
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
                                <ChevronDown className="h-4 w-4 my-auto" />
                            </button>

                            {isOpen && (
                                <div
                                    className="absolute left-0 rounded-md shadow-lg py-1 z-50 min-w-[200px] backdrop-blur-sm bg-secondary top-[calc(100%-0.5rem)]"
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    {services.map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/services/${service.web}`}
                                            className="block px-4 py-2 text-sm hover:opacity-80 transition-opacity hover:bg-white/10 font-medium text-text-light bg-transparent"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li>
                            <Link 
                                href="/contact" 
                                className="hover:opacity-80 transition-opacity py-2 px-3 rounded-md hover:bg-white/10 text-text-light"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}