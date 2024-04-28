import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {name,email,pass}=await req.json();
        console.log(name,email,pass);
        return NextResponse.json({
            message:"user register"
        });
    } catch (error) {
        return NextResponse.json({
            message:"Error occured in reg"});
    }

}