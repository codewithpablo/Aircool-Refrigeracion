"use client";

import * as React from "react";
import imagenes from "@/constants";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"; // 👈 Importá el plugin

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function LandingSlider() {
  // Creamos la referencia del plugin autoplay
  const plugin = React.useRef(
    Autoplay({
      delay: 2000, // ⏱ tiempo entre slides (3s)
      stopOnInteraction: false, // no se detiene al interactuar
      stopOnMouseEnter: false, // no se pausa al pasar el mouse
    })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true, // 🔁 movimiento infinito
      }}
      plugins={[plugin.current]} // 🌀 activamos autoplay
      className="w-full h-[100vh] m-0 p-0"
    >
      <CarouselContent className="w-full h-[100vh] m-0 p-0 [&>*]:p-0">
        {imagenes.map((img, index) => (
          <CarouselItem key={index} className="w-full h-[100vh] m-0 p-0">
            <div className="h-full w-full">
              <Image
                src={img.src}
                alt={img.nombre}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
