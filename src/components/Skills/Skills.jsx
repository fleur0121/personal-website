import style from "./Skills.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGitAlt,
//   faJs,
//   faCss3Alt,
//   faJava,
//   faReact,
//   faHtml5,
//   faPython,
// } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className={style.container}>
      <h1>Skills</h1>
      <div className={style.skills}>
        <ul className={style.list}>
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
            <a href="https://www.python.org/">Java</a>
          </li>
          <li>
            <a href="https://cplusplus.com/">C++</a>
          </li>

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
