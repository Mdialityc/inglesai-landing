import Image from "next/image";
import StarRating from "./components/StarRating/StarRating";

interface TestimonialCardProps {
  imageSrc: string;
  quote: string;
  rating: number;
}

export default function OpinionCard({
  imageSrc,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="max-w-sm flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50">
      <div className="mb-4 flex justify-center">
        <div className="relative w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] overflow-hidden rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src={imageSrc}
            alt="Testimonial author"
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
      <div className="mb-4 text-center overflow-x-auto text-gray-700 h-[100px]">
        <p>&quot;{quote}&quot;</p>
      </div>
      <div className="flex justify-center transition-transform duration-300 ease-in-out hover:scale-110">
        <StarRating rating={rating} />
      </div>
    </div>
  );
}
