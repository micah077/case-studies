import React, { useState, useEffect } from 'react';

const useScreenWidth = (number: number) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= number) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return isMobile;
};

export { useScreenWidth }