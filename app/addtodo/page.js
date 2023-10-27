
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
        if (title === "" && status === "" ) { return } 
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

            setTitle('')
            setStatus('');

        } catch (error) {
            console.error("Network or fetch error:", error.message);
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center text-lg">
            <form onSubmit={handleForm} className="flex flex-col justify-center w-100 min-h-screen gap-3">

                <label htmlFor="title" aria-required className="text-blue-400">Title : </label>
                <div>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={handleChange} 
                        name="title" 
                        className="text-blue-600 px-2 outline-none py-1 capitalize bg-inherit border-2 border-blue-300 mb-2" required
                    />
                </div>
                <div>
                    <label htmlFor="status" className="text-blue-400" >Status</label>
                </div>
                <div className="flex gap-4">
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
                </div>
                <div>
                    <button type="submit" className="mt-3 text-blue-400 hover:scale-125 hover:text-blue-600 transition duration-400 ">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
