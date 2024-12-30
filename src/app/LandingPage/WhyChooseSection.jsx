import React from "react";
import craftsmanship from "../../assets/craftsmanship.svg";
import personalized from "../../assets/Personalised.svg";
import sustainable from "../../assets/Sustainable.svg";
import delivery from "../../assets/Delivery.svg";

const FeatureCard = ({ icon, title }) => {
  return (
    <div className={`p-6 text-center bg-[#FDF8F3]`}>
      <div className="flex justify-center mb-2">{icon}</div>
      <h3 className="text-[14px] sm:text-lg font-bold">{title}</h3>
    </div>
  );
};

export default function WhyChooseSection() {
  return (
    <section className="pb-6 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
        Why Choose Kevasiya?
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8">
        <FeatureCard
          icon={
            <img
              src={craftsmanship}
              alt="Craftsmanship"
              className="w-14 h-14"
            />
          }
          title={
            <div>
              <div>Exquisite</div>
              <div>Craftsmanship</div>
            </div>
          }
        />

        <FeatureCard
          icon={
            <img src={personalized} alt="Personalized" className="w-14 h-14" />
          }
          title={
            <div>
              <div>Personalized</div>
              <div>Touch</div>
            </div>
          }
        />

        <FeatureCard
          icon={
            <img src={sustainable} alt="Sustainable" className="w-14 h-14" />
          }
          title={
            <div>
              <div>Sustainable &</div>
              <div>Ethical Sourcing</div>
            </div>
          }
        />

        <FeatureCard
          icon={<img src={delivery} alt="Delivery" className="w-14 h-14" />}
          title={
            <div>
              <div>Global</div>
              <div>Delivery</div>
            </div>
          }
        />
      </div>
    </section>
  );
}
