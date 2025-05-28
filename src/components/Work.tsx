'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
                            インターンの経歴です。今後も長期、短期含め色々なインターンを経験したいと考えています。<br />
                            アイコンをクリックして会社のホームページを見ることができます。
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
                                    <p className="text-sm text-darkgray">2024/03 - 2024/07</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        muilab Inc.
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        長期インターンの予定でしたが、留学を機に一度お休みをしています。
                                        主にAWSを使ってインフラの構築に携わっていました。また、TypeScriptでテストケースを書いていました。
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
                                    <p className="text-sm text-darkgray">2024/05 - 現在</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        StarUp Inc.
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        長期インターンとして働いています。主に、AIの開発、バックエンドの構築に携わっています。
                                        また、図面管理サービスのプロダクトのPMとしても携わっています。
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