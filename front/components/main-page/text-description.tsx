import React from 'react';

const TextDescription = () => {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-400">Discover Cosmic Chill</h2>
      <p className="text-lg text-gray-200 max-w-2xl">
        Embark on a journey through distant worlds with our unique digital art collection. 
        Own an exclusive beach in the metaverse and join a community of space explorers 
        seeking digital serenity.
      </p>
      <div className="flex gap-4 mt-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg 
          transition-colors duration-200">
          Explore Collection
        </button>
        <button className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 
          px-6 py-2 rounded-lg transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TextDescription;