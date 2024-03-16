import styles from "src/components/Project/Project.module.css";

const Project = () => {
  return (
    <div className={styles.container} id="project">
      <h1>Project</h1>
      <div className={styles.projectFlexy}>
        <h3>
          <a href="https://github.com/yunahu/FlexyCook">FlexyCook</a>
        </h3>
        <div className={styles.infoFlexy}>
          <img
            src="src/img/logo.png"
            alt="FlexyCook-logo"
            title="FlexyCook-logo"
          />
          <p>
            FlexyCook is the project that currently working on with team of 4.
            This is the recipe website that uses three APIs:{" "}
            <a href="https://spoonacular.com/food-api">Spoonacular</a>,{" "}
            <a href="https://developer.todoist.com/guides/#developing-with-todoist">
              todoist
            </a>
            , and{" "}
            <a href="https://github.com/yunahu/flexy-cook-api">
              our original API
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
