import React from "react";

const contact = (props) => {
  return <h1> {props.data.quotes[0].text} </h1>;
};

export default contact;

export async function getStaticProps() {
  const quote = await fetch(
    "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
  );
  const data = await quote.json();
  return {
    props: {
      data,
    },
    revalidate: 20,
    // That propriety wont refresh before 20 secondes even if we refresh the page
  };
}

//
