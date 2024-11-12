import React, { useContext } from "react";
import { WasteContext } from "../WasteContext";
import { FaRecycle, FaWater, FaRulerVertical, FaClock } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const RealTimeData = () => {
  const { totalWaste, dryWaste, wetWaste, records } = useContext(WasteContext);

  return (
    <div className="min-h-screen py-8 flex justify-center">
      <div className="w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-lg lg:w-3/4 xl:w-2/3">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Real-Time Waste Data</h1>
        <p className="text-2xl font-bold text-purple-700 mb-4">
          Total Waste Collected: <span className="text-purple-700">{totalWaste}</span>
        </p>
        <p className="text-xl font-semibold text-blue-600 flex items-center mb-4">
          Dry Waste: <span className="font-bold text-blue-600 ml-2">{dryWaste}</span>
        </p>
        <p className="text-xl font-semibold text-green-600 flex items-center mb-6">
          Wet Waste: <span className="font-bold text-green-600 ml-2">{wetWaste}</span>
        </p>
        
        <ul className="space-y-8 mt-8">
          {records.slice().reverse().map((record, index) => (
            <li
              key={index}
              className={`p-8 rounded-lg shadow-sm ${
                record.dryWaste > 0
                  ? "bg-blue-50 bg-opacity-60 border-l-4 border-blue-500"
                  : "bg-green-50 bg-opacity-60 border-l-4 border-green-500"
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                Record #{records.length - index}
              </h2>
              <p className="text-xl text-blue-600 flex items-center mb-3">
                <FaRecycle className="mr-3 text-blue-500 text-2xl" /> Dry Waste: <span className="font-bold text-blue-800 ml-2">{record.dryWaste}</span>
              </p>
              <p className="text-xl text-green-600 flex items-center mb-3">
                <FaWater className="mr-3 text-green-600 text-2xl" /> Wet Waste: <span className="font-bold text-green-800 ml-2">{record.wetWaste}</span>
              </p>
              <p className="text-lg text-blue-500 flex items-center mb-3">
                <WiHumidity className="mr-3 text-blue-400 text-2xl" /> Humidity: <span className="font-bold text-blue-700 ml-2">{record.humidity}%</span>
              </p>
              <p className="text-lg text-gray-600 flex items-center mb-3">
                <FaRulerVertical className="mr-3 text-gray-500 text-2xl" /> Distance: <span className="font-bold ml-2">{record.distance} cm</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center">
                <FaClock className="mr-3 text-gray-500 text-2xl" /> Timestamp: <span className="font-bold ml-2">{record.timestamp || 'No timestamp available'}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RealTimeData;
