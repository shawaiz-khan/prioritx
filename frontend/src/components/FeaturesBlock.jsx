/* eslint-disable react/prop-types */
export default function FeaturesBlock({ features }) {
    return (
        <section className="px-5 py-10 bg-gray-50">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-8">Don’t let your day doing nothing</h2>
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-between items-center w-1/2">
                    {features.map((feature) => {
                        const { id, data, image } = feature;
                        return (
                            <div key={id} className="flex flex-col justify-center items-center">
                                <img
                                    src={image}
                                    alt={"Feature image"}
                                    className="w-14 h-14"
                                />
                                <p className="text-lg text-gray-800">{data}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}