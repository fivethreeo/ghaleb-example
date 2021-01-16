import React from "react";
import {
  useHistory
} from "react-router-dom";

import ShareItems from "./ShareItems";

const Carousel = () => {

  return (
    <>
    {ShareItems.map((shareItem) => (
      <CarouselItem shareItem={shareItem} />
    ))}
    </>
  );
};

const CarouselItem = ({shareItem}) => {

  const history = useHistory();

  function handleClick() {
    history.push("/share/"+shareItem.slug);
  }

  return (
    <p onClick={handleClick}>{ shareItem.title }{ shareItem.image }</p>
  );
};

export default Carousel;
