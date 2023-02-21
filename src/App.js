import "./App.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/main";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [openButtonModal, setButtonModal] = useState(false);

  const [Book, setBooks] = useState({
    title: "",
    author: "",
    number: "",
    id: "",
    completed: false,
  });



  const [BookCollection, setBookCollection] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "library"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const libraryArray = [];
      querySnapshot.forEach((doc) => {
        libraryArray.push({ ...doc.data(), id: doc.id });
      });
      setBookCollection(libraryArray);
      console.log(libraryArray);
    });
    return () => unsub();
  }, []);

  const HandleChange = (e) => {
    e.preventDefault();
    setBooks({ ...Book, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBookCollection([...BookCollection, Book]);
    setButtonModal(false);
    await addDoc(collection(db, "library"), {
      title: Book.title,
      author: Book.author,
      number: Book.number,
      completed: Book.completed,
    });

    setBooks({
      ...Book,
      title: "",
      author: "",
      number: "",
      id: "",
      completed: false,
    });
  };

  const handleComplete = async (book) => {
    await updateDoc(doc(db, "library", book.id), {
      completed: !book.completed,
    });
  };

  const handleDelete = async (book) => {
    await deleteDoc(doc(db, "library", book.id));
  };

  //Old functionality without firestore, give id a value in Book state though
  // const handleDelete = (book) => {
  //   setBookCollection((BookCollection) =>
  //     BookCollection.filter((eachBook) => eachBook !== book)
  //   );
  // };

  // const handleComplete = (book) => {
  //   setBookCollection(
  //     BookCollection.map((eachBook) =>
  //       eachBook.id === book.id
  //         ? { ...eachBook, completed: !eachBook.completed }
  //         : eachBook
  //     )
  //   );
  // };

  return (
    <div className="pr-10 pl-10">
      <Header
        openButtonModal={openButtonModal}
        setButtonModal={setButtonModal}
        handleChange={HandleChange}
        handleSubmit={handleSubmit}
        book={Book}
      />
      <Main
        bookCollection={BookCollection}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleChange={HandleChange}
      />
    </div>
  );
}

export default App;
