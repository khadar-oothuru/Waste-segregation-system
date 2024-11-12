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
        // Process each data entry according to wasteType and include formatted timestamp
        const records = data.map((item) => {
          // Format timestamp to "MMM dd, hh:mm AM/PM" format
          const formattedTime = item.timestamp
            ? new Date(item.timestamp).toLocaleString('en-US', {
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
              })
            : null;

          return {
            dryWaste: item.wasteType.trim() === "DRY" ? 1 : 0,  // Count as 1 if DRY
            wetWaste: item.wasteType.trim() === "WET" ? 1 : 0,  // Count as 1 if WET
            humidity: item.humidity || 0,
            distance: item.distance || 0,
            timestamp: formattedTime,  // Use formatted timestamp here
          };
        });

        // Calculate the total counts for dry and wet waste
        const totalDryWaste = records.filter(record => record.dryWaste > 0).length;
        const totalWetWaste = records.filter(record => record.wetWaste > 0).length;
        const totalWaste = records.length;  // Total records count

        // Update the state with calculated values
        setWasteData({
          totalWaste,
          dryWaste: totalDryWaste,
          wetWaste: totalWetWaste,
          records,  // Store all individual records with formatted timestamps
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
