'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TbCircleLetterJFilled } from "react-icons/tb";

interface LoaderIconProps {
    onFinish: () => void;
}

const NUM_CIRCLES = 10;

const LoaderIcon: React.FC<LoaderIconProps> = ({ onFinish }) => {
    const iconRef = useRef<HTMLDivElement>(null);
    const circlesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // スクロール防止
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        // アイコン初期状態
        gsap.set(iconRef.current, {
            opacity: 0,
            scale: 0,
            y: -100,
            visibility: 'visible',
        });

        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(onFinish, 500);
            },
        });

        // バウンドアニメーション
        tl.to(iconRef.current, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'bounce.out',
        });

        // 円のランダム拡張アニメーション
        circlesRef.current.forEach((circle) => {
            const angle = Math.random() * Math.PI * 2;
            const distance = 150 + Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const delay = Math.random() * 0.5;

            // 初期状態を gsap.set で明示
            gsap.set(circle, {
                scale: 0,
                x: 0,
                y: 0,
                opacity: 1,
                display: 'block',
                visibility: 'visible',
            });

            gsap.to(circle, {
                scale: 10 + Math.random() * 4,
                x,
                y,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out',
                delay,
            });
        });

        // アイコン全体をフェードアウト
        tl.to(iconRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.4,
        });
    }, [onFinish]);

    return (
        <div className="fixed inset-0 bg-whitegray z-[100] flex items-center justify-center overflow-visible">
            <div ref={iconRef} className="z-20 opacity-0 scale-0 invisible text-darkblue text-6xl">
                <TbCircleLetterJFilled />
            </div>

            {/* ランダム拡張円 */}
            {Array.from({ length: NUM_CIRCLES }).map((_, i) => (
                <div
                    key={i}
                    className="absolute top-1/2 left-1/2 z-10 text-darkblue text-2xl"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    ref={(el) => {
                        circlesRef.current[i] = el;
                    }}
                >
                    <TbCircleLetterJFilled />
                </div>
            ))}
        </div>
    );
};

export default LoaderIcon;