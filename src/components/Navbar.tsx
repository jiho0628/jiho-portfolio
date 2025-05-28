'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface NavbarProps {
    shouldAnimate: boolean;
}

const sections = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'products', label: 'Products' },
    { id: 'contacts', label: 'Contacts' },
];

export default function Navbar({ shouldAnimate }: NavbarProps) {
    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (shouldAnimate) {
            gsap.fromTo(
                navRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
            );
        }
    }, [shouldAnimate]);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full h-16 bg-darkblue text-lightgray z-50 shadow-md opacity-0"
        >
            <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
                <ul className="flex gap-6 text-sm font-medium">
                    <li key={'hero'}>
                        <a
                            href={`#${'hero'}`}
                            className="hover:text-gray-300 transition-colors duration-200 text-caption font-bold tracking-wide"
                        >
                            {'JIHO RYUU'}
                        </a>
                    </li>
                </ul>
                <ul className="flex gap-6 text-sm font-medium">
                    {sections.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className="hover:text-gray-300 transition-colors duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}