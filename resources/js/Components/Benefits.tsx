import React from 'react';
import { motion } from "framer-motion";
import { Milk, Users, Scale, Apple, Flag, Stars } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-20 h-20 rounded-full bg-pink-200 flex items-center justify-center mb-2">
      {React.cloneElement(icon as React.ReactElement, { size: 32, className: "text-pink-500" })}
    </div>
    <h3 className="font-semibold text-pink-700 text-sm mb-1">{title}</h3>
    <p className="text-xs text-pink-600 max-w-[120px]">{description}</p>
  </div>
);

const benefits: BenefitProps[] = [
  { icon: <Milk />, title: "Real Milk", description: "Yogurt made from real milk, not powder" },
  { icon: <Milk />, title: "Calcium", description: "Great source of calcium" },
  { icon: <Users />, title: "Probiotics", description: "Beneficial probiotics, live and active cultures" },
  { icon: <Scale />, title: "Low Fat", description: "98% fat free and low in calories" },
  { icon: <Apple />, title: "Fresh Fruit", description: "Freshly cut fruit prepared daily on site" },
  { icon: <Stars />, title: "Australian", description: "100% Australian owned" },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Share The Frosty Chi
        </motion.h2>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BenefitItem {...benefit} />
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="/path-to-your-yogurt-image.png"
              alt="Yo-Ch Yogurt"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
