import React, { useContext } from "react";
import { PluginContext } from "../context/PluginContext";

function Settings() {
  const { activePlugins, setActivePlugins } = useContext(PluginContext);

  const handleDisable = (index) => {
    const updated = [...activePlugins];
    updated.splice(index, 1);
    setActivePlugins(updated);
  };

  return (
    <div className="settings">
      <h2>⚙️ Plugin Settings</h2>
      {activePlugins.length === 0 ? (
        <p>No active plugins.</p>
      ) : (
        activePlugins.map((PluginComp, idx) => (
          <div key={idx} className="plugin-setting">
            <span>Plugin {idx + 1}</span>
            <button onClick={() => handleDisable(idx)}>Disable</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Settings;
