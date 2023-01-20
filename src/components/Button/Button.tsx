import styles from "./Button.module.css";
interface Props {
  children: string;
}
export default function Button({ children }: Props) {
  return (
    <button className={styles.btn}>
      <span className={styles.text_dark}>{children}</span>
      <span className={styles.text_white}>{children}</span>
    </button>
  );
}
