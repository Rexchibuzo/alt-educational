import Link from "next/link";
import OurServices from "./_components/our_services";
import Stats from "./_components/stats";
import LandingCarousel from "./_components/landing-carousel";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-6 justify-center pb-6">
      <LandingCarousel />
      <div className="container py-12 space-y-12">
        <p>
          At ALT Educational Consult, we specialize in helping students like you
          realize their dreams of studying abroad. With our years of experience
          and a team of dedicated experts, we have successfully assisted
          numerous students in gaining admission into A-Level, Foundation,
          Undergraduate, Postgraduate and PHD degree Programs at top and
          world-ranked institutions around the world including United Kingdom,
          United States of America, Canada, and Ireland.{" "}
          <Link
            href="/about_us"
            className="hover:underline transition-all duration-200 font-semibold"
          >
            Read more
          </Link>
        </p>

        <div className="space-y-4 pt-6 border-t">
          <h2 className="text-center">Our Vision</h2>
          <p>
            Named after Alexander Lucius Twilight who was recognized as the
            first African American to have earned a bachelor&apos;s degree from
            an American college or university, ALT Educational Consult Limited
            desires to see the African child rise to the top through education.
          </p>
        </div>
      </div>
      <Stats />
      <OurServices />
      <Testimonials />
    </div>
  );
}
