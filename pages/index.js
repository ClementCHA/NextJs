import Head from "next/head";

import styles from "../styles/Home.module.css";
const Home = (props) => {
  return (
    <>
      <Head>
        <meta http-equiv="x-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div>
        <h1 className={styles.title}>Vocabulaire de base</h1>
        <table className={styles.tableau}>
          <tbody>
            {props.array.map((el) => (
              <tr>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  //? Data from API
  //! Server Side rendering, we can have some API KEY here or credential, that's totally fine cause that's never gonna be return
  const data = await import(`/data/vocabulary.json`);
  const array = data.vocabulary;
  return {
    props: {
      array,
    },
  };
}
