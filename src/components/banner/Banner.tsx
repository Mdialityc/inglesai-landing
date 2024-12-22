import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full min-h-[100svh] flex ">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/banner image.png"
          alt="Students studying"
          fill
          sizes="100vw"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 text-background">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            Smart Academy
          </h1>
          <p className="text-2xl sm:text-2xl md:text-3xl leading-relaxed max-w-lg ">
            Prepara FCE con Inteligencia Artificial y pasa de un b1 a b2 a
            partir de <span className="font-semibold">16€/mes.</span>
          </p>
        </div>
        <Button
          size="lg"
          className="bg-button hover:bg-button-hover text-button-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto mt-36"
        >
          PROBAR GRATIS
        </Button>
      </div>
    </div>
  );
}
