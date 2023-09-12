import { useEffect, useState } from 'react';

type WindowDimensions = {
    width: number | undefined;
    height: number | undefined;
    isMobile: boolean | false;
};

const useWindowDimensions = (): WindowDimensions => {
    const isClient = typeof document === 'object';

    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
        isMobile: isClient ? window.innerWidth < 768 : false,
    });

    useEffect(() => {
        if (!isClient) {
            return;
        }

        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < 768,
            });
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return (): void => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isClient]);

    return windowDimensions;
};

export default useWindowDimensions;
