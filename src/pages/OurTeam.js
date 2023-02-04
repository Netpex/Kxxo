import React from 'react';
import { Link } from "react-router-dom";

import '../styles/pages/ourTeam.scss';

import TeamMember from '../components/cards/TeamMember.js';
import { useState } from 'react';


export default function OurTeam() {

    return (
       <div className="main-container">
        <div className="team-container">
            <h1>Djs and Staff</h1>
            <div className="announcers">
            <h2>- Announcers</h2>
            <TeamMember member="John Doe" time="Mornings" role="News Director"/>
            <TeamMember member="Jane Doe" time="Afternoons" role=""/>
            </div>
            <div className="marketing">
            <h2>- Marketing</h2>
            <TeamMember member="John Doe" time="Mornings" role="News Director"/>
            <TeamMember member="Jane Doe" time="Afternoons" role=""/>
        </div>
        <div className="support">
            <h2>- Support Team</h2>
            <TeamMember member="John Doe" time="Mornings" role="News Director"/>
            <TeamMember member="Jane Doe" time="Afternoons" role=""/>
        </div>
        </div>
       </div>
    )
}