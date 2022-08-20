import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Book = ({ book }) => {
  const [showImg, setShowImg] = useState(false);
  const { id, img } = book;
  useEffect(() => {
    const imageSource = new Image();
    imageSource.src = img;
    imageSource.onload = () => {
      setShowImg(true);
    };
  }, [img]);

  return (
    <div className="book">
      <Link to={`/detail/${id}`}>
        {showImg && <img src={img} alt="serie" />}
        {!showImg && <TailSpin color="#FFFF" height={40} width={40} />}
      </Link>
    </div>
  );
};

export default Book;
