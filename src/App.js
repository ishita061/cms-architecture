import React, { useEffect, useContext, Suspense } from "react";
import { PluginContext } from "./context/PluginContext";
import { fetchPlugins } from "./services/pluginService";
import { loadPlugin } from "./utils/loadPlugin";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const { setActivePlugins } = useContext(PluginContext);

  useEffect(() => {
    async function initPlugins() {
      try {
        const { data } = await fetchPlugins();
        const loaded = await Promise.all(data.map(p => loadPlugin(p.path)));
        setActivePlugins(loaded);
      } catch (error) {
        console.error("Plugin loading failed:", error);
      }
    }

    initPlugins();
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Suspense fallback={<div>Loading dashboard...</div>}>
          <Dashboard />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
