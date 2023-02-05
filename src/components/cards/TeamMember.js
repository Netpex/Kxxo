import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/components/TeamMember.scss';

import { useState } from 'react';

function includeSlash(role) {
   if (role) {
    return "/"
   }
}


export default function TeamMember(props) {

    function showContent(e) {
        const container = e.target.parentElement.getElementsByClassName("information-container")[0];
        const icon = e.target.parentElement.getElementsByClassName("fa-square-caret-down")[0];
        if (container.classList.contains("hidden")) {
            container.classList.remove("hidden");
            container.classList.add("grow");
            icon.classList.add("rotate-180");
            icon.classList.remove("rotate-0");
        } else {
            container.classList.remove("grow");
            container.classList.add("hidden");
            icon.classList.remove("rotate-180");
            icon.classList.add("rotate-0");
        }
    }

    return (
        <div className="teamMember-container">
            <i class="fa-solid fa-square-caret-down"></i>
            <h5 onClick={showContent}>{props.member} - {props.time} {includeSlash(props.role)} {props.role}</h5>
            <div className="break"></div>         
            <div className="hidden information-container">
                <img src={props.image}></img>
                <h3>{props.timeexpanded}</h3>
                <p>{props.story}</p>
            </div>
        </div>
    )
}