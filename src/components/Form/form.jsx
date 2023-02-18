import React from "react";
export const Form = ({ setButtonModal, book, handleChange, handleSubmit }) => {
  return (
    <div className="flex justify-center absolute top-0 left-0 right-0 ">
      <form className="w-96">
        <label className="flex flex-row gap-6">
          {" "}
          Title of Book:
          <input
            placeholder="Title of Book"
            name="title"
            value={book.title}
            type="text"
            onChange={handleChange}
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
          />
        </label>
        <br></br>
        <label className="flex flex-row gap-6">
          {" "}
          Number:
          <input placeholder="Current Page Number" name="number" type="number" value={book.number} onChange={handleChange} />
        </label>
        <br></br>
        <br></br>
        <div className="flex justify-center gap-6">
          {" "}
          <button type="button" onClick={handleSubmit}>Submit form</button>
          <button
            type="button"
            onClick={() => {
              setButtonModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
