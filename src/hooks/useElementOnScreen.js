import React, { useEffect, useState, useMemo } from "react";

const useElementOnScreen = (options, targetRef, oneTime) => {
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries =>  {
      const [entry] = entries; //const entry = entries[0]

      if (oneTime) {
        if (entry.isIntersecting && !isVisible) {
            setIsVisible(entry.isIntersecting);
        }
      } else {
        setIsVisible(entry.isIntersecting);
      }
    }
  
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, optionsMemo);
      const currentTarget = targetRef.current;
      if (currentTarget) observer.observe(currentTarget);
  
      return () => {
        if (currentTarget) observer.unobserve(currentTarget);
      }
    }, [targetRef, optionsMemo]);

    return isVisible;
}

export default useElementOnScreen;