import React from "react";
import JobSearchPage from "@/components/work/JobSearchPage";
import WorkOpportunity from "../../components/work/WorkOpportunity";
import CareerChangePage from "../../components/work/CareerChangePage";
import WorkPermitVisaPage from "../../components/work/WorkPermitVisaPage";
import WorkIn from "../../components/work/WorkIn";
import TestimonialSlider from "../../components/TestimonialSlider";
import WorkVisaFees from "../../components/work/WorkVisaFees";
import VisaForm from "../../components/work/VisaForm";
import FAQ from "../../components/work/FAQ";

const page = () => {
  return (
    <div className="mt-32 max-w-7xl mx-auto px-4">
        <VisaForm/>
      <WorkOpportunity />
      <JobSearchPage />
      <CareerChangePage />
      <WorkPermitVisaPage />
      <WorkIn />
      <WorkVisaFees/>
      <TestimonialSlider/>
      <FAQ/>
    </div>
  );
};

export default page;
