import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { request } from "express";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Falha ao criar post.", { status: 500 });
    }
}