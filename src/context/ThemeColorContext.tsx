import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the context
interface ThemeContextType {
    themeColor: string;
    handleColorChange: (color: string) => void;
}

export const ThemeColorContext = createContext<ThemeContextType>(null!);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeColorProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeColor, setThemeColor] = useState<string>('text-white'); // default theme

    useEffect(() => {
        const savedThemeColor = localStorage.getItem('themeColor');
        if (savedThemeColor) {
            setThemeColor(savedThemeColor);
        }
    }, []);

    const handleColorChange = (color: string) => {
        setThemeColor(color);
        localStorage.setItem('themeColor', color);
    };

    return (
        <ThemeColorContext.Provider value={{ themeColor, handleColorChange }}>
            {children}
        </ThemeColorContext.Provider>
    );
};
