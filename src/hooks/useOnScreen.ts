import { RefObject, useEffect, useState } from "react";

interface IIntersectionObserverConfig {
    rootMargin?: string;
    threshold?: number[];
}

/**
 *
 * @param ref A react reference with any element
 * @returns Wheterh the element is visible on the screen
 */

function useOnScreen(
    ref: RefObject<HTMLElement>,
    config: IIntersectionObserverConfig,
) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (window && ref.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },
                {
                    rootMargin: config?.rootMargin || "0px",
                    threshold: config?.threshold || [0],
                },
            );
            observer.observe(ref.current);

            return () => {
                observer.unobserve(ref.current);
            };
        }
    }, []);
    return isIntersecting;
}

export default useOnScreen;
export { useOnScreen };
