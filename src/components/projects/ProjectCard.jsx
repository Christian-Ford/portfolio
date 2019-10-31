import React from 'react';



const ProjectCard = (props) => {
    return (
        <div style={{color: 'white'}}>
            <h1>Hello</h1>
            <h1 style={{color: 'white'}}> {props.name}</h1>
            <p style={{color: 'white'}}> {props.description}</p>
            <p style={{color: 'white'}}> {props.github} </p>
        </div>
    )
}

export default ProjectCard;
