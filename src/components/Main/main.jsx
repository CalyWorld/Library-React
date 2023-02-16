import React from "react";

export const Main = ({ bookCollection }) => {
  return (
    <div className="m-0 p-0">
      {bookCollection.map((book) => (
        <div key={book.id}>
          <div>{book.title}</div>
        </div>
      ))}
    </div>
  );
};
