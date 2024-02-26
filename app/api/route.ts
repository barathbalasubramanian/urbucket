
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import axios from 'axios';

export async function POST(req: NextRequest) {
    try {
        console.log('Api Here !!!')
        const body = await req.json();
        console.log("body:", body);
        
        const filePath = path.join(process.cwd(), 'app/db.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);



        const newTodo = {
            id: Date.now(),
            ...body
        };
        
        console.log(newTodo)

        // const apiUrl = "http://127.0.0.1:3000/api";
        // const res = await axios.post(apiUrl, newTodo, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        data.todos.push(newTodo);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        const staticData = {
            status: "Stored",
            newTodo: newTodo
        };

        return NextResponse.json(staticData, {
            status: 200
        });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.error();
    }
}

export async function GET (req: NextRequest) {
    const filePath = path.join(process.cwd(), 'app/db.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    
    return NextResponse.json(data.todos);
}