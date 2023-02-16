import './App.css';
import React,{useState} from 'react';
import { Header } from './components/Header/header';
function App() {
  
  const [openButtonModal, setButtonModal] = useState(false);

  const [Book, setBooks] = useState({
    title: "",
    author: "",
    number: "",
    id: 0,
  });

  const [BookCollection, setBookCollection] = useState([]);

  const HandleChange = (value) => {
    setBooks({ ...Book, [value]: value });
    console.log(value);
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
  }

  return (<div>
    <Header openButtonModal={openButtonModal} setButtonModal={setButtonModal} HandleChange={HandleChange}/>
  </div>)
}

export default App;
