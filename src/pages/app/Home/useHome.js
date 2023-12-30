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
          // window.location.hash = sectionName;
          navigate(`/${sectionName}`);
        }, 500);
      }
    },
    [navigate]
  );

  return { handleInView };
};

export default useHome;
