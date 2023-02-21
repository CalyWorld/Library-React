import React from "react";
export const Form = ({ setButtonModal, book, handleChange, handleSubmit }) => {
  return (
    <div className="flex justify-center absolute top-50 left-0 right-0">
      <form className="w-96 border-2 border-black bg-gray-800 text-white p-2">
        <label className="flex flex-row gap-6">
          {" "}
          Title of Book:
          <input
            placeholder="Title of Book"
            name="title"
            value={book.title}
            type="text"
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <br></br>
        <label className="flex flex-row gap-6">
          {" "}
          Author:
          <input
            placeholder="Name of Author"
            name="author"
            value={book.author}
            onChange={handleChange}
            type="text"
            className="text-black"
          />
        </label>
        <br></br>
        <label className="flex flex-row gap-6">
          {" "}
          Number:
          <input className="text-black" placeholder="Current Page Number" name="number" type="number" value={book.number} onChange={handleChange} />
        </label>
        <br></br>
        <br></br>
        <div className="flex justify-end gap-5">
          {" "}
          <button type="button" onClick={handleSubmit}><i className="fa-sharp fa-solid fa-check"></i></button>
          <button
            type="button"
            onClick={() => {
              setButtonModal(false);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
