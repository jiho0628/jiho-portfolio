// components/StarRating.tsx
import { IoMdStar } from "react-icons/io";

type Props = {
    score: number; // 1〜5
};

export default function StarRating({ score }: Props) {
    return (
        <div className="flex text-darkblue pb-2">
            {[...Array(5)].map((_, i) => (
                <IoMdStar key={i} className={i < score ? 'text-darkblue' : 'text-gray-300'} />
            ))}
        </div>
    );
}