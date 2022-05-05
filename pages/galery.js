import React from "react";
import Image from "next/image";

import img1 from "../public/assets/img1.jpg";
import img2 from "../public/assets/img2.jpg";
import img3 from "../public/assets/img3.jpg";

const Galery = () => {
  return (
    <div>
      <Image
        layout="responsive"
        placeholder="blur "
        src={img1}
        width="5657"
        height="3371"
      />
      <Image layout="responsive" src={img2} width="3253" height="2440" />
      <Image layout="responsive" src={img3} width="2671" height="4000" />
    </div>
  );
};

export default Galery;
