import { useEffect, useState, useMemo, useCallback } from "react";

/**
 * Hook to detect when an element enters the viewport
 * @param {IntersectionObserverInit} options - Intersection Observer options
 * @param {Object} options.root - Element that is used as the viewport
 * @param {string} options.rootMargin - Margin around the root
 * @param {number|number[]} options.threshold - Visibility threshold(s)
 * @param {React.RefObject} targetRef - Reference to the target element
 * @param {boolean} oneTime - If true, visibility state won't reset to false once visible
 * @returns {boolean} Whether the element is currently visible
 */
const useElementOnScreen = (options, targetRef, oneTime = false) => {
  const [isVisible, setIsVisible] = useState(false);

  const optionsMemo = useMemo(() => options, [options]);

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;

    if (oneTime) {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    } else {
      setIsVisible(entry.isIntersecting);
    }
  }, [oneTime]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, optionsMemo);
    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, optionsMemo, handleIntersection]);

  return isVisible;
};

export default useElementOnScreen;
