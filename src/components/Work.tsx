'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('Experience');

    useEffect(() => {
        const items = sectionRef.current?.querySelectorAll('.experience-item');

        if (items) {
            items.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%',
                            end: 'top 20%',
                            toggleActions: 'play reverse play reverse',
                            scrub: true,
                        }
                    }
                )
            })
        }
    }, []);

    return (
        <section id="work" className="colored-section">
            <div className="inner" ref={sectionRef}>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="section-title-area">
                        <div className="section-title">Experience</div>
                        <div className="section-intro">
                            {t('intro')}
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="space-y-12 max-w-5xl mx-auto px-6">
                            {/* muilab */}
                            <div className="flex items-start gap-4 experience-item">
                                <a
                                    href="https://muilab.com/en/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <Image
                                            src="/experience/muilab.png"
                                            alt="muilab Inc"
                                            width={56}
                                            height={56}
                                            className="transform transition duration-300 hover:scale-110 hover:shadow-md"
                                        />
                                    </div>
                                </a>
                                <div>
                                    <p className="text-sm text-darkgray">{t('exp1.period')}</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        {t('exp1.name')}
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        {t('exp1.description')}
                                    </p>
                                </div>
                            </div>

                            {/* StarUp */}
                            <div className="flex items-start gap-4 experience-item">
                                <a
                                    href="https://starup01.jp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <Image
                                            src="/experience/starup.svg"
                                            alt="StarUp Inc"
                                            width={56}
                                            height={56}
                                            className="transform transition duration-300 hover:scale-110 hover:shadow-md"
                                        />
                                    </div>
                                </a>
                                <div>
                                    <p className="text-sm text-darkgray">{t('exp2.period')}</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        {t('exp2.name')}
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        {t('exp2.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}