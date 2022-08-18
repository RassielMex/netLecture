import React, { useState } from "react";
import "./BookDetailContainer.css";
import backButtonImg from "../../img/back.png";
import starImg from "../../img/star.png";
import serie1 from "../../img/serie1.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import db from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const BookDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  const stars = [1, 2, 3, 4, 5];
  const clickedBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const itemRef = doc(db, "Libros", id);
        getDoc(itemRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              setBook({ id: snapshot.id, ...snapshot.data() });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  }, [id]);

  return (
    <div>
      <img
        className="detail-backButton"
        src={backButtonImg}
        alt=""
        onClick={clickedBack}
      />
      <div className="detail">
        <img className="detail-img" src={book.img || serie1} alt="1" />
        <h2>{book.titulo || ""}</h2>
        <div className="detail-ranking">
          {stars.map((star) => {
            return (
              <img
                key={star}
                className="detail-icon"
                src={starImg}
                alt={star}
              />
            );
          })}
        </div>
        <h5 className="detail-duration">120min</h5>
        <p>{book.reseña || ""}</p>
      </div>
    </div>
  );
};

export default BookDetailContainer;
