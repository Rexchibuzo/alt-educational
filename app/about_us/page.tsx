import { Metadata } from "next";

import aboutUsImg from "@/assets/about-us2.jpg";
import Jumbotron from "@/components/ui/jumbotron";

export const metadata: Metadata = {
  title: "About Us - Alt Educational Consult Limited",
  description:
    "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  openGraph: {
    type: "website",
    title: "About Us - Alt Educational Consult Limited",
    description:
      "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  },
  twitter: {
    title: "About Us - Alt Educational Consult Limited",
    description:
      "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  },
};

function AboutUsPage() {
  return (
    <div className="w-full flex flex-col gap-6 justify-center pb-6">
      <Jumbotron title="About Us" imageUrl={aboutUsImg.src} />

      <div className="w-full flex flex-col">
        <div className="space-y-6 container px-4 py-12">
          <p>
            At ALT Educational Consult, we specialize in helping students like
            you realize their dreams of studying abroad. With our years of
            experience and a team of dedicated experts, we have successfully
            assisted numerous students in gaining admission into A-Level,
            Foundation, Undergraduate, Postgraduate and PHD degree Programs at
            top and world-ranked institutions around the world including United
            Kingdom, United States of America, Canada, and Ireland.
          </p>

          <p>
            We understand that selecting the right university and course can be
            challenging, which is why our extensively trained and experienced
            counselors are here to assist you in making this crucial decision.
            We will engage with you to understand your study needs, motivations,
            and ultimate aspirations comprehensively, and based on this, we will
            collaborate with you to compile a tailored list of suitable options
            thereby giving you a seamless experience.
          </p>
        </div>
        <div className="space-y-2 py-12 bg-secondary">
          <div className="container px-4 space-y-6">
            <h2>Our Vision</h2>
            <p>
              Named after Alexander Lucius Twilight, who was recognized as the
              first African American to graduate from an American college or
              university with a degree, ALT Educational Consult Limited desires
              to see the African child rise to the top through education.
            </p>
            <p>
              We are a leading consulting firm based in Nigeria, dedicated to
              guiding students through the complexities of studying abroad. At
              ALT Educational Consult, we believe that international education
              is the key to unlocking new opportunities and broadening horizons.
              Our team of experienced consultants is committed to helping
              students navigate the entire study abroad process—from selecting
              the right institution and course to securing scholarships, visas,
              and accommodation.
            </p>
            <p>
              Our goal is to empower Nigerian students to elevate their lives
              and achieve their dreams by providing personalized guidance and
              support. Through our services, we aim to inspire and facilitate
              academic excellence and personal growth, ensuring that the African
              child has access to the global education they deserve.
            </p>
            <p>
              Let us help you embark on your journey towards academic and
              professional success. Together, we can make your international
              education dreams a reality.
            </p>
          </div>
        </div>

        <div className="space-y-6 py-12 container">
          <h2 className="text-center">Why Choose Us</h2>

          <p>
            We understand that the process from searching for a suitable course
            to visa application can be challenging, that is why we are here to
            make it a smooth seamless process for you.
          </p>
          <p>
            We know that every student is unique. Our services are tailored to
            your individual needs and aspirations.
          </p>
          <p>
            We also recognize that settling into a new country can be quite
            challenging, especially for first-time travelers, which is why we
            don&apos;t just stop at getting you admitted into the university of
            your dreams, but with our network of students in various
            universities all over the world, we take a step further to ensure
            that you settle into your new environment and have the best possible
            head start you can need.
          </p>
          <p>
            Our success stories speak for themselves. Many of our students have
            been accepted into top universities worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
