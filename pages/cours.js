import React from "react";

const cours = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Le BTC est à : {props.result.bpi.EUR.rate} </h1>
    </div>
  );
};

//https://api.condesk.com/v1/bpi/currentprice.json

export async function getServerSideProps(context) {
  //! With the server side rendering, it can take more time depending on the data we want to load, but
  //! we assure to always have the LATEST data refresh
  const data = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const result = await data.json();

  return {
    props: {
      result,
    },
  };
}
export default cours;
