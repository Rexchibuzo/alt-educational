"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import aboutusImg from "@/assets/about-us.jpg";
import resumeImg from "@/assets/resume.jpg";
import reviewImg from "@/assets/review.jpg";
import Autoplay from "embla-carousel-autoplay";

const headings = [
  {
    image: reviewImg,
    title:
      "Take the first step towards your future. Contact us for a free consultation and discover how we can help you achieve your academic goals",
  },
];

function LandingCarousel() {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div
            className="relative min-h-80 lg:min-h-[600px] -mt-2 pt-2 bg-no-repeat bg-cover w-full bg-bottom"
            style={{ backgroundImage: `url(${aboutusImg.src})` }}
          >
            <div className="p-4 inset-0 absolute z-10 bg-black/40 flex flex-col items-center justify-center text-center">
              <div className="text-slate-50 lg:w-[65ch]">
                <p className="tracking-tight text-lg text-center">
                  It’s never too late to{" "}
                  <span className="font-bold text-4xl">chase your dreams</span>{" "}
                  Apply to join our next intake
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className="relative min-h-80 lg:min-h-[600px] -mt-2 pt-2 bg-no-repeat bg-cover w-full bg-bottom"
            style={{ backgroundImage: `url(${resumeImg.src})` }}
          >
            <div className="p-4 inset-0 absolute z-10 bg-black/40 flex flex-col items-center justify-center text-center">
              <div className="text-slate-50 lg:w-[65ch]">
                <p className="tracking-tight text-lg text-center">
                  <span className="font-bold text-4xl">Unlock Your Future</span>{" "}
                  with Our Expert Guidance! Talk to us today
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div
            className="relative min-h-80 lg:min-h-[600px] -mt-2 pt-2 bg-no-repeat bg-cover w-full bg-bottom"
            style={{ backgroundImage: `url(${reviewImg.src})` }}
          >
            <div className="p-4 inset-0 absolute z-10 bg-black/40 flex flex-col items-center justify-center text-center">
              <div className="text-slate-50 lg:w-[65ch]">
                <p className="tracking-tight text-lg text-center">
                  <span className="font-bold text-4xl">
                    Take the first step
                  </span>{" "}
                  towards your future. Contact us for a free consultation and
                  discover how we can help you{" "}
                  <span className="font-bold text-4xl">
                    achieve your academic goals
                  </span>
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default LandingCarousel;
