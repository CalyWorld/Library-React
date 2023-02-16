import React from "react";
export const Form = ({setButtonModal, Book, HandleChange}) => {
  return (
    <div className="flex justify-center absolute top-100 left-0 right-0 ">
      <form className="w-96">
        <label className="flex flex-row gap-6">
          {" "}
          Title:
          <input placeholder="title" name="title" type="text" onChange={HandleChange} />
        </label>
        <br></br>
        <label className="flex flex-row gap-6">
          {" "}
          Description:
          <input placeholder="description" name="description" type="text" />
        </label>
        <br></br>
        <label className="flex flex-row gap-6">
          {" "}
          Due Date:
          <input placeholder="date" name="date" type="date" />
          <input placeholder="time" name="time" type="time" />
        </label>
        <br></br>
        <label className="flex flex-row gap-6">
          {" "}
          Priority:
          <select name="priority" className="w-64">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br></br>
        <div className="flex justify-center gap-6">
          {" "}
          <button type="button">Submit form</button>
          <button type="button" onClick={()=>{setButtonModal(false)}}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
