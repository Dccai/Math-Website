import React from 'react';
import './About.css';
import AboutImage from '../Assets/Photos.js';
function About() {
    return (
        <div class="AboutPage">
            <section id="about"><p>I am a student who made this website for fun</p></section>
            <section id="explain"><img alt="This is my favorite game"src={AboutImage[1][1]}/></section>
            </div>
   );
}
export default About;