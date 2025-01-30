/* eslint-disable react/prop-types */
export default function FeaturesBlock(props) {
    const { features, isDark } = props;
    return (
        <section className={`px-5 py-10 ${isDark ? "bg-dark-background" : "bg-gray-50"}`}>
            <h2 className={`text-2xl text-center font-bold ${isDark ? "text-neutral-100" : "text-gray-950"} mb-10`}>Don’t let your day doing nothing</h2>
            <div className="flex justify-center items-center w-full">
                <div className="flex justify-between items-center w-1/2">
                    {features.map((feature) => {
                        const { id, data, image } = feature;
                        return (
                            <div key={id} className={`flex flex-col justify-center items-center gap-4 ${isDark ? "text-neutral-300" : "text-gray-800"} hover:scale-105 transition-transform duration-300`}>
                                <img
                                    src={image}
                                    alt={"Feature image"}
                                    className="w-14 h-14"
                                />
                                <p className="text-lg font-semibold">{data}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}