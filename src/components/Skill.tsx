'use client'
import Image from 'next/image';
import StarRating from './StarRating';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Skill = {
    name: string;
    description: string;
    icon: string;
    rating: number;
};

type SkillGroup = {
    title: string;
    skills: Skill[];
};

const skillGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        skills: [
            {
                name: 'TypeScript',
                description: 'StarUpでの図面管理システムの作成の際に使用しました。環境構築から実装までできます。このポートフォリオ作成の際にも使用しています。',
                icon: '/skills/typescript.svg', rating: 3
            },
            {
                name: 'HTML',
                description: '主にTypeScriptとReactでフロントエンドを実装する際に使用するため独学で学びました。',
                icon: '/skills/html.svg', rating: 3
            },
            {
                name: 'CSS3',
                description: '主にTypeScriptとReactでの実装の際に使用するため、独学で学びました。',
                icon: '/skills/css3.svg', rating: 3
            },
            {
                name: 'React',
                description: 'StarUpでの図面管理システムの作成の際とこのポートフォリオに使用しました。簡単な実装ができます。',
                icon: '/skills/react.svg', rating: 3
            },
            {
                name: 'Next.js',
                description: 'StarUpでの図面管理システムとこのポートフォリオに使用しました。',
                icon: '/skills/nextjs.svg', rating: 2
            },
            {
                name: 'Tailwind',
                description: 'CSSをより豊かにするために独学で勉強中です。このポートフォリオでも使用しています。',
                icon: '/skills/tailwind.svg', rating: 2
            },
        ],
    },
    {
        title: 'Backend',
        skills: [
            {
                name: 'Python',
                description: '大学の授業から今まで約4年間使用しています。StarUpでの図面管理システムのバックエンドで使用しました。ほぼ全ての実装を問題なくできます。',
                icon: '/skills/python.svg', rating: 4
            },
            {
                name: 'FastAPI',
                description: 'StarUpの図面管理システムで使用しました。API設計の経験もあります。',
                icon: '/skills/FastAPI.svg', rating: 4
            },
            {
                name: 'Java',
                description: '大学の授業で使用しました。京大では、Javaを使って遺伝アルゴリズムでマリオをクリアするAIを作りました。留学先では、Javaを使って5人のチームでスタンドアロンの簡単なRedditのようなアプリを作成しました。',
                icon: '/skills/Java-icon.svg', rating: 3
            },
            {
                name: 'C/C++',
                description: '大学の授業で使用しました。基礎的な文法を理解しています。',
                icon: '/skills/c++.svg', rating: 2
            },
            {
                name: 'Swift',
                description: '留学先の大学の授業で使用しました。MongoDBを使用した簡単な家計簿アプリを作成しました。',
                icon: '/skills/swift-icon.svg', rating: 2
            },
        ],
    },
    {
        title: 'Database',
        skills: [
            {
                name: 'MySQL',
                description: 'StarUpの図面管理システムでMySQLを使用していました。',
                icon: '/skills/mysql.svg', rating: 4
            },
            {
                name: 'Qdrant',
                description: 'StarUpの図面管理システムで図面のベクトルを保存するために使用していました。Pythonでの操作、UIからの簡単な操作ができます。',
                icon: '/skills/qdrant.svg', rating: 3
            },
        ],
    },
    {
        title: 'Infrastructure / Cloud',
        skills: [
            {
                name: 'AWS',
                description: 'mui labでS3、lambdaなどを使用していました。また、StarUpでもS3、RDS、CloudFrontなどを使用して、画像、メタデータを管理していました。',
                icon: '/skills/aws.svg', rating: 3
            },
            {
                name: 'Google Colab',
                description: '機械学習の際に主に使用しています。StarUpでの漢字手書き認識AIの学習、図面管理システムの図面検知AIの学習の際に使用しました。',
                icon: '/skills/google-colab.svg', rating: 4
            },
            {
                name: 'Docker',
                description: '主に実務で多用しています。簡単なコンテナの作成、コマンド操作ができます。',
                icon: '/skills/docker-mark-blue.svg', rating: 3
            },
            {
                name: 'Git / GitHub',
                description: 'バージョン管理の際に使用しています。基礎的なコマンド操作ができます。',
                icon: '/skills/git.svg', rating: 4
            },
            {
                name: 'Django',
                description: '勉強のために簡単なtwitterアプリ作成の際に使用しました。',
                icon: '/skills/django.svg', rating: 2
            },
        ],
    },
    {
        title: 'Machine Learning',
        skills: [
            {
                name: 'OpenCV',
                description: 'StarUpの図面管理システムの図面検知ロジックで使用しています。',
                icon: '/skills/opencv-icon.svg', rating: 3
            },
            {
                name: 'PyTorch',
                description: 'StarUpの図面管理システムの図面検知ロジックで使用しています。また、プレ研究の際にVAEを作成する際に使用しました。',
                icon: '/skills/pytorch-icon.svg', rating: 3
            },
            {
                name: 'TensorFlow',
                description: 'StarUpの漢字手書き認識AI学習の際に使用しました。また、大学の授業の手書き認識の際にも使用しました。',
                icon: '/skills/tensorflow.svg', rating: 2
            },
        ],
    },
];

export default function Skill() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
                )
            })
        }
    }, []);
    return (
        <section id="skills" className="non-colored-section">
            <div className="inner" ref={sectionRef}>
                <div className="inner text-center">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="section-title-area">
                            <div className="section-title">SKILLS</div>
                            <div className="section-intro">
                                バックエンドを中心に幅広く学んでいます。<br />
                                現在はフロントエンド、クラウドにも挑戦中です。
                            </div>
                        </div>

                        {/* 各カテゴリごとのセクション */}
                        {skillGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="my-12">
                                <h3 className="text-sub-title text-darkblue mb-6">{group.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 md:px-4">
                                    {group.skills.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-8 p-1 rounded skill-item"
                                        >
                                            <div className="w-18 h-18 flex items-center justify-center flex-shrink-0">
                                                <Image
                                                    src={skill.icon}
                                                    width={80}
                                                    height={80}
                                                    alt={skill.name}
                                                    className="object-contain mt-1"
                                                />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-base font-bold text-darkblue pb-2">
                                                    {skill.name}
                                                </div>
                                                <StarRating score={skill.rating} />
                                                <div className="text-base text-darkblue leading-snug">
                                                    {skill.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}