// components/AboutMe.tsx
import Image from 'next/image'

export default function AboutMe() {
    return (
        <section id="about" className="colored-section">
            <div className="inner">
                <div className="section-title-area">
                    <div className="section-title">
                        About Me
                    </div>
                    <div className="section-intro">
                        はじめまして！
                    </div>
                </div>
                <div className="section-content">
                    <div className="max-w-5xl mx-auto px-10 flex flex-col md:flex-row items-center gap-20">
                        {/* プロフィール画像 */}
                        <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src="/etc/profile.jpg"
                                alt="Profile"
                                width={160}
                                height={160}
                                className="object-cover w-40 h-40 rounded-full"
                            />
                        </div>

                        {/* 自己紹介文 */}
                        <div>
                            <p className="text-base leading-relaxed">
                                こんにちは、柳 智浩（りゅう じほ）と申します。
                                中国人の両親のもと、千葉県で生まれ育ち、大学進学を機に京都へ移住しました。<br />
                                趣味は旅行で、いつか日本全国と世界中を旅するのが夢です。
                                見たことのない景色や文化に触れることが、自分の成長にもつながると信じています。<br />

                                現在は、京都大学工学部情報学科に所属しています。
                                研究室は谷口研究室に所属しており、マルチモーダルAIについて研究しました。
                                プレ研究では、画像とテキストを組み合わせたAIシステムの開発に取り組みました。
                                また、アメリカ・アリゾナ州の大学へ1年間留学し、
                                現地でもコンピュータサイエンスを学びました。<br />

                                今は、AIの研究ができるフルスタックエンジニアを目指して、主にバックエンドをはじめ、フロントエンド、インフラまで幅広く挑戦しています。
                                自分の作ったプロダクトが人の役に立ち、少しでも世の中を良くすることが一番の喜びだと思っています。
                                そのために、現在もさまざまな技術分野の学習に励んでいます。

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}