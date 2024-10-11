import React from 'react';
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardHeader className="pb-2">
          <div className="w-full flex justify-center">
            <img
              src="https://piada.com.au/wp-content/uploads/2024/10/Frosty-Flamingo.png"
              alt="Frosty Flamingo Logo"
              width={200}
              height={100}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-2xl font-semibold text-gray-700">Coming Soon!</p>
            <p className="text-lg text-gray-600">
              We're working hard to bring you the frostiest flavours.
            </p>
            <p className="text-md text-pink-500 font-medium">
              Share the frosty flavour
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoonPage;