import React from "react";

import Link from "next/link";

const blog = () => {
  return (
    <div>
      <h1>BLOG</h1>
      <Link href={`/blog/10 plats basque`}>
        <a>10 plats Basque</a>
      </Link>
    </div>
  );
};

export default blog;
