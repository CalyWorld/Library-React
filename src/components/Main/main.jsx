import React from "react";

export const Main = ({ bookCollection, handleDelete, handleComplete }) => {
  return (
    <div className="m-0 p-0 flex flex-row gap-10 justify-center">
      {bookCollection.map((book) => (
        <div key={book.id} className="border-2 border-black">
          <div>
            <div><p className={`${book.completed ? "line-through" : ""}`}  >Title of Book : {book.title}</p></div>
            <div><p className={`${book.completed ? "line-through" : ""}`}>Name of Author: {book.author}</p></div>
            <div><p className={`${book.completed ? "line-through" : ""}`}>Page Number : {book.number}</p></div>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" className="button-complete task-button" onClick={()=>{handleComplete(book)}}><i className="fa fa-check-circle"></i></button>
            <button type="button" className="button-delete task-button" onClick={()=>{handleDelete(book)}}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      ))}
    </div>
  );
};
