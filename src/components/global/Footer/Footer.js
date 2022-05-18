import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-content"]}>Copyright © SpaceX Galaxy, 2022-2023. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
