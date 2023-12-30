import React, { createContext, useState } from "react";

// Create a new context for layout management
export const LayoutContext = createContext();

// Create a provider component to wrap around the app
export const LayoutProvider = ({ children }) => {
  // Use state to manage active heading and logged in user info
  const [activeHeading, setActiveHeading] = useState("");

  return (
    // Provide the state values and state updater functions to children components
    <LayoutContext.Provider value={{ activeHeading, setActiveHeading }}>
      {children}
    </LayoutContext.Provider>
  );
};
