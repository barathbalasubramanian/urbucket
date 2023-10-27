
"use client";

import React, { useState, useEffect } from 'react';

interface Todo {
    id: number;
    title: string;
    description?: string;
    status: string;
}

const TodoCard: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('/api');
                const data: Todo[][] = await response.json();
                const flattenedTodos = data.flat();
                setTodos(flattenedTodos);

            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div className='flex text-white flex-col gap-y-3 mx-5 justify-center w-100 mt-10 text-left '>
            {
                todos.map((todo) => (
                    <div key={todo.id} >
                        {todo.title} - {todo.status}
                    </div>
                ))
            }
        </div>
    )
}

export default TodoCard;
