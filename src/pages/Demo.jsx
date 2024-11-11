import React from 'react';

const Demo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 lg:px-0 bg-gradient-to-b from-transparent via-gray-800 to-gray-900">
      <div className="w-full max-w-5xl bg-transparent rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">Waste Segregation Device Demo</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">How the Device Operates</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            The Waste Segregation Device is designed to simplify and automate the sorting of waste into dry and wet categories.
            By using advanced sensors and servo motors, the device can detect waste, classify it based on moisture level, and
            place it in the appropriate compartment. This demo showcases the process in action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">Device Demonstration Video</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 h-[450px] w-full">
            <iframe
              src="https://drive.google.com/file/d/FILE_ID/preview" // Replace FILE_ID with your actual Google Drive file ID
              title="Waste Segregation Device Demo"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            This video provides a real-time demonstration of our waste segregation device. You’ll see how the device can accurately
            differentiate between dry and wet waste and sort it accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">Technical Highlights</h2>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-300 leading-relaxed space-y-2">
            <li>
              <strong className="text-purple-400">Ultrasonic Sensor:</strong> Detects the presence of waste by measuring distance, ensuring accurate waste detection.
            </li>
            <li>
              <strong className="text-purple-400">Soil Moisture Sensor:</strong> Analyzes the moisture content of the waste to classify it as dry or wet.
            </li>
            <li>
              <strong className="text-purple-400">Servo Motor:</strong> Adjusts the waste bin compartments to correctly sort the waste based on the sensor data.
            </li>
            <li>
              <strong className="text-purple-400">Real-Time Database Integration:</strong> Records data on waste classification in real-time, allowing for ongoing analysis and reporting.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Demo;
