import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ActiveLinkContext = createContext();

const ActiveLinkProvider = ({ children }) => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname);

    const handleRouteChange = (url) => {
        setActiveLink(url);
        console.log("path second time")
    };
    useEffect(() => {

        router.events.on('routeChangeComplete', handleRouteChange);
        

       
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);

    const updateActiveLink = (path) => {
        setActiveLink(path);
        router.push(path);  
    };

    return (
        <ActiveLinkContext.Provider value={{ activeLink, updateActiveLink }}>
            {children}
        </ActiveLinkContext.Provider>
    );
};

export { ActiveLinkContext, ActiveLinkProvider }
