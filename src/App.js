import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/main";
function App() {
  const [openButtonModal, setButtonModal] = useState(false);

  const [Book, setBooks] = useState({
    title: "",
    author: "",
    number: "",
    id: 0,
    completed: false,
  });

  const [BookCollection, setBookCollection] = useState([]);

  const HandleChange = (e) => {
    setBooks({ ...Book, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookCollection([...BookCollection, Book]);
    setBooks({
      ...Book,
      title: "",
      author: "",
      number: "",
      id: Book.id + 1,
      completed: false,
    });
    setButtonModal(false);
  };

  const handleDelete = (book) => {
    setBookCollection((BookCollection) =>
      BookCollection.filter((eachBook) => eachBook !== book)
    );
  };

  const handleComplete = (book) => {
    setBookCollection(
      BookCollection.map((eachBook) => 
        eachBook.id === book.id
          ? { ...eachBook, 
            completed: !eachBook.completed }
          : eachBook
      )
    );
  };

  return (
    <div>
      <Header
        openButtonModal={openButtonModal}
        setButtonModal={setButtonModal}
        handleChange={HandleChange}
        handleSubmit={handleSubmit}
        book={Book}
      />
      <Main bookCollection={BookCollection} handleDelete={handleDelete}  handleComplete={handleComplete} />
    </div>
  );
}

export default App;
