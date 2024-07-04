import { OrbitingCirclesDemo } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { StickyScrollRevealDemo } from "./components/Section";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <OrbitingCirclesDemo />

        <StickyScrollRevealDemo />
      </main>
    </div>
  );
}

export default App;
