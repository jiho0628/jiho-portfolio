'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
                            2021年4月に大学に入学をし、1年間の留学を終え、2026年3月に卒業予定です。<br />
                            その後大学院に進学し、2028年3月に卒業予定です。<br />
                            アイコンをクリックして大学のホームページを見ることができます。
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
                                    <p className="text-sm text-darkgray">2021/04 - 現在</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        京都大学工学部情報学科
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        現在学部４回生で、数学や物理といった基礎科目に加え、
                                        コンピュータサイエンス、グラフ理論、アルゴリズム、人工知能など、幅広い分野を学んできました。
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
                                    <p className="text-sm text-darkgray">2024/08 - 2025/05</p>
                                    <h3 className="text-sub-title font-semibold text-darkblue">
                                        Arizona State University
                                    </h3>
                                    <p className="text-base leading-relaxed text-darkblue mt-2">
                                        学部４回生の時に、１年間アリゾナ州にあるアリゾナ州立大学にコンピューターサイエンスを専攻として、交換留学をしました。
                                        現地の生徒たちと一緒に授業を受けることはとても良い刺激になりました。
                                        また、アリゾナ州立大学は、留学生の受け入れがアメリカの中でも最大級で、
                                        アメリカ人をはじめメキシコ人、サウジアラビア人、パキスタン人、タイ人、ドイツ人など日本で生活していては
                                        あまり出会う機会のない国の人々と交流することができました。
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