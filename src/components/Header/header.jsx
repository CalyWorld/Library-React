import React from "react";
import { Form } from "../Form/form";

export const Header = ({openButtonModal, setButtonModal, handleChange, handleSubmit, book}) =>{
    
    return(
        <header>
            <ul className="flex flex-row justify-between m-0 p-10">
                <li>Logo</li>
                <li><button onClick= {()=>{setButtonModal(true)}}>Button</button>{openButtonModal && (<Form setButtonModal={setButtonModal} handleChange={handleChange} handleSubmit={handleSubmit} book={book}/>)}</li>
            </ul>
        </header>
    )
}