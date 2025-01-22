"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const TESTIMONIALS_DATA = [
  {
    name: "Ifeanyi E.",
    comment:
      "ALT Educational Consult made my study abroad journey seamless. From application to visa processing, their support was exceptional. Now, I’m pursuing my dream course. Thank you, ALT!",
  },
  {
    name: "Adaora C.",
    comment:
      "I never thought studying abroad was possible until I met ALT Educational Consult. Their team guided me step-by-step, and now I’m living my dream!",
  },
  {
    name: "Tunde A.",
    comment:
      "ALT Educational Consult’s expertise in study abroad consulting is unmatched. They helped me secure a scholarship, and I couldn’t be more grateful!",
  },
  {
    name: "Mary O.",
    comment:
      "I highly recommend ALT Educational Consult. Their professionalism and dedication are top-notch. I’m now studying thanks to their excellent guidance.",
  },
  {
    name: "Chidera N.",
    comment:
      "The team at ALT made the process so easy. They truly care about their clients. I’m now pursuing my dreams. Thank you, ALT!",
  },
  {
    name: "Emeka K.",
    comment:
      "ALT Educational Consult helped me every step of the way. I’m now in school pursuing my degree. Their service is worth every penny!",
  },
  {
    name: "Zainab A.",
    comment:
      "From school selection to visa approval, ALT Educational Consult was with me all through. I’m now studying successfully. They’re simply the best!",
  },
  {
    comment:
      "ALT Educational Consult turned my dream of studying abroad into a reality. Their support is incredible. Highly recommended!",
    name: "Femi T.",
  },
  {
    comment:
      "I couldn’t have done it without ALT Educational Consult. Their knowledge and experience made everything stress-free. I’m now a student!",
    name: "Amina S.",
  },
  {
    comment:
      "ALT Educational Consult is truly amazing! They secured my admission in record time, and I’m now pursuing my dreams.",
    name: "Samuel O.",
  },
  {
    comment:
      "Thank you, ALT, for making my study abroad dream come true. Your dedication and expertise are unmatched. Forever grateful!",
    name: "Ngozi M.",
  },
  {
    comment:
      "ALT Educational Consult’s guidance was invaluable. I’m now studying my dream course. They’re the best!",
    name: "Seyi B.",
  },
  {
    comment:
      "I trusted ALT Educational Consult, and they delivered beyond my expectations. I’m now successfully pursuing my studies. Thank you!",
    name: "Ibrahim L.",
  },
  {
    comment:
      "ALT Educational Consult made what seemed impossible a reality. I’m now studying, and it’s all thanks to them!",
    name: "Blessing E.",
  },
  {
    comment:
      "ALT was a lifesaver! Their attention to detail ensured I got into my preferred university. Amazing team!",
    name: "Chioma U.",
  },
  {
    comment:
      "Thanks to ALT Educational Consult, I’m now pursuing my dream degree. Their service is reliable and efficient.",
    name: "David I.",
  },
  {
    comment:
      "ALT Educational Consult’s expertise in international education is outstanding. I’m now a student achieving my goals. I owe them everything!",
    name: "Sarah O.",
  },
  {
    comment:
      "ALT Educational Consult made my transition to a new academic environment so smooth. Their team is patient, knowledgeable, and supportive. Highly recommend!",
    name: "Ahmed K.",
  },
  {
    comment:
      "Choosing ALT Educational Consult was the best decision I made. I’m now pursuing my education, and it’s all thanks to their support.",
    name: "Kemi F.",
  },
  {
    comment:
      "ALT Educational Consult turned my dream into reality. Their guidance was flawless, and I’m now thriving as a student. Thank you, ALT!",
    name: "Uchenna J.",
  },
];

export default function Testimonials() {
  const [testimonials] = useState(() => {
    const clone = [...TESTIMONIALS_DATA];
    const randomLength = Math.max(5, Math.floor(Math.random() * clone.length));
    const randomTestimonials = [];

    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * clone.length);
      randomTestimonials.push(clone[randomIndex]);
      clone.splice(randomIndex, 1);
    }

    return randomTestimonials;
  });

  return (
    <div className="w-full relative h-[30rem] lg:min-h-[40rem] flex items-center justify-center">
      <video loop autoPlay className="w-full h-full object-cover">
        <source src="/assets/testimony.webm" />
      </video>
      <div
        className="absolute bg-black/50 min-h-[50%] w-full md:max-w-md lg:max-w-[75%] z-30 text-white p-4 gap-6 flex flex-col items-center justify-around"
      >
        <h1 className="text-center">Candidate Testimonials</h1>
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={`testimonial-${idx}-${testimonial.name}`}>
                <div className="mx-auto w-full md:w-[40ch] lg:w-[56ch] space-y-4">
                  <p className="text-center">{testimonial.comment}</p>
                  <p className="font-bold text-sm text-right">{testimonial.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
