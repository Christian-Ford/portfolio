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

            <div className="sectionOne">  
                <div className="main">
                    <h1 className="projectName"> {props.name}</h1>
                    <p className="projectDescription"> {props.description}</p>
                </div>

                <div className="screenshot">
                    
                    <img className="thePic" src={props.pic}></img>
                </div>
            </div>


            <div className="refLinks">
            <a className="indLink" href={props.github} target="_blank"> Git Hub </a> 
            <a className="indLink" href={props.trello} target="_blank"> Trello </a> 
            <a className="indLink" href={props.liveLink} target="_blank"> Live </a> 
            </div>
        </div>
    )
}

export default ProjectCard;
