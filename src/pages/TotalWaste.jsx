import React, { useContext } from "react";
import { WasteContext } from "../WasteContext"; // Adjust the import path as needed
import { FaTint, FaRuler, FaLeaf, FaWater } from "react-icons/fa"; // Import necessary icons from react-icons

const TotalWaste = () => {
  const { totalWaste, dryWaste, wetWaste, records } = useContext(WasteContext);

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 bg-gradient-to-b from-transparent via-gray-800 to-gray-900">
      <div className="w-full max-w-5xl bg-transparent rounded-lg shadow-lg p-8 md:p-14">
        
        {/* Total Waste Count */}
        <h1 className="text-5xl font-bold text-purple-400 mb-10 text-center">Total Waste Count: {totalWaste}</h1>
        
        {/* Total Dry Waste and Total Wet Waste */}
        <div className="flex flex-col md:flex-row justify-around items-center mb-12 space-y-6 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2 bg-blue-500 text-white text-center p-8 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-3xl font-semibold flex items-center gap-3">
              <FaLeaf className="text-white" /> Total Dry Waste
            </h2>
            <p className="text-2xl mt-4">{dryWaste}</p>
          </div>
          <div className="w-full md:w-1/2 bg-green-500 text-white text-center p-8 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-3xl font-semibold flex items-center gap-3">
              <FaWater className="text-white" /> Total Wet Waste
            </h2>
            <p className="text-2xl mt-4">{wetWaste}</p>
          </div>
        </div>

        {/* Render Each Waste Record */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {records.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-lg shadow-lg min-h-[350px] w-[300px] flex flex-col justify-between ${item.dryWaste > 0 ? 'bg-blue-500' : 'bg-green-500'} text-white`}
            >
              <h2 className="text-2xl font-semibold mb-4 text-center">Record {index + 1}</h2>

              <div className="flex flex-col items-center space-y-4">
                {/* Display Dry or Wet Waste Type */}
                <div className={`${item.dryWaste > 0 ? 'bg-blue-600' : 'bg-green-600'} text-white text-center p-4 rounded-lg shadow-md w-full flex items-center justify-center gap-2`}>
                  {item.dryWaste > 0 ? <FaLeaf /> : <FaWater />}
                  <h3 className="text-xl font-semibold">{item.dryWaste > 0 ? 'Dry Waste' : 'Wet Waste'}</h3>
                </div>
              </div>

              {/* Humidity and Distance for Each Record */}
              <div className="flex justify-around mt-4 gap-4">
                <div className="bg-purple-700 p-4 rounded-lg shadow-md text-center flex flex-col items-center flex-shrink-0">
                  <h4 className="text-md font-semibold flex items-center gap-2">
                    <FaTint /> Humidity
                  </h4>
                  <p className="text-md">{item.humidity}%</p>
                </div>
                <div className="bg-purple-700 p-4 rounded-lg shadow-md text-center flex flex-col items-center flex-shrink-0">
                  <h4 className="text-md font-semibold flex items-center gap-2">
                    <FaRuler /> Distance
                  </h4>
                  <p className="text-md">{item.distance} cm</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalWaste;
