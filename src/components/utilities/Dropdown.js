import { useEffect, useState } from "react";

export default function Dropdown() {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const dummyOpt = ['Opt1', 'Opt2', 'Opt3'];
        setOptions(dummyOpt);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOpt, setSelectedOpt] = useState(null);
    
    function handleToggleDropdown() {
        setIsOpen(!isOpen);
    }

    function handleOptionClick(clickedOption) {
        setSelectedOpt(clickedOption);
        setIsOpen(false);
    }

    return (
        <div className = "relative inline-block w-64">
            <button
                onClick = {handleToggleDropdown}
                className = "w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
                {selectedOpt || 'Select a Breed'}
            </button>
            {isOpen && (
                <ul className="absolute w-full bg-white border border-gray-300 mt-1 rounded shadow-lg">
                    {
                        options.map((currOpt) => (
                            <li
                                key={currOpt}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleOptionClick(currOpt)}
                            >
                                {currOpt}
                            </li>
                        ))
                    }
                </ul>
            )
            }
        </div>
    );
}