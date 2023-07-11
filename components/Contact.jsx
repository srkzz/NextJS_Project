'use client';
import React from 'react';
import { useRouter } from 'next/navigation';



const Contact = ({ text, email, phone, message }) => {
    
    const router = useRouter();
    
    return (
        <div className="static max-w-md mx-auto my-10 bg-white  rounded-md shadow-sm w-full max-w-2x1 flex flex-col glassmorphism">
            <div className="text-center">
                <h1 className=" text-3xl font-semibold random_gradient">
                    Contact Me
                </h1>
                <p className="text-gray-400 dark:text-gray-400">
                    Preencha o formulário e contacte-me!
                </p>
            </div>
            <form action="https://api.web3forms.com/submit" method="POST" classNameName='mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism'>
                <input type="hidden" name="access_key" value="745fd456-da86-4d3b-bd5e-fda3e3bc4f1a" />
                <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                <div className="mb-6">
                    <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Adão ou Eva?" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="exemplo@google.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                    <label for="phone" className="text-sm text-gray-600 dark:text-gray-400">Contacto</label>
                    <input type="text" name="phone" id="phone" placeholder="+XXX XXX XXX XXX" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div className="mb-6">
                    <label for="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Mensagem</label>

                    <textarea rows="5" name="message" id="message" placeholder="A sua mensagem aqui.." className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                </div>
                <div className="mb-6">
                    <button  type="submit" className="w-full px-3 py-4 text-white bg-green-300 rounded-md focus:bg-cyan-600 focus:outline-white" onClick={() => router.push('/')}>
                        Enviar Mensagem
                    </button>
                </div>
                <p className="text-base text-center text-gray-400" id="result"></p>
            </form>
        </div>
    );
};
export default Contact;


