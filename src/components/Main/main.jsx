import React from "react";
export const Main = ({ bookCollection, handleDelete, handleComplete }) => {
  return (
    <div className="m-0 p-0 flex flex-row gap-5 justify-start">
      {bookCollection.map((book) => (
        <div key={book.id} className="border-2 border-black">
          <div>
            <div className="flex flex-row"><p>Title of Book:</p><p className={`${book.completed ? "line-through" : ""}`}  >{book.title}</p></div>
            <div className="flex flex-col"><p>Name of Author: </p><p className={`${book.completed ? "line-through" : ""}`}>{book.author}</p></div>
            <div className="flex flex-row"><p>Page number:</p><p className={`${book.completed ? "line-through" : ""}`}>{book.number}</p></div>
          </div>
          <div className="flex justify-end gap-1.5">
            <button type="button" className="button-complete task-button" onClick={()=>{handleComplete(book)}}><i className="fa fa-check-circle"></i></button>
            <button type="button" className="button-delete task-button" onClick={()=>{handleDelete(book)}}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      ))}
    </div>
  );
};
