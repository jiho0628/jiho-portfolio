'use client';

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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-whitegray w-[100rem] h-[50rem] rounded-lg p-10 relative shadow-lg flex">
                <button
                    className="absolute top-3 right-4 text-darkgray hover:text-lightgray text-2xl"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* 左側のテキスト内容 */}
                <div className="flex-1 pr-6 overflow-y-auto">
                    <h2 className="text-[2rem] font-semibold mb-4">{productGroup.title}</h2>
                    <p className="text-sm text-darkgray mb-2">{productGroup.date}</p>
                    <div className="text-[1.5rem] font-semibold pb-2">詳細</div>
                    <p className="text-base leading-relaxed pb-8">
                        {productGroup.detail}
                    </p>
                    <div className="text-[1.5rem] font-semibold">技術スタック</div>
                    <ul className="list-disc list-inside mt-4">
                        {productGroup.skill.map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                    </ul>
                </div>

                {/* 右側のカルーセル画像 */}
                {/* 右側のカルーセル画像 */}
                <div className="w-[60%] h-full flex flex-col items-center justify-center relative overflow-hidden">
                    <img
                        src={productGroup.image[currentIndex]}
                        alt={`preview-${currentIndex}`}
                        className="w-full h-full object-contain rounded"
                    />

                    {/* インデックス表示 */}
                    <div className="mt-4 text-sm text-darkgray">
                        {currentIndex + 1} / {productGroup.image.length}
                    </div>

                    {productGroup.image.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-whitegray hover:text-whitegray bg-darkblue hover:bg-darkgray w-10 h-10 rounded-full flex items-center justify-center shadow opacity-60"
                            >
                                <TbChevronLeft />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-whitegray hover:text-whitegray bg-darkblue hover:bg-darkgray w-10 h-10 rounded-full flex items-center justify-center shadow opacity-60"
                            >
                                <TbChevronRight />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductModal;