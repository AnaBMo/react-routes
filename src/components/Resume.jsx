/* La ruta /resume renderizará el componente Resume. 
Este componente mostrará la página de currículum del portfolio. 
En esta página, se mostrará la experiencia laboral y educativa del desarrollador. */

// Usando map, recorremos los arrays y mostramos la información de cada proyecto, experiencia laboral y educación.

import { studies, experiences } from '../data/resume';

function Resume(){
    return(
    <>
        <div className='divStudies'>
            <h3>Studies</h3>
            <ul>
            {studies.map((study)=>(
                <li>
                    {study.title} - {study.institution}({study.date});
                </li>
            ))}
            </ul>
        </div>
        <div className='divExperience'>
            <h3>Experiences</h3>
            <ul>
                {experiences.map((experience)=>(
                    <li>
                        {experience.title} -{experience.company}({experience.date});
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
};

export default Resume;