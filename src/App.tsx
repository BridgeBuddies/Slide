import React, { useState } from "react";

function App() {
  // smth for rally value (modifiable by us)
  const [rallyVal, setRallyVal] = useState(0);
  // smth for solana value (not modifiable by us)
  const [solVal, setSolVal] = useState(0);

  const handleRallyInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let tempVal = parseInt(e.currentTarget.value);

    setRallyVal(tempVal);

    const conversionRate = 0.5
    setSolVal(conversionRate * tempVal);

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-300 bg-gradient-to-br from-gray-300 via-teal-700 to-gray-800">
      <div className="w-1/3 h-1/3 grid grid-cols-1 bg-white rounded-lg"> 
        {/* This handles 1 row at a time */}
        <div className="flex items-end justify-center">
            <div className="flex items-center max-w-md mx-auto">
                <div className="w-full">
                    <input className="w-full px-4 py-1 rounded-full focus:outline-none" value={rallyVal} onChange={handleRallyInputChange} type="number" inputMode="numeric" min="0"/>
                </div>
                <div className="flex items-center bg-blue-500 justify-center w-16 h-12 text-white rounded-r-lg">
                    $RLY
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center">
          <svg stroke-width="10" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
        </div>
        <div className="flex items-start justify-center">
            <div className="flex items-center max-w-md mx-auto">
                <div className="w-full">
                    <input className="w-full px-4 py-1 rounded-full focus:outline-none" value={solVal} onChange={(e) => {}} type="number" inputMode="numeric" min="0" readOnly/>
                </div>
                <div className="flex items-center bg-blue-500 justify-center w-16 h-12 text-white rounded-r-lg">
                    $SOL
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
