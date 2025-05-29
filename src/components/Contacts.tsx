import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Contacts() {
    const t = useTranslations('Contacts');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            comment: formData.get("comment"),
        };

        const result = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (result.ok) {
            alert(t('success'));
            formRef.current?.reset();
        } else {
            alert(`${t('error')} ${result.status}`);
        }
    };

    return (
        <section id="contacts" className="non-colored-section">
            <div className="inner text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="section-title-area">
                        <div className="section-title">{t('title')}</div>
                        <div className="section-intro text-sm sm:text-base whitespace-pre-line">
                            {t('intro')}
                        </div>
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6 max-w-2xl mx-auto px-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder={t('name')}
                            className="border-b border-gray-400 p-2 focus:outline-none bg-transparent w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t('email')}
                            className="border-b border-gray-400 p-2 focus:outline-none bg-transparent w-full"
                            required
                        />
                    </div>
                    <textarea
                        name="comment"
                        placeholder={t('comment')}
                        rows={4}
                        className="w-full border-b border-gray-400 p-2 focus:outline-none bg-transparent"
                        required
                    />
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-darkblue text-white px-6 py-2 rounded hover:bg-opacity-80 transition"
                        >
                            {t('send')}
                        </button>
                    </div>
                </form>

                <div className="flex justify-center gap-6 mt-8">
                    <a href="https://github.com/jiho0628" target="_blank" rel="noopener noreferrer">
                        <Image src="/etc/github.svg" alt="GitHub" width={40} height={40} className="hover:scale-110" />
                    </a>
                    <a href="https://www.linkedin.com/in/智浩-柳-1146272a7" target="_blank" rel="noopener noreferrer">
                        <Image src="/etc/linkedin.svg" alt="LinkedIn" width={40} height={40} className="hover:scale-110" />
                    </a>
                </div>
            </div>
        </section>
    );
}