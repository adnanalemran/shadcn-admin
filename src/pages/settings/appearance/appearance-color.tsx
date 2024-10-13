import React, { useContext } from 'react';
import { ThemeColorContext } from '@/context/ThemeColorContext';

const AppearanceColor: React.FC = () => {
    const { handleColorChange, subTextColor } = useContext(ThemeColorContext);

    return (
        <div>
            <div>
                <h2 className="text-lg font-bold">Select Theme Color</h2>
                <br />
                <div className="flex gap-4 w-full">
                    <button
                        onClick={() =>
                            handleColorChange({
                                textColor: 'text-red-500',
                                hoverBgColor: 'hover:bg-red-300',
                                bgColor: 'bg-red-500',
                                subTextColor: 'text-red-400', // Set subTextColor for Red
                            })
                        }
                        className={`w-full p-2 bg-red-500 rounded hover:bg-red-300`}
                    >
                        Red
                    </button>
                    <button
                        onClick={() =>
                            handleColorChange({
                                textColor: 'text-green-500',
                                hoverBgColor: 'hover:bg-green-300',
                                bgColor: 'bg-green-500',
                                subTextColor: 'text-green-400', // Set subTextColor for Green
                            })
                        }
                        className={`w-full p-2 bg-green-500 rounded hover:bg-green-300`}
                    >
                        Green
                    </button>
                    <button
                        onClick={() =>
                            handleColorChange({
                                textColor: 'text-blue-500',
                                hoverBgColor: 'hover:bg-blue-300',
                                bgColor: 'bg-blue-500',
                                subTextColor: 'text-blue-400', // Set subTextColor for Blue
                            })
                        }
                        className={`w-full p-2 bg-blue-500 rounded hover:bg-blue-300`}
                    >
                        Blue
                    </button>
                    <button
                        onClick={() =>
                            handleColorChange({
                                textColor: 'text-yellow-500',
                                hoverBgColor: 'hover:bg-yellow-300',
                                bgColor: 'bg-yellow-500',
                                subTextColor: 'text-yellow-400', // Set subTextColor for Yellow
                            })
                        }
                        className={`w-full p-2 bg-yellow-500 rounded hover:bg-yellow-300`}
                    >
                        Yellow
                    </button>
                </div>
                {/* Display subtext with the selected subTextColor */}
                <div className={`mt-4 ${subTextColor}`}>
                    <p>This is subtext color</p>
                </div>
            </div>
        </div>
    );
};

export default AppearanceColor;
