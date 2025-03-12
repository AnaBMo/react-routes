/* La ruta /projects renderizará el componente Projects. 
Este componente mostrará la página de proyectos del portfolio. 
En esta página, se mostrarán los proyectos en los que ha trabajado el desarrollador. */

// Usando map, recorremos los arrays y mostramos la información de cada proyecto, experiencia laboral y educación.

import projects from "../data/projects";

function Projects() {
    return (
      <>
        <ul>
          {projects.map((project) => (
            <li>
              <p>Proyecto:{project.name}</p>
              <img src={project.image}  alt='imagen del proyecto' />
              <p>Descripción:{project.description} </p>
              <a href={project.url} target="_blank">Pincha aquí para ver el proyecto.</a>
            </li>
          ))}
        </ul>
      </>
    );
};

export default Projects;