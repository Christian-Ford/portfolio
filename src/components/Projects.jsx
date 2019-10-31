import React, { Component } from 'react';

import ProjectCard from './projects/ProjectCard.jsx';



export default class Projects extends Component {
    render() {
        return (
            <div className='projectWrapper'>
                { projectsList.map(project => {
                    return (
                    <ProjectCard 
                    name = {project.name}
                    description = {project.description}
                    github = {project.github}
                    />
                     )
                })}
            </div>
        )
    }
}
