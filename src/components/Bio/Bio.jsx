import styles from "src/components/Bio/Bio.module.css";

const Bio = () => {
  return (
    <div className={styles.container} id="bio">
      <h1>Introduction</h1>
      <div className={styles.bioContents}>
        <p>
          Hi! I am Fuka Nagata. Thank you for visiting my website. I am a
          student at Langara College majoring in CS. I was born in Japan and
          moved to Canada in 2020. I am a dog lover and foodie. I have a strong
          interest in coding. This is my first personal website that uses React!
        </p>
        <div className={styles.images}>
          <img src="src/img/me.JPG" alt="me" title="me" />
          <img src="src/img/dogs.JPG" alt="dogs" title="dogs" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
