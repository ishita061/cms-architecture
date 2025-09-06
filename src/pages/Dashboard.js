import React, { useContext } from 'react';
import { PluginContext } from '../context/PluginContext';

const Dashboard = () => {
  const { activePlugins } = useContext(PluginContext);

  return (
    <div>
      <h2>Active Plugins</h2>
      {activePlugins.length === 0 ? (
        <p>No plugins loaded.</p>
      ) : (
        activePlugins.map((PluginComponent, index) => (
          <div key={index} className="plugin-wrapper">
            <PluginComponent />
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
