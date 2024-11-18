import landingImage from '../assets/images/landing image.png';
import FeaturesBlock from '../components/FeaturesBlock';
import { features } from '../samples/SampleFeatures';

export default function Home() {
    return (
        <main className="min-h-screen bg-light-background font-sans">
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

            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center px-5">
                    <h2 className="text-2xl md:text-3xl text-gray-900 font-bold mb-6">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                                1
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Create Your Tasks</h3>
                            <p className="text-gray-600 mt-2">
                                Add all your tasks and organize them by priority to stay focused.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                                2
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Track Your Progress</h3>
                            <p className="text-gray-600 mt-2">
                                Monitor your progress and make adjustments in real-time.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                                3
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">Achieve Your Goals</h3>
                            <p className="text-gray-600 mt-2">
                                Stay productive and accomplish what matters most to you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-purple-600 text-white py-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                        Ready to Take Control of Your Day?
                    </h2>
                    <p className="text-md mt-4">
                        Start using <span className="font-bold">Prioritx</span> now to stay ahead and achieve your goals.
                    </p>
                    <button
                        className="mt-5 px-8 py-4 bg-light-background text-purple-600 text-md rounded-md shadow-md font-sans font-semibold hover:bg-gray-100 hover:scale-105 transition transform duration-300"
                        aria-label="Sign Up Now"
                    >
                        Sign Up Now
                    </button>
                </div>
            </section>
        </main>
    );
}