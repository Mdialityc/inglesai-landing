import React from "react";
import OpinionCard from "./components/OpinionCard/OpinionCard";
import { opinions } from "./lib/opinions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Opinions() {
  return (
    <div className="flex flex-col gap-16 items-center p-8">
      <p className="text-[#1B2A5D] text-5xl font-bold">Opiniones</p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="p-6">
          {opinions.map((opinion, index) => (
            <CarouselItem
              key={index}
              className=" xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            >
              <OpinionCard
                quote={opinion.quote}
                rating={opinion.rating}
                imageSrc={"/images/Opinion.png"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -top-8 left-[40%] transform translate-x-[-50%] bg-button text-white p-3 rounded-full shadow-md hover:bg-button-hover transition duration-300" />
        <CarouselNext className="absolute -top-8 right-[40%] transform translate-x-[50%] bg-button text-white p-3 rounded-full shadow-md hover:bg-button-hover transition duration-300" />
      </Carousel>
    </div>
  );
}
