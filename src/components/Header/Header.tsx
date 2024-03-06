import styles from "./Header.module.css";
import Logo from "../../icons/logo.svg";
import Phone from "../../icons/phone.svg";
import { poppins } from "@/fonts/fonts";

const Header = () => {
  return (
    <header className={`${styles.header} ${poppins.className}`}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <div className={styles.phone}>
            <Phone />
            <a href="tel:+4401618201101">01618201101</a>
          </div>
          <a href="#" className={styles.consultation}>Free consultation</a>
          <a href="#" className={styles.licence}>Apply for a licence</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
