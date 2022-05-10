import react from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/listes">
        <a>Listes</a>
      </Link>
      <Link href="/isr">
        <a>ISR</a>
      </Link>
      <Link href="/cours">
        <a>BTC</a>
      </Link>
    </nav>
  );
  //? ISR = Incremental Static generation
};

export default NavBar;
