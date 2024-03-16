import NavBar from "src/components/Nav/Nav.jsx";
import Bio from "src/components/Bio/Bio.jsx";
import Skills from "src/components/Skills/Skills.jsx";
import Project from "src/components/Project/Project.jsx";
import Contact from "src/components/Contact/Contact.jsx";
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
