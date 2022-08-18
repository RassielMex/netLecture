import React from "react";
import { useState } from "react";
import Book from "../Book/Book";
import "./BookList.css";

const BookList = ({ title, books }) => {
  const calculateMargin = () => {
    let maxNumberofBooks = Math.floor(window.innerWidth / (11 * 16 + 16));
    let widthGrid = maxNumberofBooks * (11 * 16 + 16);
    return (window.innerWidth - widthGrid) / 2;
  };
  const [margin, setMargin] = useState(calculateMargin);
  const handleResize = () => {
    setMargin(calculateMargin);
  };
  window.addEventListener("resize", handleResize);
  return (
    <div className="book-list">
      <h2 style={{ marginLeft: margin }}>{title} </h2>
      <div className="book-list-grid">
        {books.map((book) => (
          <Book book={book} key={book.titulo} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
