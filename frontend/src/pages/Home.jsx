import landingImage from '../assets/images/landing image.png';
import FeaturesBlock from '../components/FeaturesBlock';
import { features } from '../constants/SampleFeatures';

export default function Home() {
    return (
        <main className="min-h-screen bg-light-background">
            <div className="grid grid-rows-[2fr,3fr] h-[90vh] p-5">
                <div className="flex flex-col justify-center items-center text-center mb-3">
                    <h1 className="text-3xl md:text-4xl text-gray-900 font-bold leading-snug">
                        Organize Your Daily Tasks with <span className="text-purple-600">Prioritx</span>
                    </h1>
                    <p className="text-md text-gray-700 mt-3">
                        Plan smarter, stay productive, and prioritize what truly matters.
                    </p>
                    <button
                        className="mt-5 px-6 py-3 bg-purple-600 text-md text-white rounded-md shadow-md hover:bg-purple-700 hover:scale-105 transition transform duration-300"
                        aria-label="Start Now with Prioritx"
                    >
                        Start Now
                    </button>
                </div>
                <div className="w-full h-full overflow-hidden flex justify-center items-center">
                    <img
                        src={landingImage}
                        alt="Prioritx"
                        className="object-contain w-4/5 h-full"
                    />
                </div>
            </div>
            <FeaturesBlock features={features} />
        </main>
    );
}