import React from 'react';

        // name: 'project 1' ,
        // pic: 'img/blank/blank' ,
        // description: 'lorem ipsum' ,
        // github: 'www.github.com' ,
        // trello: 'www.trello.com' ,
        // liveLink: 'www.broken.com'

const ProjectCard = (props) => {
    return (
        <div className="cardWrapper">   
            <h1 className="projectName"> {props.name}</h1>
            <p className="projectDescription"> {props.description}</p>
            <a className="projectGithub"> {props.github} </a>
            <a className="projectTrello"> {props.trello}</a>
            <button> <a className="projectLiveLink"> {props.liveLink} </a></button>
        </div>
    )
}

export default ProjectCard;
