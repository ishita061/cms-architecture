import React, { createContext, useState } from 'react';

export const PluginContext = createContext();

export const PluginProvider = ({ children }) => {
  const [activePlugins, setActivePlugins] = useState([]);

  return (
    <PluginContext.Provider value={{ activePlugins, setActivePlugins }}>
      {children}
    </PluginContext.Provider>
  );
};
