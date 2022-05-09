import React from "react";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

const liste = (props) => {
  const router = useRouter();
  console.log(props);
  return (
    <div className="container">
      <h1 className={styles.title}>
        {router.query.liste.charAt(0).toUpperCase() +
          router.query.liste.slice(1)}
      </h1>
      <table className={styles.tableau}>
        <tbody>
          {props.listeEnCours.map((el) => (
            <tr key={uuidv4()}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default liste;

export async function getStaticProps(context) {
  //! we use context in props ONLY WHEN we have a "GetStaticPaths"
  const slug = context.params.liste;
  const data = await import("/data/listes.json");
  const listeEnCours = data.englishList.find((list) => list.name === slug);
  return {
    props: {
      listeEnCours: listeEnCours.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("/data/listes.json");

  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }));
  return {
    /* paths: [
      {
        params: {
          liste: "words",
        },
        paths,
      },
    ], */
    paths,
    fallback: false,
  };
}
