import React from 'react';
import Image from 'next/image';

const CV = () => {
    return (

        <div className='mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism'>
            <div className='flex justify-center items-center'>
                <header className="random_gradient text-center head_text">
                    <h1 className="font-bold">Ruben Silva</h1>

                    <Image src="/assets/images/eu.png" width={150}
                        height={150} className="rounded-full" alt="profile" />
                    <h2 className="text-lg font-semibold">Junior Developer</h2>
                </header>
            </div>
            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p>Mobile: +351 925992819</p>
                <p>Email: ruben_alex_23@hotmail.com</p>
                <p>LinkedIn: <a href="www.linkedin.com/in/ruben-silva-a96866272">www.linkedin.com/in/ruben-silva-a96866272</a></p>
                <p>GitHub: <a href="github.com/srkzz">github.com/srkzz</a></p>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul>
                    <li>Spanish: Limited Working Proficiency</li>
                    <li>Portuguese: Native or Bilingual</li>
                    <li>Japanese: Limited Working Proficiency</li>
                    <li>English: Native or Bilingual</li>
                </ul>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul>
                    <li>Commercial English (IEFP, January 2021 - August 2021)</li>
                    <li>TVDE Driving</li>
                    <li>Programmer Level 4 - EISNT + IEFP </li>
                </ul>
            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
                <article className="mb-6">
                    <h4 className="text-lg font-semibold">Junior Developer</h4>
                    <p>Develop2You</p>
                    <p>Porto, Portugal</p>
                    <p>March 2023 - April 2023 (2 months)</p>
                    <ul>
                        <li>Developed a full-stack web project using Next.js, React, and MongoDB.</li>
                        <li>Implemented dynamic data fetching and server-side rendering for improved performance.</li>
                        <li>Collaborated with a team to ensure successful project delivery.</li>
                    </ul>
                </article>

                {/* Other experience entries */}

            </section>

            <section className="my-3 mx-4 glassmorphism">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <article className="mb-6">
                    <h4 className="text-lg font-semibold">Developer, Computer Programming/Programmer, General Computing</h4>
                    <p>Eisnt - Centro de Formação Profissional</p>
                    <p>February 2022 - May 2023</p>
                </article>

                {/* Other education entries */}

            </section>
        </div>
    );
};

export default CV;