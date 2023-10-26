
"use client";

import React, { useState } from "react";

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState(''); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "title") {
            setTitle(value);
        } else if (name === "choice") {
            setStatus(value);
        }
    }

    const handleForm = async (e) => {
        e.preventDefault(); 
    
        const todoData = {
            title,
            status
        };
    
        try {

            const res = await fetch('/api', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(todoData)
            });
            const data = await res.json()
            console.log(data.status);

        } catch (error) {
            console.error("Network or fetch error:", error.message);
        }
    };
    
    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="title">Title : </label>
                <input 
                    type="text" 
                    placeholder="title" 
                    value={title} 
                    onChange={handleChange} 
                    name="title" 
                    className="text-rose-600 px-2"
                />
                <br />
                <label htmlFor="status">Status</label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="choice" 
                        value="Completed" 
                        checked={status === 'Completed'} 
                        onChange={handleChange} 
                    /> Completed
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="choice" 
                        value="Not yet" 
                        checked={status === 'Not yet'} 
                        onChange={handleChange} 
                    /> Not Yet
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;
