
import { NextResponse } from "next/server";

interface FormData {
    name: string;
    email: string;
    cname: string;
    phone: string;
    query: string;
}


export async function POST(request){
    const formData = await request.json();
    console.log(formData)


    return NextResponse.json({result : "dvxc "})
}