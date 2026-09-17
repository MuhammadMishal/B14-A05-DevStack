import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Technologies from "./components/Technologies";
import { technologies } from "./data/technologies";
function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-[#10182b]">
        <Navbar />
        <main>
          <Hero />
          <Technologies technologies={technologies} />
        </main>
      </div>
    </>
  );
}

export default App;
