'use client';
import React from 'react'
import Button from './ui/Button'
import Link from 'next/link'

function HeroSection() {
    return (
        <section className="flex flex-wrap justify-center items-center h-screen">
            <div className=" w-1/2 pl-8">
                <h1 className="text-4xl font-bold my-16 text-gray-900 uppercase">
                    Your partner for satcom projects
                </h1>
                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                    Whether you're looking to enhance your service management, install or refurbish antennas, or optimize your RF equipment, we've got you covered. At TST LUXKOM, we specialize in delivering seamless, reliable, and high-performance satellite communication solutions. Our expertise and commitment ensure your systems are always operating at their best.
                </p>
                <div className='flex gap-4'>
                <Link href="#services">
                    <Button className="text-base px-8 py-3 font-medium bg-pink-500 hover:bg-pink-500 text-white"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }}>                       
                        Discover services
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button className="text-base px-8 py-3 font-medium bg-pink-500 hover:bg-pink-500 text-white">
                        Tell About Your Project
                    </Button>
                </Link>
                </div>
            </div>
            <div className="w-1/2">
            </div>
        </section>
    )
}

export default HeroSection