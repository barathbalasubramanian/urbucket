
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST (req: NextRequest) {

    console.log('Api Here !!!')
    const body = await req.json()
    const filePath = path.join(process.cwd(), 'app/db.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);

    const newTodo = {
        id: Date.now(),
        ...body
    }

    data.todos.push(newTodo);
    // fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    const staticData = {
        status: "Stored",
        newTodo : newTodo
    };

    return NextResponse.json(staticData , { 
        status:200
    })

}

export async function GET (req: NextRequest) {
    const filePath = path.join(process.cwd(), 'app/db.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    
    return NextResponse.json(data.todos);
}