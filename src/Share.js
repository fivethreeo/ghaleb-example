import React from "react";
import {
  useParams
} from "react-router-dom";

import ShareItems from "./ShareItems";

const Share = () => {
  let { slug } = useParams();
  let shareItem = ShareItems.filter(x=>x.slug===slug).shift();

  return (
    <>
    // HelmetMetaData with shareItem here
      <p>{ shareItem.title }</p>
    </>
  );
};

export default Share;
