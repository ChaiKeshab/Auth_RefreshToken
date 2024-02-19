import { useState, useEffect } from 'react';

//Usage: const windowSize = useWindowResolution();
//Eg:    const isLgScreen = windowSize.width >= 1024 ? true : false

const useWindowResolution = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}

export default useWindowResolution;