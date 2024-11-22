/* eslint-disable react/prop-types */
export default function FilterDropdown({ label, options, value, onChange }) {
    return (
        <div className="flex gap-2 w-fit items-center">
            <label className="font-semibold">{label}</label>
            <select
                className="border-2 py-1 px-2 rounded-md"
                value={value}
                onChange={onChange}
            >
                <option value=''>All</option>
                {options.map((option, index) => (
                    <option value={option.value} key={index}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
