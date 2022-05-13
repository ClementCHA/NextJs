import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";
const Home = (props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    newWord();
  }, []);

  const newWord = () => {
    fetch("/api/vocapi")
      .then((res) => res.json())
      .then((data) => setState(data));
  };

  let randomWord;
  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
  }

  return (
    <>
      <Head>
        <meta httpEquiv="x-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>
      <div>
        <h1 className={styles.title}>Mot au hasard</h1>

        {/*   <table className={styles.tableau}>
          <tbody>
            {props.array.map((el) => (
              <tr key={uuidv4()}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <button onClick={newWord} className="btn btn-primary d-block m-auto">
          Get RANDOM WORDS
        </button>
        <h2 className="text-center"> {randomWord}</h2>
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

  //! On peut return un page 404 avec une condition (si donnée vide, si donnée pas bonne, etc avec la prop "notFound")
  /*
  if (array.length === 0) {
    return {
      notFound: true,
    };
  }
  */

  //! Mais on peut aussi redirect
  if (array.length === 0) {
    return {
      redirect: {
        destination: "/isr",
      },
    };
  }

  return {
    props: {
      array,
    },
  };
}
