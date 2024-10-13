import React, { useContext } from 'react';
import { ThemeColorContext } from '@/context/ThemeColorContext';

const AppearanceColor: React.FC = () => {
    const themeContext = useContext(ThemeColorContext);

    if (!themeContext) {
        return <div>Loading...</div>;
    }

    const { themeColor, handleColorChange } = themeContext;

    return (
        <div className={`${themeColor} min-h-screen flex`}>
            {/* Sidebar */}
            <div className="w-64 h-full bg-gray-200 p-4">
                <h2 className="text-lg font-bold mb-4">Select Theme Color</h2>
                <div className="flex flex-col space-y-2">
                    <button
                        onClick={() => handleColorChange('text-red-500')}
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

            {/* Main Content */}
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-white mt-4">The theme color is applied globally across the app.</p>
            </div>
        </div>
    );
};

export default AppearanceColor;