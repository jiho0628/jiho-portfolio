// ✅ Skill.tsx（i18n対応版）
'use client';

import Image from 'next/image';
import StarRating from './StarRating';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

type SkillItems = {
    name: string;
    description: string;
    icon: string;
    rating: number
}

export default function Skill() {
    const t = useTranslations('Skills');
    const sectionRef = useRef<HTMLDivElement>(null);

    const categories = ['Frontend', 'Backend', 'Database', 'Infrastructure', 'MachineLearning', 'Etc'] as const;

    useEffect(() => {
        const items = sectionRef.current?.querySelectorAll('.skill-item');

        if (items) {
            items.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            end: 'top 10%',
                            toggleActions: 'play reverse play reverse',
                            scrub: true,
                        }
                    }
                );
            });
        }
    }, []);

    return (
        <section id="skills" className="non-colored-section">
            <div className="inner" ref={sectionRef}>
                <div className="inner text-center">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="section-title-area">
                            <div className="section-title">SKILLS</div>
                            <div className="section-intro whitespace-pre-line">{t('intro')}</div>
                        </div>

                        {categories.map((categoryKey, i) => {
                            const group = t.raw(`groups.${categoryKey}`);
                            const items = group.items as Record<string, SkillItems>;

                            return (
                                <div key={i} className="my-12">
                                    <h3 className="text-sub-title text-darkblue mb-6">{group.title}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 md:px-4">
                                        {Object.entries(items).map(([skillName, skillDesc], j) => (
                                            <div key={j} className="flex items-start gap-8 p-1 rounded skill-item">
                                                <div className="w-18 h-18 flex items-center justify-center flex-shrink-0">
                                                    <Image
                                                        src={`/skills/${skillDesc.icon}`}
                                                        width={80}
                                                        height={80}
                                                        alt={skillName}
                                                        className="object-contain mt-1"
                                                    />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-base font-bold text-darkblue pb-2">{skillDesc.name}</div>
                                                    <StarRating score={skillDesc.rating} /> {/* ★ スコアを調整したい場合はここを拡張 */}
                                                    <div className="text-base text-darkblue leading-snug">{skillDesc.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}