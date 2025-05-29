'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { HiMenu, HiX } from 'react-icons/hi';
import { useRouter, usePathname } from 'next/navigation';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (shouldAnimate) {
            gsap.fromTo(
                navRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
            );
        }
    }, [shouldAnimate]);

    const switchLocale = (locale: 'ja' | 'en') => {
        const pathWithoutLocale = pathname?.replace(/^\/(ja|en)/, '') || '';
        router.push(`/${locale}${pathWithoutLocale}`);
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full h-16 bg-darkblue text-lightgray z-50 shadow-md opacity-0"
        >
            <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
                {/* ロゴ部分 */}
                <a
                    href="#hero"
                    className="text-caption font-bold tracking-wide text-sm hover:text-gray-300 transition-colors"
                >
                    JIHO RYUU
                </a>

                {/* デスクトップ用メニュー */}
                <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
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
                    {/* 言語切り替え */}
                    <li className="ml-4">
                        <button
                            onClick={() => switchLocale('ja')}
                            className="hover:text-gray-300 px-2"
                        >
                            日本語
                        </button>
                        |
                        <button
                            onClick={() => switchLocale('en')}
                            className="hover:text-gray-300 px-2"
                        >
                            English
                        </button>
                    </li>
                </ul>

                {/* モバイルメニューアイコン */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* モバイルメニュー展開時 */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-darkblue px-4 pt-2 pb-4 space-y-2">
                    {sections.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="block text-sm font-medium text-lightgray hover:text-gray-300 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={() => {
                                switchLocale('ja');
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-sm hover:text-gray-300"
                        >
                            日本語
                        </button>
                        <button
                            onClick={() => {
                                switchLocale('en');
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-sm hover:text-gray-300"
                        >
                            English
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}