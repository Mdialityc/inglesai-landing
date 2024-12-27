import { Star } from "lucide-react";

interface Props {
  rating: number;
  maxRating?: number;
}

export default function StarRating({ rating, maxRating = 5 }: Props) {
  return (
    <div className="flex gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          size={24}
          className={`${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}
