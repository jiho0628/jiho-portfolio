import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutMe() {
    const t = useTranslations('AboutMe');
    return (
        <section id="about" className="colored-section">
            <div className="inner">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="section-title-area">
                        <div className="section-title">About Me</div>
                        <div className="section-intro">{t('intro')}</div>
                    </div>
                    <div className="section-content max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 sm:gap-14 md:gap-20">
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
                            <p className="text-sm sm:text-base leading-relaxed">
                                {t('description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}