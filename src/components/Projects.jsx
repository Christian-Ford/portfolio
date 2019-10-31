import React, { Component } from 'react';

import ProjectCard from './projects/ProjectCard.jsx';

const projectsList = [
    {
        name: 'project 1' ,
        pic: 'img/blank/blank' ,
        description: 'lorem ipsum' ,
        github: 'www.github.com' ,
        trello: 'www.trello.com' ,
        liveLink: 'www.broken.com'

    } ,
    {
        name: 'project 2' ,
        pic: 'img/blank/blank' ,
        description: 'lorem ipsum' ,
        github: 'www.github.com' ,
        trello: 'www.trello.com' ,
        liveLink: 'www.broken.com'

    } ,
    {
        name: 'project 3' ,
        pic: 'img/blank/blank' ,
        description: 'lorem ipsum' ,
        github: 'www.github.com' ,
        trello: 'www.trello.com' ,
        liveLink: 'www.broken.com'

    } ,
    {
        name: 'project 1' ,
        pic: 'img/blank/blank' ,
        description: 'lorem ipsum' ,
        github: 'www.github.com' ,
        trello: 'www.trello.com' ,
        liveLink: 'www.broken.com'

    } ,
    {
        name: 'project 1' ,
        pic: 'img/blank/blank' ,
        description: 'lorem ipsum' ,
        github: 'www.github.com' ,
        trello: 'www.trello.com' ,
        liveLink: 'www.broken.com'

    } ,
    {
        name: 'project 1' ,
        pic: 'img/blank/blank' ,
        description: 'lorem ipsum' ,
        github: 'www.github.com' ,
        trello: 'www.trello.com' ,
        liveLink: 'www.broken.com'

    } ,
   
]

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
