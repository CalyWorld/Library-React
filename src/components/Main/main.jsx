import React from "react";

export const Main = ({ bookCollection, handleDelete }) => {
  return (
    <div className="m-0 p-0 flex flex-row gap-10 justify-center">
      {bookCollection.map((book) => (
        <div key={book.id} className="border-2 border-black">
          <div>
            <div>Title of Book : {book.title}</div>
            <div>Name of Author: {book.author}</div>
            <div>Page Number : {book.number}</div>
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={()=>{handleDelete(book)}}>Delete button</button>
          </div>
        </div>
      ))}
    </div>
  );
};
