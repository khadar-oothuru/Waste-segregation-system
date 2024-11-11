
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 lg:px-0 bg-gradient-to-b from-transparent via-gray-800 to-gray-900">
      <div className="w-full max-w-5xl bg-transparent rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">Welcome to the Waste Segregation System</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">About Dry and Wet Waste Segregation</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            Waste segregation is an essential step in managing waste efficiently. By dividing waste into "dry" and "wet" categories,
            we can more effectively recycle materials and compost organic matter. Wet waste includes food scraps, plant materials, and other
            biodegradable waste, whereas dry waste comprises plastic, paper, metals, and other recyclables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4">How Our Device Works</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4">
            Our waste segregation device uses sensors to detect and separate dry and wet waste automatically. An ultrasonic sensor detects
            the presence of waste, while a soil moisture sensor assesses the moisture level. If the waste is moist, it is categorized as
            wet waste and directed to the appropriate compartment. Otherwise, it is categorized as dry waste.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            The device connects to a real-time database, recording data on total waste, wet waste, and dry waste. This allows for continuous
            monitoring and efficient waste management.
          </p>
        </section>

        <div className="flex justify-center mt-8">
        <Link  to="/real-time-data"><button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition">
            View Real-Time Data
          </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;
