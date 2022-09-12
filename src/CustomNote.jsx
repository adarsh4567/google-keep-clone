import React from "react";
import "./index.css";


const CustomNote = (prop) => {

    const deleteNote = () => {
        prop.deleteItem(prop.id);
    }
    return(<>
    
    <div className="custom">
    
        <h1>{prop.title}</h1>
        <br></br>
        <p>{prop.content}</p>
        <button type="button" className="btn" onClick={deleteNote}>
        <i class="fas fa-trash"></i>
        </button>
        
    </div>
    
    
    
    
    </>);
}
export default CustomNote;