import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import Image from "next/image";
import WhyChooseUsSection from "../components/WhyCHooseUSSection";
import TestimonialSection from "../components/TestimonialSection";
import FAQInquirySection from "../components/FAQInquirySection";
import Footer from "../components/common/Footer";
import ServicesSection from "../components/ServicesSection";
import CardSection from "../components/CardSection";
import ScrollCards from "../components/ScrollCards";
import Trusted from "../components/Trusted";
import ReelsOfTheWeek from "../components/ReelsOftheWeek";

export default function Home() {
  return (
    <div className="pt-20 scroll-hidden">
      <HeroSection />
      <ServicesSection />
      <CardSection />
      <ScrollCards />
      <WhyChooseUsSection />
      <ReelsOfTheWeek />
      <FAQInquirySection />
      <TestimonialSection />
      <Trusted />
    </div>
  );
}
