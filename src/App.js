import './App.css';
import React,{useState} from 'react';
import { Header } from './components/Header/header';
import { Main } from './components/Main/main';
function App() {
  
  const [openButtonModal, setButtonModal] = useState(false);

  const [Book, setBooks] = useState({
    title: "",
    author: "",
    number: "",
    id: 0,
  });

  const [BookCollection, setBookCollection] = useState([]);

  const HandleChange = (e) => {
    setBooks({ ...Book, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    setBookCollection([...BookCollection, Book]);
    setBooks({
      ...Book,
      title: "",
      author: "",
      number: "",
      id: Book.id + 1,
    });
    setButtonModal(false);
  }

  const handleDelete = (book) =>{
      setBookCollection((BookCollection)=> BookCollection.filter((eachBook)=> eachBook !== book));
  }

  return (<div>
    <Header openButtonModal={openButtonModal} setButtonModal={setButtonModal} handleChange={HandleChange} handleSubmit={handleSubmit} book={Book}/>
    <Main bookCollection={BookCollection} handleDelete={handleDelete}/>
  </div>)
}

export default App;
