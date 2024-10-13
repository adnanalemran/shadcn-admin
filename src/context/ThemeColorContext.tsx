import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the context
interface ThemeContextType {
    textColor: string;
    hoverBgColor: string;
    bgColor: string;
    subTextColor: string;
    handleColorChange: (colorData: { textColor: string; hoverBgColor: string; bgColor: string; subTextColor: string }) => void;
}

export const ThemeColorContext = createContext<ThemeContextType>(null!);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeColorProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [textColor, setTextColor] = useState<string>('text-black');
    const [hoverBgColor, setHoverBgColor] = useState<string>('hover:bg-gray-300');
    const [bgColor, setBgColor] = useState<string>('bg-white');
    const [subTextColor, setSubTextColor] = useState<string>('text-gray-600'); // Default subTextColor

    useEffect(() => {
        const savedTextColor = localStorage.getItem('textColor');
        const savedHoverBgColor = localStorage.getItem('hoverBgColor');
        const savedBgColor = localStorage.getItem('bgColor');
        const savedSubTextColor = localStorage.getItem('subTextColor');

        if (savedTextColor && savedHoverBgColor && savedBgColor && savedSubTextColor) {
            setTextColor(savedTextColor);
            setHoverBgColor(savedHoverBgColor);
            setBgColor(savedBgColor);
            setSubTextColor(savedSubTextColor);
        }
    }, []);

    const handleColorChange = (colorData: { textColor: string; hoverBgColor: string; bgColor: string; subTextColor: string }) => {
        setTextColor(colorData.textColor);
        setHoverBgColor(colorData.hoverBgColor);
        setBgColor(colorData.bgColor);
        setSubTextColor(colorData.subTextColor);

        localStorage.setItem('textColor', colorData.textColor);
        localStorage.setItem('hoverBgColor', colorData.hoverBgColor);
        localStorage.setItem('bgColor', colorData.bgColor);
        localStorage.setItem('subTextColor', colorData.subTextColor);
    };

    return (
        <ThemeColorContext.Provider value={{ textColor, hoverBgColor, bgColor, subTextColor, handleColorChange }}>
            {children}
        </ThemeColorContext.Provider>
    );
};
