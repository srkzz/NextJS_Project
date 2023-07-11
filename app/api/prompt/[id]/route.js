import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET PARA LER
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate('creator');
        
        if(!prompt) return new Response("Post não encontrado.", {status: 404});
        
        return new Response(JSON.stringify(prompt), { status: 200})
    } catch (error){
        return new Response("Falha Interna do Servidor", { status: 500 })
    }
}

// PATH PARA UPDATE (editar)
export const PATCH = async (request , {params}) => {

    const {prompt, tag } = await request.json();

    try{
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);
   

        if(!existingPrompt) return new Response("Post não encontrado.", {status: 404})

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {

         return new Response("Falha ao editar o post.", { status: 500 })
     }

};

// DELETE 
export const DELETE = async(request, { params }) => {
    try {
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);

        return new Response("Post apagado com sucesso!", { status: 200 })
       
    } catch(error) {
        return new Response("Falha ao apagar o post!", { status: 500})
    }
};