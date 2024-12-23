import Project from "../components/project/Project";

import projects from "../helpers/projects-list";

const Projects = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projects.map((oneProject) => {
              return (
                <Project
                  key={oneProject.title}
                  title={oneProject.title}
                  img={oneProject.img}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Projects;
