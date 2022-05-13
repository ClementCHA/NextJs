import React from "react";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";

const Liste = (props) => {
  const router = useRouter();

  if (!props.listeEnCours) {
    return <h1> Chargement </h1>;
  }
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

export default Liste;

export async function getStaticProps(context) {
  //! we use context in props ONLY WHEN we have a "GetStaticPaths"
  const slug = context.params.liste;
  const data = await import("/data/listes.json");
  const listeEnCours = data.englishList.find((list) => list.name === slug);
  if (!listeEnCours) {
    return {
      notFound: true,
    };
  }

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
    // We can set fallback: true => We don't load ALL the pages, we only load them WHEN we need it
    // let's imagine a commercial website with million of page, we can load only the best article and
    // generate after the data

    // We can also have fallback: "blocking" to load date only on server side => Never used
  };
}
