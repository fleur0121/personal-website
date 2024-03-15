import styles from "./Contact.module.css";

const Mailto = ({ subject = "", body = "", children, className }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a
      className={styles.mailto}
      href={`mailto:fnagata00@mylangara.ca${params}`}
    >
      {children}
    </a>
  );
};

export default Mailto;
