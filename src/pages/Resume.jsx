import mypic from '../MYlogo.png';

function Resume() {

        console.log('resume');
    
    return (
        <div className="container">
            <h1 className="name-title">Resume</h1>
               <p className="resume">
                  Michael A. Yount
                  <br/> 
                    <br/>cheshirekatsmile101@gmail.com | 585 441 4762 | Lehighton PA.
                    <br/><a href="https://linkedin.com/in/michael-yount" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>  | <a href="https://github.com/Michael-Yount" target="_blank" rel="noopener noreferrer">My Github Profile</a>
                    <br/>
                    <br/>
                    SKILLS: 
                    <br/>
                    <br/>MERN Stack (MongoDB, ExpressJS, React, NodeJS) AWS, Netlify, Vercel, JavaScript, CSS, HTML, SASS, Animation, Unity 3d, Photoshop, Blender, Gimp.
                    <br/> 
                    <br/>EDUCATION 
                    <br/>
                    <br/>MIT xPRO, Professional Certificate in Coding: Full Stack Development with MERN       Sept. 2023 
                    <br/> 
                    <br/>				                  
                    PROJECTS
                    <br/> 
                    <br/>Kitchen Prep, a kitchen team building app.
                    <br/>Full Stack Developer 
                    <br/>●	Tech Stack: modular JavaScript, HTML5, CSS, SASS , Photoshop. 
                    <br/>●	Used complex SASS to build a front-end application with JavaScript functionality.
                    <br/>●	Productivity app, designed to increase workflow in a commercial kitchen. It has several 
                    <br/>features that make kitchen workflow more manageable. 
                    <br/>●	Future features will include: recipe API, and weather reporting for customer probability. 
                    <br/>
                    <br/>

                    Blue Honey/Soap by Sea`
                    <br/>Front End Developer
                    <br/>●	Tech Stack: modular vanilla JavaScript, HTML, CSS, SASS.
                    <br/>●	Commerce website used to sell soap and reach many customers across the web.
                    <br/>●	Future features will include a monthly subscription for soap and email, mailing list. 
                    <br/>
                    <br/>Freelance Projects
                    <br/>Game environment Design. Lead UI.
                    <br/>•	Q-bots. Worked in a team to develop a sample game environment. 
                    <br/>
                    <br/>2d game design and Animation.
                    <br/>•	“Stray” video game. Worked with a small team and created several game environment and 
                    <br/>character animations.
                    <br/>
                    EXPERIENCE 
                    <br/>
                    <br/>
                    SURV Restaurant						     	March 22 to present
                    <br/>Chef 
                    <br/>●	Organize kitchen scheduling and train several employees to work efficiently and within the <br/>scope of the company’s standards.
                    <br/>●	Analyze inventory and order spreadsheets to effectively impact company spending.
                    <br/>●	Train multiple employees on food safety and handling as well as proper cooking techniques.
 
 

                </p> 
                <footer>
                        <ul>
                           <li>
                                <img src={mypic} className=" logo-big" alt="..."/>
                            </li> 
                                <li>
                                <a className="footer-li" aria-current="page" href="https://github.com/Michael-Yount" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                                <li>
                                <a className="footer-li" aria-current="page" href="https://www.linkedin.com/in/michael-yount/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                                </li>
                        </ul>

                </footer>

        </div>
    )
}
export default Resume;
