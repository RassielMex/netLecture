import React from "react";
import { useParams } from "react-router-dom";
import BookContainer from "../../components/BookContainer/BookContainer";
import Navbar from "../../components/navbar/Navbar";

const Main = () => {
  let { grade } = useParams();

  return (
    <div>
      <Navbar />
      <BookContainer grade={grade} />
    </div>
  );
};

export default Main;
