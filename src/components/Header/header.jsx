import React from "react";
import { Form } from "../Form/form";

export const Header = ({openButtonModal, setButtonModal, handleChange, handleSubmit, book}) =>{
    
    return(
        <header>
            <ul className="flex flex-row justify-between m-0 p-10">
                <li><i className="fa-solid fa-book fa-2x"></i></li>
                <li className="flex justify-center align-text gap-2"><img src="register.png" alt="form-icon"></img><button onClick= {()=>{setButtonModal(true)}}>Form</button>{openButtonModal && (<Form setButtonModal={setButtonModal} handleChange={handleChange} handleSubmit={handleSubmit} book={book}/>)}</li>
            </ul>
        </header>
    )
}
