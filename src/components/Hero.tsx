'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TbCircleLetterJFilled } from 'react-icons/tb';

interface HeroProps {
    triggerAnimation: boolean;
}

export default function Hero({ triggerAnimation }: HeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    const fixedJRef = useRef<HTMLDivElement>(null);
    const name = 'JIHO RYUU'.split('');
    const iconSize = 64;
    const introRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (!triggerAnimation) return;

        gsap.fromTo(
            heroRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.3 }
        );

        lettersRef.current.forEach((el) => {
            if (el) gsap.set(el, { opacity: 0, y: 50 });
        });

        lettersRef.current.forEach((el, i) => {
            if (el) {
                gsap.to(el, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.6 + i * 0.1,
                    ease: 'back.out(1.7)',
                });
            }
        });

        if (fixedJRef.current) {
            gsap.fromTo(
                fixedJRef.current,
                { y: -200, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'bounce.out',
                    delay: 0.6,
                }
            );
        }

        if (introRef.current) {
            gsap.fromTo(
                introRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.6 + name.length * 0.1 + 0.2,
                    ease: 'power2.out',
                }
            );
        }
    }, [triggerAnimation]);

    useEffect(() => {
        if (!triggerAnimation || !fixedJRef.current) return;

        const jEl = fixedJRef.current;

        gsap.fromTo(
            jEl,
            { y: -200, opacity: 0, scale: 0.8 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'bounce.out',
                delay: 0.6,
            }
        );

        const handleClick = () => {
            gsap.fromTo(
                jEl,
                { y: 0 },
                {
                    y: -30,
                    duration: 0.2,
                    ease: 'power2.out',
                    yoyo: true,
                    repeat: 3,
                }
            );
        };

        jEl.addEventListener('click', handleClick);

        return () => {
            jEl.removeEventListener('click', handleClick);
        };
    }, [triggerAnimation]);

    return (
        <section id="hero" className="hero-container flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <div
                ref={heroRef}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-darkblue flex items-center justify-center relative"
            >
                {name.map((char, i) => {
                    if (char === 'J') {
                        return (
                            <div
                                key={i}
                                ref={fixedJRef}
                                className="inline-block opacity-0 relative"
                                style={{ width: iconSize, height: iconSize }}
                            >
                                <TbCircleLetterJFilled size={iconSize} />
                            </div>
                        );
                    } else {
                        return (
                            <span
                                key={i}
                                ref={(el) => {
                                    lettersRef.current[i] = el;
                                }}
                                className="inline-block opacity-0"
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        );
                    }
                })}
            </div>
            <p
                ref={introRef}
                className="mt-4 text-sm sm:text-base text-darkgray opacity-0 flex items-center justify-center"
            >
                <span className="tracking-widest">Click</span>
                <TbCircleLetterJFilled size={24} className="text-darkgray mx-2" />
                <span className="tracking-widest">!</span>
            </p>
        </section>
    );
}
