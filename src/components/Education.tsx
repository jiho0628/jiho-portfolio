'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('Education')

    useEffect(() => {
        const items = sectionRef.current?.querySelectorAll('.edu-item');

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
                            toggleActions: 'play reverse play reverse', // ⬅︎ 出入りでアニメーション
                            scrub: true, // ⬅︎ スクロールに同期
                        },
                    }
                );
            });
        }
    }, []);

    return (
        <section id="education" className="non-colored-section">
            <div className="inner" ref={sectionRef}>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="section-title-area">
                        <div className="section-title">Education</div>
                        <div className="section-intro">
                            {t('intro')}
                        </div>
                    </div>

                    <div className="section-content">
                        <div className="space-y-12 mx-auto px-6">
                            {/* 京都大学 */}
                            <div className="flex items-start gap-4 edu-item">
                                <a href="https://www.kyoto-u.ac.jp/ja" target="_blank" rel="noopener noreferrer">
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <Image
                                            src="/edu/kyoto-uni.svg"
                                            alt="Kyoto University"
                                            width={56}
                                            height={56}
                                            className="transform transition duration-300 hover:scale-110 hover:shadow-md"
                                        />
                                    </div>
                                </a>
                                <div>
                                    <p className="text-sm text-darkgray">{t('edu1.period')}</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        {t('edu1.name')}
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        {t('edu1.description')}
                                    </p>
                                </div>
                            </div>

                            {/* ASU */}
                            <div className="flex items-start gap-4 edu-item">
                                <a href="https://www.asu.edu/" target="_blank" rel="noopener noreferrer">
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <Image
                                            src="/edu/asu-uni.svg"
                                            alt="Arizona State University"
                                            width={56}
                                            height={56}
                                            className="transform transition duration-300 hover:scale-110 hover:shadow-md"
                                        />
                                    </div>
                                </a>
                                <div>
                                    <p className="text-sm text-darkgray">{t('edu2.period')}</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        {t('edu2.name')}
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        {t('edu2.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}