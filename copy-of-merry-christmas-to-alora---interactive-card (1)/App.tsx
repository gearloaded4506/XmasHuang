
import React, { useState } from 'react';
import GreetingCard from './components/GreetingCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 select-none">
      <GreetingCard />
    </div>
  );
};

export default App;
