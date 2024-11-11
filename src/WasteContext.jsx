import { createContext, useState, useEffect } from "react";
import { fetchWasteData } from "./firebase";  // Adjust the import path as needed

// Create the context
export const WasteContext = createContext();

// Waste provider component
export const WasteProvider = ({ children }) => {
  const [wasteData, setWasteData] = useState({
    totalWaste: 0,
    dryWaste: 0,
    wetWaste: 0,
    records: [],  // Array to hold all records including timestamps
  });

  useEffect(() => {
    fetchWasteData((data) => {
      if (data) {
        // Map data to include timestamp and other necessary fields
        const records = data.map((item) => ({
          dryWaste: item.dryWaste || 0,
          wetWaste: item.wetWaste || 0,
          humidity: item.humidity || 0,
          distance: item.distance || 0,
          timestamp: item.timestamp || null,  // Include timestamp if available
        }));

        // Calculate the total of dry and wet waste
        const totalDryWaste = records.reduce((acc, record) => acc + record.dryWaste, 0);
        const totalWetWaste = records.reduce((acc, record) => acc + record.wetWaste, 0);
        const totalWaste = totalDryWaste + totalWetWaste;

        // Update the state with calculated values
        setWasteData({
          totalWaste,
          dryWaste: totalDryWaste,
          wetWaste: totalWetWaste,
          records,  // Store all individual records with timestamps
        });
      }
    });
  }, []);

  return (
    <WasteContext.Provider value={wasteData}>
      {children}
    </WasteContext.Provider>
  );
};
