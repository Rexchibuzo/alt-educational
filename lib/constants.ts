import { StaticImageData } from "next/image";
import meetingImg from "@/assets/meeting.jpg";
import reviewImg from "@/assets/review.jpg";
import foreignCurrencyImg from "@/assets/foreign currency.jpg";
import visaApplicationImg from "@/assets/visa_application.jpg";
import accommodationImg from "@/assets/accommodation.jpg";
import postArrivalImg from "@/assets/post_arrival.jpg";
import scholarshipImg from "@/assets/scholarship.jpg";
import undergraduatesImg from "@/assets/undergraduates.jpg";

const SERVICES = [
  "Graduate & Undergraduate Admissions",
  "Funding & Scholarships Advice",
  "Personal Statement Review",
  "Visa Application & Support",
  "Accommodation Support",
  "Foreign Currency Payment Support",
  "Post Arrival Support",
  "General Consultancy",
] as const;

export const OUR_SERVICES = SERVICES.map((service) => {
  let image: StaticImageData;
  const path = service
    .toLocaleLowerCase()
    .replaceAll(" ", "_")
    .replaceAll("&", "and");

  switch (service) {
    case "Graduate & Undergraduate Admissions":
      image = undergraduatesImg;
      break;
    case "Funding & Scholarships Advice":
      image = scholarshipImg;
      break;
    case "Personal Statement Review":
      image = reviewImg;
      break;
    case "Visa Application & Support":
      image = visaApplicationImg;
      break;
    case "Accommodation Support":
      image = accommodationImg;
      break;
    case "Foreign Currency Payment Support":
      image = foreignCurrencyImg;
      break;
    case "Post Arrival Support":
      image = postArrivalImg;
      break;
    default:
      image = meetingImg;
  }

  return {
    image,
    title: service,
    path,
  };
});
