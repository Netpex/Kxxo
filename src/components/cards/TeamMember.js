import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/components/TeamMember.scss';

import { useState } from 'react';


function handleClick() {
    console.log('clicked!');
  }

function includeSlash(role) {
   if (role) {
    return "/"
   }
}

export default function TeamMember(props) {

    return (
       <div className="teamMember-container">
        <i class="fa-solid fa-square-caret-down"></i>
        <h5>{props.member} - {props.time} {includeSlash(props.role)} {props.role}</h5>            
       </div>
    )
}