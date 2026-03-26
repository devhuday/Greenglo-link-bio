import { useState, useEffect } from "react";
import "./App.css";
import { useTheme, themeTokens } from "./utils/useTheme";
import { Hero } from "./components/Hero";
import { SocialLinks } from "./components/SocialLinks";
import { Stats } from "./components/Stats";
import { Gallery } from "./components/Gallery";
import { ActionLinks } from "./components/ActionLinks";

function App() {
  const [loaded, setLoaded] = useState(false);
  const { isDark, toggle } = useTheme();
  const tk = themeTokens(isDark);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`min-h-screen ${tk.page} flex items-center justify-center p-4 font-sans transition-colors duration-300`}>
      {/* Fondo decorativo */}
      <div className={`fixed inset-0 grid-bg pointer-events-none ${tk.gridOpacity}`} />
      <div className={`fixed top-[-10%] left-1/2 -translate-x-1/2 w-125 h-125 rounded-full blur-3xl pointer-events-none`} />

      <div className="w-full max-w-md relative z-10">
        <Hero loaded={loaded} isDark={isDark} toggle={toggle} tk={tk} />
        <SocialLinks loaded={loaded} tk={tk} />
        <Stats loaded={loaded} tk={tk} />
        <Gallery loaded={loaded} tk={tk} />
        <ActionLinks loaded={loaded} tk={tk} />

        {/* Footer */}
        <div
          className={`fade-up ${loaded ? "loaded" : ""} text-center pt-2 pb-6`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className={`text-xs ${tk.footer}`}>
            © 2025 GreenGlo · Energía Renovable · Colombia
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
