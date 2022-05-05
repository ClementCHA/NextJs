import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const article = () => {
  const router = useRouter();

  const pushFunction = () => {
    router.push("/");
  };

  return (
    <div>
      <Head>
        <meta http-equiv="x-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{router.query.slug}</title>
      </Head>
      <h1> {router.query.slug}</h1>
      <button onClick={pushFunction}> Push to home </button>
    </div>
  );
};

export default article;
