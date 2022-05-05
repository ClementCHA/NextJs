import Image from "next/image";
import Head from "next/head";

import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <>
      <Head>
        <meta http-equiv="x-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Le blog de la cuisine Basque</title>
      </Head>
      <div className={styles.container}>Hellow NEXT JS</div>
    </>
  );
};

export default Home;
