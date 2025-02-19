// src/App.jsx

import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Testimonials from "./components/Testimonials";

export default function App() { 
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <About />
            <Navbar />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
        </main>
    );
}