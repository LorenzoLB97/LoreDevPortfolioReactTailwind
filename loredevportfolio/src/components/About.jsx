import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    {/* Hero Description */}
                    <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white">
                        Hi there! I'm <span className="text-green-500 font-bold">Foti</span>.  
                        <br className="hidden lg:inline-block" />I love to build amazing apps.
                    </h1>
                    <p className="my-8 leading-relaxed text-2xl">
                        I am a junior web developer based in New York City with a passion for learning and becoming better everyday.
                        I specialize in front-end developement with a working knowledge of back-end technologies.  
                    </p>
                    {/* Buttons */}
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            View Projects
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}