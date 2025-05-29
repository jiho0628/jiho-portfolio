'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

type ProductGroup = {
    name: string;
    detail: string;
    date: string;
    image: string[];
    title: string;
    skill: string[];
};

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    productGroup: ProductGroup | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, productGroup }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCurrentIndex(0);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !productGroup) return null;

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? productGroup.image.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === productGroup.image.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-2"
            onClick={onClose} // 外側クリックで閉じる
        >
            <div
                className="bg-whitegray w-full max-w-7xl h-[60vh] rounded-lg p-4 md:p-10 relative shadow-lg flex flex-col md:flex-row overflow-hidden"
                onClick={(e) => e.stopPropagation()} // モーダル内クリックでは閉じない
            >
                {/* 画像部分 */}
                <div className="w-full md:w-[60%] h-[50%] md:h-full flex flex-col items-center justify-center relative overflow-hidden">
                    <Image
                        src={productGroup.image[currentIndex]}
                        alt={`preview-${currentIndex}`}
                        width={400}   // ← 必須
                        height={240}  // ← 必須
                        className="w-full h-full object-contain rounded"
                    />

                    <div className="mt-2 text-sm text-darkgray">
                        {currentIndex + 1} / {productGroup.image.length}
                    </div>

                    {productGroup.image.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-whitegray bg-darkblue hover:bg-darkgray w-10 h-10 rounded-full flex items-center justify-center shadow opacity-60"
                            >
                                <TbChevronLeft />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-whitegray bg-darkblue hover:bg-darkgray w-10 h-10 rounded-full flex items-center justify-center shadow opacity-60"
                            >
                                <TbChevronRight />
                            </button>
                        </>
                    )}
                </div>

                {/* テキスト部分 */}
                <div className="flex-1 overflow-y-auto mt-6 md:mt-0 md:pl-6">
                    <h2 className="text-[1.5rem] md:text-[2rem] font-semibold mb-4">{productGroup.title}</h2>
                    <p className="text-sm text-darkgray mb-2">{productGroup.date}</p>
                    <div className="text-[1.2rem] font-semibold pb-2">詳細</div>
                    <p className="text-base leading-relaxed pb-6 whitespace-pre-wrap">{productGroup.detail}</p>
                    <div className="text-[1.2rem] font-semibold">技術スタック</div>
                    <ul className="list-disc list-inside mt-4">
                        {productGroup.skill.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;