'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { TbCircleLetterJFilled } from 'react-icons/tb';
import gsap from 'gsap';

function getResponsiveConfigSafe(): { numBalls: number; size: number; speed: number; opacity: number } {
    // SSR時はwindowがないのでPC用デフォルト
    if (typeof window === 'undefined') {
        return { numBalls: 20, size: 64, speed: 0.5, opacity: 0.10 };
    }
    const vw = window.innerWidth;
    if (vw < 600) {
        return { numBalls: 8, size: 36, speed: 0.3, opacity: 0.18 };
    } else if (vw < 900) {
        return { numBalls: 14, size: 48, speed: 0.4, opacity: 0.14 };
    } else {
        return { numBalls: 20, size: 64, speed: 0.5, opacity: 0.10 };
    }
}

interface Ball {
    x: number;
    y: number;
    dx: number;
    dy: number;
    ref: React.RefObject<HTMLDivElement | null>;
}

export default function BouncingBackground() {
    const [mounted, setMounted] = useState(false);
    const [balls, setBalls] = useState<Ball[]>([]);
    const [config, setConfig] = useState(getResponsiveConfigSafe());
    const animationFrameRef = useRef<number | null>(null);

    // 画面サイズ変更時に再設定
    useEffect(() => {
        const handleResize = () => setConfig(getResponsiveConfigSafe());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setMounted(true);
        // マウント時に一度だけconfigを更新
        setConfig(getResponsiveConfigSafe());
    }, []);

    // 👇 最初に取得しておく（スクロールで変わらない高さを維持する）
    const stableVh = useRef<number | null>(null);  // nullで初期化（未設定）

    useEffect(() => {
        if (!mounted) return;

        // ✅ 一度だけ設定
        if (stableVh.current === null) {
            stableVh.current = window.innerHeight;
        }

        const vw = window.innerWidth;

        const createdBalls: Ball[] = Array.from({ length: config.numBalls }).map(() => {
            const angle = Math.random() * 2 * Math.PI;
            const dx = Math.cos(angle) * config.speed;
            const dy = Math.sin(angle) * config.speed;

            return {
                x: Math.random() * (vw - config.size),
                y: Math.random() * ((stableVh.current ?? window.innerHeight) - config.size),
                dx,
                dy,
                ref: React.createRef<HTMLDivElement | null>(),
            };
        });

        setBalls(createdBalls);

        return () => cancelAnimationFrame(animationFrameRef.current!);
    }, [mounted, config]);  // ← ここで再実行されても設定は変わらない

    useEffect(() => {
        if (balls.length === 0) return;

        const animate = () => {
            const vw = window.innerWidth;
            const vh = stableVh.current ?? window.innerHeight;

            for (const ball of balls) {
                ball.x += ball.dx;
                ball.y += ball.dy;

                if (ball.x <= 0 || ball.x + config.size >= vw) ball.dx *= -1;
                if (ball.y <= 0 || ball.y + config.size >= vh) ball.dy *= -1;

                if (ball.ref.current) {
                    gsap.set(ball.ref.current, { x: ball.x, y: ball.y });
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        balls.forEach((ball) => {
            if (ball.ref.current) {
                gsap.to(ball.ref.current, {
                    rotation: 360,
                    duration: 6,
                    repeat: -1,
                    ease: 'linear',
                });
            }
        });
    }, [balls, config]);

    useEffect(() => {
        const handleChangeAll = () => {
            setBalls(prevBalls => {
                return prevBalls.map(ball => {
                    const newDx = ball.dy;
                    const newDy = -ball.dx;
                    return { ...ball, dx: newDx, dy: newDy };
                });
            });
        };

        window.addEventListener('changeDirectionAll', handleChangeAll);
        return () => window.removeEventListener('changeDirectionAll', handleChangeAll);
    }, []);

    const changeDirection = (index: number) => {
        const ball = balls[index];
        if (!ball) return;

        const newDx = ball.dy;
        const newDy = -ball.dx;
        ball.dx = newDx;
        ball.dy = newDy;
    };

    if (!mounted) return null;

    return createPortal(
        <>
            {balls.map((ball, i) => (
                <div
                    key={i}
                    ref={ball.ref}
                    onClick={() => changeDirection(i)}
                    style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        width: config.size,
                        height: config.size,
                        pointerEvents: 'auto',
                        zIndex: 15,
                        cursor: 'pointer',
                        touchAction: 'manipulation',
                    }}
                >
                    <TbCircleLetterJFilled
                        size={config.size}
                        className="text-darkgray"
                        style={{ opacity: config.opacity }}
                    />
                </div>
            ))}
        </>,
        document.body
    );
}