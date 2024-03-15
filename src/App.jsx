import NavBar from "@components/Nav/Nav";
import Bio from "@components/Bio/Bio.jsx";
import Skills from "@components/Skills/Skills";
import Project from "@components/Project/Project";
import Contact from "./components/Contact/Contact";
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
