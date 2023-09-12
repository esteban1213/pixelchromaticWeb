
import { useEffect, useState } from 'react';


type WindowDimentions = {
    width: number | undefined;
    height: number | undefined;
    isMobile: boolean | false
};

const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: undefined,
        height: undefined,
        isMobile: false
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile:window.innerWidth < 768 ? true : false
            });
            // console.log(window.innerWidth)
            
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;