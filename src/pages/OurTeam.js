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
            <TeamMember 
            member="John Doe"
            time="Mornings" 
            role="News Director"
            timeexpanded="Weekdays 5:30-noon & Sat 6-10am"
            image="//www.kxxo.com/wp-content/uploads/ty-flint-mornings150.jpg"
            story="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien dolor, suscipit varius lacinia nec, posuere at nisi. Pellentesque vel porttitor turpis. Etiam ornare nisi vitae quam tristique lacinia. Integer luctus non urna at mattis. Proin at est vestibulum, volutpat nibh nec, ornare tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam in lobortis odio, eu ullamcorper nisi. Fusce at lacinia magna, in fringilla nisl. Pellentesque posuere, turpis vitae gravida euismod, risus orci euismod lectus, at luctus diam ex quis eros. Phasellus et porttitor est. Nullam sollicitudin neque vitae suscipit euismod."
            />
            <TeamMember 
            member="Jane Doe"
            time="Afternoons" 
            timeexpanded="Weekdays noon-7pm"
            image="//www.kxxo.com/wp-content/uploads/ty-flint-mornings150.jpg"
            story="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien dolor, suscipit varius lacinia nec, posuere at nisi. Pellentesque vel porttitor turpis. Etiam ornare nisi vitae quam tristique lacinia. Integer luctus non urna at mattis. Proin at est vestibulum, volutpat nibh nec, ornare tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam in lobortis odio, eu ullamcorper nisi. Fusce at lacinia magna, in fringilla nisl. Pellentesque posuere, turpis vitae gravida euismod, risus orci euismod lectus, at luctus diam ex quis eros. Phasellus et porttitor est. Nullam sollicitudin neque vitae suscipit euismod."
            />
            </div>
            <div className="marketing">
            <h2>- Marketing</h2>
            <TeamMember 
            member="John Doe"
            time="Mornings" 
            role="News Director"
            timeexpanded="Weekdays 5:30-noon & Sat 6-10am"
            image="//www.kxxo.com/wp-content/uploads/ty-flint-mornings150.jpg"
            story="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien dolor, suscipit varius lacinia nec, posuere at nisi. Pellentesque vel porttitor turpis. Etiam ornare nisi vitae quam tristique lacinia. Integer luctus non urna at mattis. Proin at est vestibulum, volutpat nibh nec, ornare tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam in lobortis odio, eu ullamcorper nisi. Fusce at lacinia magna, in fringilla nisl. Pellentesque posuere, turpis vitae gravida euismod, risus orci euismod lectus, at luctus diam ex quis eros. Phasellus et porttitor est. Nullam sollicitudin neque vitae suscipit euismod."
            />
            <TeamMember 
            member="Jane Doe"
            time="Afternoons" 
            timeexpanded="Weekdays noon-7pm"
            image="//www.kxxo.com/wp-content/uploads/ty-flint-mornings150.jpg"
            story="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien dolor, suscipit varius lacinia nec, posuere at nisi. Pellentesque vel porttitor turpis. Etiam ornare nisi vitae quam tristique lacinia. Integer luctus non urna at mattis. Proin at est vestibulum, volutpat nibh nec, ornare tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam in lobortis odio, eu ullamcorper nisi. Fusce at lacinia magna, in fringilla nisl. Pellentesque posuere, turpis vitae gravida euismod, risus orci euismod lectus, at luctus diam ex quis eros. Phasellus et porttitor est. Nullam sollicitudin neque vitae suscipit euismod."
            />
        </div>
        <div className="support">
            <h2>- Support Team</h2>
            <TeamMember 
            member="John Doe"
            time="Mornings" 
            role="News Director"
            timeexpanded="Weekdays 5:30-noon & Sat 6-10am"
            image="//www.kxxo.com/wp-content/uploads/ty-flint-mornings150.jpg"
            story="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien dolor, suscipit varius lacinia nec, posuere at nisi. Pellentesque vel porttitor turpis. Etiam ornare nisi vitae quam tristique lacinia. Integer luctus non urna at mattis. Proin at est vestibulum, volutpat nibh nec, ornare tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam in lobortis odio, eu ullamcorper nisi. Fusce at lacinia magna, in fringilla nisl. Pellentesque posuere, turpis vitae gravida euismod, risus orci euismod lectus, at luctus diam ex quis eros. Phasellus et porttitor est. Nullam sollicitudin neque vitae suscipit euismod."
            />
            <TeamMember 
            member="Jane Doe"
            time="Afternoons" 
            timeexpanded="Weekdays noon-7pm"
            image="//www.kxxo.com/wp-content/uploads/ty-flint-mornings150.jpg"
            story="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien dolor, suscipit varius lacinia nec, posuere at nisi. Pellentesque vel porttitor turpis. Etiam ornare nisi vitae quam tristique lacinia. Integer luctus non urna at mattis. Proin at est vestibulum, volutpat nibh nec, ornare tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam in lobortis odio, eu ullamcorper nisi. Fusce at lacinia magna, in fringilla nisl. Pellentesque posuere, turpis vitae gravida euismod, risus orci euismod lectus, at luctus diam ex quis eros. Phasellus et porttitor est. Nullam sollicitudin neque vitae suscipit euismod."
            />
        </div>
        </div>
       </div>
    )
}