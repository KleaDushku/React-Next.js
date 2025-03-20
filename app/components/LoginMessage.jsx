import React, { useState } from 'react';

const LoginMessage = () => {
  // State për të menaxhuar gjendjen e logimit
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funksioni për të ndryshuar gjendjen e logimit
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="p-4 text-center">
      <p className="text-lg mb-4">
        {isLoggedIn ? 'Mirësevini përsëri!' : 'Ju lutem, identifikohuni.'}
      </p>
      <button
        onClick={toggleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isLoggedIn ? 'Çidentifikohu' : 'Identifikohu'}
      </button>
    </div>
  );
};

export default LoginMessage;