
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyAccurate Books</h1>
        <p className="text-xl text-gray-600 mb-8">Your complete accounting solution for business financial management</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/features">Explore Features</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/demo">Watch Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
