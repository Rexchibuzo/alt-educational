import { Metadata } from "next";
import Stack from "@/components/ui/stack";
import Jumbotron from "@/components/ui/jumbotron";

import ourServicesImg from "@/assets/our_services.jpg";
import { OUR_SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services - Alt Educational Consult Limited",
  description:
    "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  openGraph: {
    type: "website",
    title: "Our Services - Alt Educational Consult Limited",
    description:
      "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  },
  twitter: {
    title: "Our Services - Alt Educational Consult Limited",
    description:
      "Choosing A Suitable School & Program: Navigate Your Educational Joourney With Us",
  },
};

function ServiceDescription({
  service,
}: Readonly<{ service: Pick<(typeof OUR_SERVICES)[number], "title"> }>) {
  if (!service) return null;

  switch (service.title) {
    case "Accommodation Support":
      return (
        <p className="my-auto">
          Finding the right accommodation is crucial to a smooth transition
          abroad. We assist in identifying safe, comfortable, and affordable
          housing options tailored to your preferences, whether it&apos;s
          on-campus, off-campus, or private rentals. Your comfort and security
          are our priority.
        </p>
      );

    case "Foreign Currency Payment Support":
      return (
        <p className="my-auto">
          Managing foreign currency payments can be challenging. We offer
          guidance on secure and cost-effective methods to pay tuition and other
          expenses abroad. Our support helps you navigate currency exchange
          rates and avoid unnecessary fees.
        </p>
      );

    case "Funding & Scholarships Advice":
      return (
        <p className="my-auto">
          We guide students in identifying and applying for funding
          opportunities and scholarships that align with their academic and
          financial needs. Our experts provide personalized advice, ensuring you
          understand eligibility requirements and submission deadlines,
          increasing your chances of securing financial aid to make studying
          abroad more affordable.
        </p>
      );

    case "General Consultancy":
      return (
        <p className="my-auto">
          Not sure where to start? Our general consultancy services offer
          comprehensive advice tailored to your goals. Whether you need help
          choosing a study destination, understanding program options, or
          navigating the application process, we provide expert guidance to
          ensure your success.
        </p>
      );

    case "Graduate & Undergraduate Admissions":
      return (
        <p className="my-auto">
          We support our clients in securing graduate and undergraduate
          admissions to local and international colleges and universities for
          their chosen courses. Our services also include assistance with study
          visa processing, as well as providing career and visa advisory
          guidance.
        </p>
      );

    case "Personal Statement Review":
      return (
        <p className="my-auto">
          A compelling personal statement can set you apart. Our team reviews
          and refines your statement to ensure it highlights your strengths,
          achievements, and aspirations. We provide constructive feedback to
          make your application stand out, showcasing your unique story to
          admissions committees.
        </p>
      );

    case "Post Arrival Support":
      return (
        <p className="my-auto">
          Your journey doesn&apos;t end on arrival—we&apos;re here to help you
          settle in. From airport pickups to cultural orientation and local
          support, we ensure your transition to a new country is seamless, so
          you can focus on thriving in your academic and social environment.
        </p>
      );

    case "Visa Application & Support":
      return (
        <p className="my-auto">
          Navigating visa processes can be daunting, but we simplify it for you.
          From document preparation to interview guidance, our team ensures you
          meet all requirements for a successful visa application. Trust us to
          provide up-to-date advice and personalized support at every step.
        </p>
      );

    default:
      return null;
  }
}

function OurServicesPage() {
  return (
    <div className="w-full flex flex-col">
      <Jumbotron
        title="Our Services"
        imageUrl={ourServicesImg.src}
        subTitle="Choosing A Suitable School & Program: Navigate Your Educational
            Journey With Us"
      />

      <div className="w-full flex flex-col">
        <div className="container space-y-4 leading-6 py-12 px-4">
          <p>
            Making the choice of pursing a higher education program abroad can
            be a bit overwhelming?
          </p>
          <p>
            As a premier academic consultancy agency, we specialize in guiding
            prospective students through the intricate process of selecting the
            right institution and program to achieve their academic and career
            goals.
          </p>

          <p>
            With years of experience and a team of dedicated experts, ALT
            Educational Consult offers personalized advice and recommendations
            tailored to each student&apos;s unique aspirations and
            circumstances.
          </p>

          <p>
            What sets ALT Educational Consult apart is our commitment to
            excellence and unwavering dedication to student success.
          </p>

          <p>
            We understand that selecting the right educational institution is a
            pivotal decision that can shape your future. That&apos;s why we
            meticulously assess factors such as academic reputation, program
            offerings, faculty expertise, and campus culture to identify the
            perfect fit for you.
          </p>

          <p>
            Whether you aspire to study at a renowned university in the bustling
            streets of London or immerse yourself in the vibrant academic
            community of a prestigious Ivy League institution, ALT Educational
            Consult has the expertise to make your dreams a reality.
          </p>

          <p>
            Our proven track record speaks for itself, with countless students
            successfully admitted to top-tier universities in the UK and US.
          </p>

          <p>
            Let us empower you to embark on a transformative educational journey
            that will unlock endless opportunities for personal and professional
            growth.
          </p>

          <p>
            Don&apos;t leave your future to chance. Trust us to navigate the
            complexities of the admissions process and embark on a path to
            academic excellence.
          </p>

          <p>
            Contact us today and take the first step towards a brighter
            tomorrow.
          </p>
        </div>

        {OUR_SERVICES.map((service, idx) => (
          <div
            className={cn(
              "w-full py-12 min-h-80",
              idx % 2 === 0 && "bg-secondary text-secondary-foreground"
            )}
            key={service.path}
            id={service.path}
          >
            <div className="container px-4 space-y-6">
              <h3 className="text-center">{service.title}</h3>
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 w-full">
                <div
                  className={cn(
                    "relative h-80 md:shadow bg-slate-50",
                    idx % 2 === 0 && "lg:order-2"
                  )}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    objectFit="cover"
                    className="p-4"
                  />
                </div>
                <Stack variant="vertical" className="leading-6">
                  <ServiceDescription service={service} />
                </Stack>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServicesPage;
