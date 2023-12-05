import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <h1 className={styles.logo}>Logo / AppNév</h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button className={styles.btnNav}>Button 1</button>
      </Link>
      <Link to="/">
        <button className={styles.btnNav}>Button 2</button>
      </Link>
      <Link to="/">
        <button className={styles.btnNav}>Button 2</button>
      </Link>
    </nav>
  );
}
