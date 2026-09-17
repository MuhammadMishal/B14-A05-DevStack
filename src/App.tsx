import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import { technologies } from "./data/technologies";
import type { Technology } from "./types/technology";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

export default function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const addTechnology = (technology: Technology) => {
    if (selectedTechnologies.some((item) => item.id === technology.id)) return;
    setSelectedTechnologies((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  const removeTechnology = (technology: Technology) => {
    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== technology.id),
    );
    toast.info(`${technology.name} removed from your stack`);
  };

  const clearStack = () => {
    if (selectedTechnologies.length === 0) return;
    setSelectedTechnologies([]);
    toast.info("Stack cleared");
  };

  return (
    <div className="min-h-screen bg-white text-[#10182b]">
      <Navbar />
      <main>
        <Hero />
        <Technologies
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          onAdd={addTechnology}
          onRemove={removeTechnology}
          onClear={clearStack}
        />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2600}
        hideProgressBar
        closeOnClick
        theme="light"
      />
    </div>
  );
}
