import React, { Component } from 'react';

import ProjectCard from './ProjectCard.jsx';
import blackholeSnap from '../../assets/blackholeSnap.png';
const projectsList = [
    {
        name: 'Photo Effects App' ,
        pic: 'img/blank/blank' ,
        description: 'lorem ipsum' ,
        github: 'https://github.com/photo-effects' ,
        trello: 'https://trello.com/b/kUQ15CLZ/photoeffect-labs-pt4' ,
        liveLink: 'http://www.photoeffectsapp.com'

    } ,
    {
        name: 'Blackhole' ,
        pic: blackholeSnap ,
        description: 'lorem ipsum' ,
        github: 'https://github.com/blackhole-portfolio/front-end' ,
        trello: 'https://trello.com/b/DeT1eK1z/blackhole-portfolio-project' ,
        liveLink: 'https://blackhole-reactapp.netlify.com/'

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
        github: 'https://github.com/Christian-Ford' ,
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
                    className="projectCard"
                    name = {project.name}
                    description = {project.description}
                    pic = {project.pic}
                    github = {project.github}
                    trello = {project.trello}
                    liveLink = {project.liveLink}
                    />
                     )
                })}
            </div>
        )
    }
}
