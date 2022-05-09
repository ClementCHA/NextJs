import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const index = (props) => {
  return (
    <>
      <div className="container">
        <h1 className="my-4">Les listes de Vocabulaire</h1>
        <ul className="list-group">
          {props.array.map((item) => (
            <li key={uuidv4()} className="list-group-item">
              <Link href={`/listes/${item.name}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await import("/data/listes.json");

  const array = data.englishList;

  return {
    props: {
      array,
    },
  };
}
export default index;
