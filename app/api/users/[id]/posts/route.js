import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { request } from "express";

export const GET = async (request, { params } ) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200})
    } catch (error){
        return new Response("Falha ao carregar posts", { status: 500 })
    }
}