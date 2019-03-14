import React from 'react';
import affinity from './images/affinity_small.jpg'
import card1 from './images/card1.svg'
import card2 from './images/card2.svg'

function zoomimg(e) {
    let classlist = e.target.classList;
    if (classlist.contains("zoomed")) {
        e.target.classList.remove("zoomed");
    }
    else {
        e.target.classList.add("zoomed");
    }
}

const protoRef = React.createRef();

export const projectList = {
    "pagurus": {
        "projectTitle": "Pagurus",
        "quote": "How might we match prospective life mentors and mentees?",
        // "topimg": <img id="up" alt="Up Top Screen" className="topimg" src={ } />,

        "exlpla": {
            "Duration": "1 week (March 7th ~ March 13th, 2019)",
            "Team": "Ja Young Lee",
            "Role": "UX design, development, illustration",
            "Tool": "React, HTML, SCSS, Adobe Illustrator, Figma",
        },
        "button": <a href="https://jayolee.github.io/Team-UP-prototype_react/" target="_blank" rel="noopener noreferrer">
            <div className="button up">Play with the Prototype</div></a>,
        "Process": <div className="processBoxWrap">
            <div className="proBoxLine up" />
            <div className="proBoxOut">
                <div className="processBox up">Ideate</div>
            </div>
            <div className="proBoxOut">
                <div className="processBox up">Research</div>
                <div className="processExpla">Semi-structured Interview</div>
                <div className="processExpla">Affinity Diagraming</div>
                <div className="processExpla">Card Sorting</div>
                <div className="processExpla">Literature Review</div>
            </div>
            <div className="proBoxOut">
                <div className="processBox up">Iterate</div>
                <div className="processExpla">Lo-fi Prototype</div>
                <div className="processExpla">Think-aloud</div>
                <div className="processExpla">Hi-fi Prototype</div>
            </div>
        </div>,
        "Ideation & Research": <div>
            <p>Every year, more than 100,000 international students move to the U.S. Universities have student associations of different countries to help the new students; however, why do they need these student associations?</p>

            <p><b>Starting from "moving"</b><br />
                It is always a challenge to find information about a new city before moving in. People post questions on online communities or ask their personal connections for the information. Why do people ask other people while there are online sources?
            </p>

            <p>
                I conducted semi-structured interviews and affinity diagraming to figure out what are the challenges of moving to a new city and how they solve the problems. I also did analogous domain research to find what kind of questions people have and their approaches asking the questions.
            </p>
            <img src={affinity} alt="Affinity Diagram" className="zoomable" onClick={zoomimg} /><div className="imgdes">Affinity Diagram</div>

            <p className="mainPoint" >
                <span style={{ boxShadow: "inset 0 -1.5px white, inset 0 -3px #E9974C, inset 0 -4.5px white, inset 0 -6px #E9974C" }} >How can a mobile app promote productivity, combat ego-depletion and stress?</span></p>
            <p>Why people need advice from the first-hand experience?</p>
            <p><span>1. "Experience" is about the comparison. </span><br />
                From the analogous domain research, I learned that people talk about their experience in a new city by comparing with their previous locations. Related to this, interview participants answered that they are more likely to ask people who have a similar background such as attending the same school or from the same country. </p>

            <p>2. People need overarching information rather than chunks of data. <br />
                Although people can have online resources, often the information from those is not enough. It is because data representing one aspect cannot solely be helpful. For example, we can find how often a bus comes, but we cannot tell if it's enough or not unless we know our daily routine or other options. Similarly, people still need overarching insight which can be gained by integrating information. </p>

            <p>Why international students?<br />
                From the interviews, I learned that different groups of people have different challenges regarding moving to a new city. Among these groups, I paid attention to international students who move to the U.S. for the first time. </p>
            <p>
                The new international students are more likely to find life mentors to get help. There are several reasons why they rely on mentors rather than other sources.</p>

            <p className="solutionPoint"><span style={{ color: "#e9974c", fontSize: "26px", fontWeight: "bold" }}>Up,</span> an app that encourages users to form a habitual focus timing of 90 minutes.</p>
            <p>
                1. Students don't know where to find information.
            "I know Reddit, but I thought Reddit is not about moving."
            "I didn't know about Google Maps, so I didn't know how to find a route to get to the building."
            2. Not only the language but also the common ground make students ask questions to students who are already in the USA.
            "We don't have any problem searching information using English because we already use it. ... A student got into our program asked me about how I dealt with the culture shift from India to the USA.
            "I thought it would work because ..."
            </p>
            <p>
            From the research, I learned that people value the common ground. To learn what type of common experience people trust more, I conducted card sorting.
            </p>
            <div className="halfwrap" style={{marginTop:"0"}}>
            <img src={card1} alt="Priority of people less comfortable using the primary language of the new country " className="half" style={{ maxWidth: "500px", marginTop:"0"}} />
            <img src={card2} alt="Priority of People comfortable using the primary language of the new country " className="half" style={{ maxWidth: "500px", marginTop:"0"}}/>
            </div>
            <p>
            Although further research is required, from the current level of research, it is more difficult to match a life mentor for people who move to the USA for work. It is because people value work experience less than school experience as the common ground, and it is more difficult to figure out the group that can be a prospective life mentor unless there's a method to collect the history of groups users were in.</p>
            <p>
            Also, I learned that students value recent experience more than older ones. Also, people more fluent in English value same school experience more than nationality. Based on this, I decided to use school and preferred language as the data to find prospective mentors.</p>
            <p>
            user personas
            </p>
            <p>students who are older tend to have more concerns than those of younger students.<br />
Students from different countries have different types of concerns.</p>

<p><b>How can this app keep the user cycle?</b><br />According to the literature review, previous mentoring experience likely reflects the norm of reciprocity (source). From the interview, I learned that people who struggled to move and settle down are more likely to provide life mentorship to new students. It is said in the paper that empathetic individuals are able to foster the intimacy and trust that is critical to psychosocial mentoring.
Also, providing mentorship can be incorporated into the mentors' sense of self (identity structure). Moreover, the research proved that psychosocial mentoring has longer duration relationship than career-related ones.
In conclusion, it can be expected that once this app has the first mentor-mentee relationship, there would be a continuous cycle of mentor-mentee relationships. 
From the research, international student associations of each country in universities provide various information sessions and life mentorships. Therefore, collaborating with international student associations of each school, in the beginning, would make it possible to build the initial cycle. </p>


        </div>,


        "The Solution": <div>

            <div style={{ textAlign: "center" }}>
                <a href="https://jayolee.github.io/Team-UP-prototype_react/" target="_blank" rel="noopener noreferrer">
                    <div className="button up" style={{ margin: "20px auto 40px" }}>Play with the Prototype</div></a></div>
            <div className="up_expla_screen">

                <div className="imgwrap_sc" >
                    {/* <img src={up_session} className="phonesc" alt="Concentration Session" /><div className="imgdes">Concentration Session</div></div> */}

                    <p> <span class="title up">Concentration Timer</span><br />
                        Users can set a time ranging from a minimum of 15 to a maximum of 90 minutes to work on a task of their choice. Our goal is <br />
                        <ul>
                            <li>Improve users’ productivity by having them devote a set block of time to working on a specific task
                    </li>
                            <li>
                                Prevent them from working on a task too long that they run out of mental energy
                    </li>
                        </ul>
                        The concentration timer is modeled off the <b>Pomodoro technique.</b>
                        {/* which was designed for people to overcome procrastination by committing fully to completing a certain task during a time period of 25 minutes and then having a break of 5 minutes. */}
                    </p>
                </div>
            </div>
        </div>,
        "Next Steps": <div>
            {/* <img src={up_animals} id="e_animals" alt="Playing with Breathing Sensor" /><div className='imgdes'>Endangered Animal Illustrations By Young</div> */}

            <p className="addmargin">While <i>Up</i> is a productivity mobile application that serves as a concentration tool, the overall message is <b>importance of constant effort and taking efficient breaks.</b> <i>Up</i> aims to reduce the demoralizing factor occurring outside of the application by constantly rewarding users with animals.</p>
            <p>
                At current stage of design, user are limited to saving virtual animals, which may not be as rewarding as contributing to saving animals in the real world. Therefore, we look forward to having a sponsorship partner with wildlife organizations for future implementations.</p>
        </div>,
    },

}