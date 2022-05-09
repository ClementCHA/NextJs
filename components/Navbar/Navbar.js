import react from "react";
import Link from "next/link";

import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/blog/article">
        <a>Blog</a>
      </Link>
      <Link href="/isr">
        <a>ISR</a>
      </Link>
    </nav>
  );
  //? ISR = Incremental Static generation
};

export default NavBar;
