import React, { useContext } from 'react';
import { ThemeColorContext } from '@/context/ThemeColorContext';

const AppearanceColor: React.FC = () => {
    const themeContext = useContext(ThemeColorContext);
    const { themeColor, handleColorChange } = themeContext;

    return (
        <div className={`${themeColor}  `}>

            <div className="     p-4 flex ">
                <h2 className="text-lg font-bold mb-4">Select Theme Color</h2>
                <div className="flex gap-4 w-full ">
                    <button
                        onClick={() => handleColorChange('text-red-500 ')}
                        className="w-full p-2 bg-red-500 text-white rounded hover:opacity-75"
                    >
                        Red
                    </button>
                    <button
                        onClick={() => handleColorChange('text-green-500')}
                        className="w-full p-2 bg-green-500 text-white rounded hover:opacity-75"
                    >
                        Green
                    </button>
                    <button
                        onClick={() => handleColorChange('text-blue-500')}
                        className="w-full p-2 bg-blue-500 text-white rounded hover:opacity-75"
                    >
                        Blue
                    </button>
                    <button
                        onClick={() => handleColorChange('text-yellow-500')}
                        className="w-full p-2 bg-yellow-500 text-white rounded hover:opacity-75"
                    >
                        Yellow
                    </button>
                </div>
            </div>


        </div>
    );
};

export default AppearanceColor;
