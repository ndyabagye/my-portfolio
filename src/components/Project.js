import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
            .catch(console.error)
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    My Projects
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my projects page!
                </h2>
                <section className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16 truncate">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener norefferer">
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-xs-4 overflow-auto">
                                <div className="flex flex-wrap">
                                    <span>
                                        <strong className="font-bold">Finished on </strong>:{"  "}
                                        {new Date(project.date).toLocaleDateString()}{" "}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Company</strong>:{"  "}
                                        {project.place}{" "}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Type</strong>:{"  "}
                                        {project.projectType}
                                    </span>
                                </div>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed mx-auto">
                                    {project.description}
                                </p>
                                <a href={project.link} rel="noopener norefferer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                    View the Project{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}
