import React, { createContext, useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useMediaQuery } from 'react-responsive';

export const AppContext = createContext();

const DashboardContext = ({ children }) => {
    const handle = useFullScreenHandle();
    const [theme, setTheme] = useState('light');
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const [sideBarOpen, setSideBarOpen] = useState(isTablet ? false : true);

    const toggleSideBar = () => {
        setSideBarOpen(true);
    };
    
    const getThemeFromLocalStorage = () => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : 'red';
    };
    const setThemeToLocalStorage = (newTheme) => {
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    // here we will update it
    const updateTheme = (newTheme) => {
        setTheme(newTheme);
        setThemeToLocalStorage(newTheme);
    };

    useEffect(() => {
        const storedTheme = getThemeFromLocalStorage();
        updateTheme(storedTheme);
    }, []);


    // first code for getting dark theme
    useEffect(() => {
        // Update the class of document.documentElement based on the theme state
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <AppContext.Provider
            value={{
                theme,
                setTheme: updateTheme,
                handle,
                isTablet,
                setSideBarOpen,
                sideBarOpen,
                toggleSideBar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default DashboardContext;
