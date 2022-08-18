import React from "react";
import "./BookContainer.css";
import { useEffect } from "react";
import db from "../../services/firebaseConfig";
import { useState } from "react";
import BookList from "../BookList/BookList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const BookContainer = ({ grade }) => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getData(grade);
      }
    });
  }, [grade]);

  const getData = (grade) => {
    const colRef = collection(db, "Libros");
    const q = query(colRef, where("grado", "==", grade));
    getDocs(q)
      .then((snapShot) => {
        if (!snapShot.empty) {
          setBookData(
            snapShot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const renderList = (listNumber) => {
    if (bookData.length >= 3) {
      switch (listNumber) {
        case 1:
          return bookData.slice(0, bookData.length / 3 - 1);
        case 2:
          return bookData.slice(
            bookData.length / 3,
            (2 * bookData.length) / 3 - 1
          );
        case 3:
          return bookData.slice((2 * bookData.length) / 3, bookData.length - 1);
        default:
          return [];
      }
    } else {
      switch (listNumber) {
        case 1:
          return bookData;
        default:
          return [];
      }
    }
  };

  return (
    <div className="book-container ">
      <BookList title={"Continuar leyendo..."} books={renderList(1)} />
      {bookData.length >= 3 && (
        <BookList title={"Lo mas leído"} books={renderList(2)} />
      )}
      {bookData.length >= 3 && (
        <BookList title={"Creemos te podría gustar"} books={renderList(3)} />
      )}
    </div>
  );
};

export default BookContainer;
