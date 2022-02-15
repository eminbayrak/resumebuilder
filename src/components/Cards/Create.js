import React from "react";
// import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useSelector } from "react-redux";
import "assets/styles/resume.css";

// Create Document Component
export default function Create() {
    const contactValues = useSelector((state) => state.contact.value);
    console.log(contactValues)
    return (
        <>
            {/* <Page size="A4" > */}
                {/* <body className="font-sans antialiased w-full"> */}
                    <div className="container mx-auto max-w-screen-xl">
                        <main
                            id="wrapper"
                            className="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
                        >
                            <div id="sidebar" className="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white">
                                <div className="px-2 mb-12">
                                    <img
                                        src="./assets/jack-finnigan-rriAI0nhcbc-unsplash.jpg"
                                        alt="Profile Picture"
                                        className="rounded-full w-48 mx-auto mb-2"
                                    />
                                    <h1 className="text-center text-3xl font-semibold mb-2">Danny Dev</h1>
                                    <h2 className="text-center text-xl font-light">Fullstack Developer</h2>
                                </div>

                                <div className="font-light text-lg px-2 mb-12">
                                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/mail-outline.svg"
                                            className="inline w-6 mr-4"
                                            alt="Mail icon"
                                        />
                                        <a href="mailto:">dannydev@example.com</a>
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/call-outline.svg"
                                            className="inline w-6 mr-4"
                                            alt="Phone icon"
                                        />
                                        <a href="tel:">0123 456 789</a>
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/home-outline.svg"
                                            className="inline w-6 pb-1 mr-4"
                                            alt="House icon"
                                        />
                                        <div>
                                            <p>Dev Street 13</p>
                                            <p>Dev Town</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="font-light text-lg px-2 mb-12">
                                    <h2 className="text-xl font-semibold mb-4">Personal</h2>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/egg-outline.svg"
                                            className="inline w-6 mr-4"
                                            alt="Egg Icon"
                                        />
                                        <span>Born on 27th of May 2000</span>
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/people-outline.svg"
                                            className="inline w-6 mr-4"
                                            alt="Two Persons Icon"
                                        />
                                        <span>Married, two kids</span>
                                    </div>
                                </div>

                                <div className="font-light text-lg px-2 mb-12">
                                    <h2 className="text-xl font-semibold mb-4">On the Web</h2>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/logo-github.svg"
                                            className="inline w-6 mr-4"
                                            alt="GitHub Logo"
                                        />
                                        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/logo-stackoverflow.svg"
                                            className="inline w-6 mr-4"
                                            alt="Stack Overflow Logo"
                                        />
                                        <a href="#" target="_blank" rel="noopener noreferrer"
                                        >StackOverflow</a
                                        >
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/logo-linkedin.svg"
                                            className="inline w-6 mr-4"
                                            alt="LinkedIn Logo"
                                        />
                                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/logo-twitter.svg"
                                            className="inline w-6 mr-4"
                                            alt="Twitter Logo"
                                        />
                                        <a href="#" target="_blank" rel="noopener noreferrer"
                                        >@twitter_handle</a
                                        >
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/logo-codepen.svg"
                                            className="inline w-6 mr-4"
                                            alt="CodePen Logo"
                                        />
                                        <a href="#" target="_blank" rel="noopener noreferrer">CodePen</a>
                                    </div>
                                    <div className="flex items-center my-3">
                                        <img
                                            src="./assets/globe-outline.svg"
                                            className="inline w-6 mr-4"
                                            alt="Globe icon"
                                        />
                                        <a href="#" target="_blank" rel="noopener noreferrer"
                                        >Portfolio</a
                                        >
                                    </div>
                                </div>

                                <div className="font-light text-lg px-2 mb-12">
                                    <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
                                    <ul className="list-none">
                                        <li>
                                            <label htmlFor="js-skill">JavaScript</label>
                                            <progress id="js-skill" max="100" value="70"></progress>
                                        </li>
                                        <li>
                                            <label htmlFor="vue-skill">Vue / Vuex</label>
                                            <progress id="vue-skill" max="100" value="80"></progress>
                                        </li>
                                        <li>
                                            <label htmlFor="react-skill">React</label>
                                            <progress id="react-skill" max="100" value="66"></progress>
                                        </li>
                                        <li>
                                            <label htmlFor="nextjs-skill">Next.js</label>
                                            <progress id="nextjs-skill" max="100" value="72"></progress>
                                        </li>
                                        <li>
                                            <label htmlFor="eleventy-skill">Eleventy</label>
                                            <progress id="eleventy-skill" max="100" value="66"></progress>
                                        </li>
                                        <li>
                                            <label htmlFor="node-skill">Node / Express.js</label>
                                            <progress id="node-skill" max="100" value="45"></progress>
                                        </li>
                                        <li>
                                            <label htmlFor="css-skill">SCSS</label>
                                            <progress id="css-skill" max="100" value="75"></progress>
                                        </li>
                                        <li>
                                            <label htmlFor="design-skill">Inkscape / Figma</label>
                                            <progress id="design-skill" max="100" value="62"></progress>
                                        </li>
                                        <li>
                                            <div>Infrastructure / Hosting / DB</div>
                                            <p className="leading-8">
                                                <span className="rounded-xl bg-gray-300 px-3">AWS</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Vercel</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Heroku</span>
                                                <span className="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                                                <span className="rounded-xl bg-gray-300 px-3">MongoDB</span>
                                                <span className="rounded-xl bg-gray-300 px-3">SQLite</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="font-light text-lg px-2 mb-12">
                                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                                    <h3 className="font-semibold">BSc Computer Science</h3>
                                    <p>2016 - 2019 University of London</p>
                                </div>

                                <div className="font-light text-lg px-2 mb-12">
                                    <h2 className="text-xl font-semibold mb-4">Languages</h2>
                                    <h3 className="font-semibold">German</h3>
                                    <p>Native</p>
                                    <h3 className="font-semibold">English</h3>
                                    <p>Fluent</p>
                                </div>
                            </div>
                            <div className="content w-full p-12">
                                <div id="profile" className="prose">
                                    <h2 className="section-headline">Profile</h2>
                                    <p>
                                        I'm a self-taught web developer focusing on the core web
                                        fundamentals - HTML, CSS and JS. I'm experienced in frontend
                                        frameworks like Vue and React and static site generators like
                                        Next.js and Eleventy. I write SCSS or use CSS frameworks like
                                        TailwindCSS, Bootstrap or Bulma to speed up styling of my
                                        projects.
                                    </p>
                                    <p>
                                        I am highly motivated in expanding my horizons day by day htmlFor
                                        better perhtmlFormance, testing and user experience.
                                    </p>
                                </div>
                                <hr className="mt-8 mb-12" />
                                <div id="experience" className="prose">
                                    <h2 className="section-headline">Experience</h2>
                                    <div>
                                        <h3>Example Inc</h3>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Jul.&nbsp;2019:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                Fullstack Developer
                                            </div>
                                        </section>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Task:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat.
                                            </div>
                                        </section>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Description:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa qui officia
                                                deserunt mollit anim id est laborum.
                                            </div>
                                        </section>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Tools:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                <span className="rounded-xl bg-gray-300 px-3">Vue</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Vuex</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Docker</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Git</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Bitbucket</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Jira</span>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <hr className="mt-8 mb-12" />
                                <div id="projects" className="prose">
                                    <h2 className="section-headline">Projects</h2>
                                    <div className="mb-16">
                                        <h3 id="chrisko-headline">Chrisko.io</h3>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Personal blog:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                My blog is the center of my online presence. Here, I share
                                                posts about what I've learnt, tutorials and my thoughts on web
                                                development in general.
                                            </div>
                                        </section>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Deployed to:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                <a
                                                    href="https://chrisko.io"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >chrisko.io</a
                                                >
                                            </div>
                                        </section>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Code on:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                <a
                                                    href="https://github.com/christiankozalla/nextjs-blog"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >GitHub/nextjs-blog</a
                                                >
                                            </div>
                                        </section>
                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Features:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                <ul>
                                                    <li>Static generation</li>
                                                    <li>Blog content written in Markdown</li>
                                                    <li>Counter htmlFor pageviews and likes</li>
                                                    <li>My latest tweets</li>
                                                    <li>Featured images made with Inkscape</li>
                                                    <li>SEO</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <section className="mb-6">
                                            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                                Built with:
                                            </div>
                                            <div className="lg:inline-block lg:w-8/12 w-full">
                                                <span className="rounded-xl bg-gray-300 px-3">Next.js</span>
                                                <span className="rounded-xl bg-gray-300 px-3">CSS</span>
                                                <span className="rounded-xl bg-gray-300 px-3">styled-jsx</span>
                                                <span className="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                                                <span className="rounded-xl bg-gray-300 px-3">Vercel</span>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <hr className="mt-8 mb-12" />
                                <div id="projects" className="prose">
                                    <h2 className="section-headline">Expand my skills</h2>
                                    <div className="mb-16">
                                        <h4 id="expand-knowledge-headline">
                                            I'd like to expand my skills and knowledge in several fields
                                        </h4>
                                        <ul>
                                            <li>TypeScript</li>
                                            <li>Testing, e.g. with Mocha, Chai, Jest</li>
                                            <li>Web Components, e.g. with StencilJS, LitElement</li>
                                            <li>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>
                                            <li>Scalable Vector Graphics</li>
                                            <li>Databases</li>
                                            <li>Mobile development</li>
                                            <li>
                                                Backend development, e.g. learn additional language like Go,
                                                Python, PHP, Ruby, Java, Rust
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <footer
                        className="mt-12 text-center flex justify-center flex-col md:flex-row mx-12"
                    >
                        <a
                            href="https://chrisko.io/"
                            className="text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0"
                        >Made with ❤️ by Chrisko</a
                        >
                        
                    </footer>
                {/* </body> */}
            {/* </Page> */}
        </>
    );
}