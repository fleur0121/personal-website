import style from "src/components/Skills/Skills.module.css";

const Skills = () => {
  return (
    <div className={style.container} id="skills">
      <h1>Skills</h1>
      <div className={style.skills}>
        <ul className={style.list}>
          <div className={style.programmingContainer}>
            <h3>Programming</h3>
            <div className={style.listProgramming}>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>
                <a href="https://git-scm.com/">Git</a>
              </li>
              <li>
                <a href="https://github.com/">Github</a>
              </li>
              <li>
                <a href="https://react.dev/">React</a>
              </li>
              <li>
                <a href="https://www.python.org/">Python</a>
              </li>
              <li>
                <a href="https://www.java.com/ja/">Java</a>
              </li>
              <li>
                <a href="https://cplusplus.com/">C++</a>
              </li>
            </div>
          </div>
          <div className={style.otherSkillsContainer}>
            <h3>Other Skills</h3>
            <div className={style.listOtherSkills}>
              <li>Japanese</li>
              <li>Piano</li>
              <li>Baking</li>
            </div>
          </div>

          {/* <FontAwesomeIcon icon={faGitAlt} />
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faCss3Alt} />
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faHtml5} />
      <FontAwesomeIcon icon={faPython} />
      <FontAwesomeIcon icon={faJava} /> */}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
