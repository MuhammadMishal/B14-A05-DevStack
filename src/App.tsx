import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-[#10182b]">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
