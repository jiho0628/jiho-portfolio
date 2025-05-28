'use client';
import { useRef } from 'react';
import Image from 'next/image';

export default function Contacts() {
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
        console.log(result)
        if (result.status == 200 || result.status == 201) {
            alert('ありがとうございます！メッセージを送信しました！');
            formRef.current?.reset();
        } else {
            alert(`失敗しました ${result.status}`);
        }
    };
    return (
        <section id="contacts" className="non-colored-section">
            <div className="inner text-center">
                <div className="section-title-area">
                    <div className="section-title">Contacts</div>
                    <div className="section-intro">
                        最後までご覧頂きありがとうございます。
                        このサイトを通して私のことを少しでも知っていただければ幸いです。<br />
                        このサイトや、私に関して何かコメントがありましたら、下記フォームをご利用ください。
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6 max-w-2xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border-b border-gray-400 p-2 focus:outline-none bg-transparent"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="border-b border-gray-400 p-2 focus:outline-none bg-transparent"
                            required
                        />
                    </div>
                    <textarea
                        name="comment"
                        placeholder="Comment"
                        rows={4}
                        className="w-full border-b border-gray-400 p-2 focus:outline-none bg-transparent"
                        required
                    />
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-darkblue text-white px-6 py-2 rounded hover:bg-opacity-80 transition"
                        >
                            SEND
                        </button>
                    </div>
                </form>

                {/* ▼ アイコンだけのSNSリンク */}
                <div className="flex justify-center gap-6 mt-8">

                    {/* GitHub */}
                    <a
                        href="https://github.com/jiho0628"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/etc/github.svg"
                            alt="Kyoto University"
                            width={40}
                            height={40}
                            className="transform transition duration-300 hover:scale-110 hover:shadow-md"
                        />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/智浩-柳-1146272a7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/etc/linkedin.svg"
                            alt="Kyoto University"
                            width={40}
                            height={40}
                            className="transform transition duration-300 hover:scale-110 hover:shadow-md"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}