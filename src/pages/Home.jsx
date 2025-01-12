import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Scammer Finder</h1>
      <p>
        Help us fight online scams! Report suspicious activities and help protect others from fraud.
      </p>
      {/* Link to Report page */}
      <div className="mt-4">
        <a href="/report" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Report a Scam
        </a>
      </div>
      {/* Optional: Display some statistics or information about common scams */}
    </div>
  );
};

export default Home;