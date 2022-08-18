import React from "react";
import "./Book.css";
import serie1 from "../../img/serie1.jpeg";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id } = book;
  return (
    <div className="book">
      <Link to={`/detail/${id}`}>
        <img src={book.img || serie1} alt="serie" />
      </Link>
    </div>
  );
};

export default Book;
