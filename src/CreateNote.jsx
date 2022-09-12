import React, { useState } from "react";
import './index.css'

const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const InputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setNote((prevData) => {
            return{
                ...prevData,
                [name]:value,
            }
        });
        
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });

    };

    const expandIt = () => {
        setExpand(true);
    }
    return(<>

    <div className="note">
        <form>
       { expand?    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"></input>:null}
            <textarea onClick={expandIt} rows="" col="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note."></textarea>
        {expand ?    <button type="button" className="btn" onClick={addEvent}>+</button>:null}
        </form>
    </div>
    
    
    
    
    
    
    </>)
}

export default CreateNote;