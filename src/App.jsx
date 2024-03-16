import NavBar from "src/components/Bio";
import Bio from "src/components/Bio/Bio.jsx";
import Skills from "src/components/Skills/Skills";
import Project from "src/components/Project/Project";
import Contact from "src/components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Bio />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
