import React, { useState } from "react";
import Header from "./Header";
import Tote from './CreateNote'
import CustomNote from "./CustomNote";

const Tapp = () => {

const [addItem,setAddItem] = useState([]);

    const addNote = (note) => {
         
        setAddItem((preData) => {
            return[...preData, note];
        });
        console.log(note);

    };

    const onDelete = (id) => {
        setAddItem((oldData) => 
            oldData.filter((curr,ind) => {
                return ind !== id;
            })
        );

    }
    return(<>
    
    <Header></Header>
    <div className="center">
    <Tote passNote={addNote}/>
    </div>
    <div className="modified">
    {addItem.map((value,index) => {
        return(<>
        
       <CustomNote key={index} id={index} title={value.title} deleteItem={onDelete} content={value.content}/>
       

       </>);
    })}
    </div>
    
    
    
    
    
    </>);
}

export default Tapp;