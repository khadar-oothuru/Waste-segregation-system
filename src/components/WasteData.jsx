import { useEffect, useState } from "react";
import { fetchWasteData } from "../firebase";  // Import the Firebase function
import "./Waste.css";  // Assuming you have your CSS here

const WasteData = () => {
  const [wasteData, setWasteData] = useState({
    totalWaste: 0,
    dryWaste: 0,
    wetWaste: 0,
    humidity: 0,
    distance: 0,
  });

  useEffect(() => {
    // Fetch the data from Firebase when the component mounts
    fetchWasteData((data) => {
      if (data) {
        // Retrieve the first key in the data object to access the nested structure
        const firstKey = Object.keys(data)[0];
        const wasteDetails = data[firstKey] || {};
        
        // Set waste data with default values if fields are missing
        setWasteData({
          totalWaste: wasteDetails.totalWaste || 0,
          dryWaste: wasteDetails.dryWaste || 0,
          wetWaste: wasteDetails.wetWaste || 0,
          humidity: wasteDetails.humidity || 0,
          distance: wasteDetails.distance || 0,
        });
      }
    });
  }, []);  // Empty dependency array means this runs only once after mount

  return (
    <div className="waste-data-container">
      <h2>Waste Segregation Data</h2>
      <div className="waste-info">
        <div className="info-item">
          <span>Total Waste: </span><strong>{wasteData.totalWaste}</strong>
        </div>
        <div className="info-item">
          <span>Dry Waste: </span><strong>{wasteData.dryWaste}</strong>
        </div>
        <div className="info-item">
          <span>Wet Waste: </span><strong>{wasteData.wetWaste}</strong>
        </div>
        <div className="info-item">
          <span>Humidity: </span><strong>{wasteData.humidity}%</strong>
        </div>
        <div className="info-item">
          <span>Distance: </span><strong>{wasteData.distance} cm</strong>
        </div>
      </div>
    </div>
  );
};

export default WasteData;
