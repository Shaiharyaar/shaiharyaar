import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useHome = () => {
  const timeoutId = useRef();
  const navigate = useNavigate();

  const handleInView = useCallback(
    (isVisible, sectionName) => {
      if (isVisible) {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => {
          const h = (sectionName || '#home').replace(/^#/, '') || 'home'
          navigate({ pathname: '/', hash: h }, { replace: true })
        }, 450)
      }
    },
    [navigate]
  );

  return { handleInView };
};

export default useHome;
