import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/Components/ui/tooltip";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";

interface Flavour {
  name: string;
  color: string;
  description: string;
}

const flavours: Flavour[] = [
  { name: "Chocolate", color: "bg-[#3C2218]", description: "Rich and creamy chocolate delight" },
  { name: "Strawberry", color: "bg-[#FFB7C5]", description: "Fresh strawberry sweetness" },
  { name: "Coconut", color: "bg-[#FFFFFF]", description: "Vegan and made with organic coconut cream" },
  { name: "Vanilla", color: "bg-[#F3E5AB]", description: "Classic vanilla bean flavor" },
  { name: "Mango", color: "bg-[#FFD700]", description: "Tropical mango paradise" },
];

const FlavoursSection: React.FC = () => {
  const [selectedFlavour, setSelectedFlavour] = useState<Flavour | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Flavours
        </motion.h2>
        <div className="flex justify-center items-end space-x-8 mb-12">
          {flavours.map((flavour, index) => (
            <TooltipProvider key={flavour.name}>
              <Tooltip>
                <TooltipTrigger>
                  <motion.div
                    className="flex flex-col items-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedFlavour(flavour)}
                  >
                    <div className={`w-24 h-32 ${flavour.color} rounded-t-full mb-2 shadow-lg`}></div>
                    <Card className="w-32 text-center">
                      <CardContent className="p-2">
                        <h3 className="font-semibold">{flavour.name}</h3>
                        <Badge variant="secondary" className="mt-1">Yo-Ch</Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to learn more!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <AnimatePresence>
          {selectedFlavour && (
            <Dialog open={!!selectedFlavour} onOpenChange={() => setSelectedFlavour(null)}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{selectedFlavour.name}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-24 ${selectedFlavour.color} rounded-t-full`}></div>
                  <p>{selectedFlavour.description}</p>
                </div>
                <Button onClick={() => setSelectedFlavour(null)}>Close</Button>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FlavoursSection;