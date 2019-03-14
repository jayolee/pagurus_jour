import React from 'react';
import affinity from './images/affinity_small.jpg'
import card1 from './images/card1.svg'
import card2 from './images/card2.svg'
import clrlogo from './images/logo_color.svg'
import screenmap from './images/screenmap.png'
import lofi from './images/lofi.png'
import App from './prototype/App.js'

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
            "Role": "UX/UI design, development",
            "Tool": "React, HTML, SCSS, Sketch, Adobe Illustrator/Photoshop",
        },
        "button": <a href="https://jayolee.github.io/pagurus/" target="_blank" rel="noopener noreferrer">
            <div className="button pagurus">Play with the Prototype</div></a>,
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

        "Solution": <div>

            <div style={{ textAlign: "center" }}>
                <img src={clrlogo} style={{ width: "100%", maxWidth: "350px" }} />
                <img src={screenmap} className="zoomable" onClick={zoomimg} /><div className="imgdes">Screenmap</div>
                <p className="solutionPoint" style={{ margin: "30px auto 0" }}> <span style={{ color: "#ff614c" }}>Pagurus,</span> an app match mentees with prospective life mentors</p>
                <a href="https://jayolee.github.io/pagurus/" target="_blank" rel="noopener noreferrer">
                    <div className="button pagurus" style={{ margin: "40px auto 40px" }}>Open the Prototype in a new tab</div></a></div>
        </div>,


        "Research": <div>
            <p>Every year, more than 100,000 international students move to the U.S. Universities have student associations of different countries to help the new students; however, why do they need these student associations?</p>

            <p className="mainT">Why do people ask for advice when moving to a new city?</p>
            <p>
                It is always a challenge to find information about a new city before moving in. People post questions on online communities or ask their personal connections for the information. Why do people ask other people while there are online sources?
            </p>

            <p>
                I conducted semi-structured interviews and affinity diagraming to figure out what are the challenges of moving to a new city and how they solve the problems. I also did analogous domain research to find what kind of questions people have and their approaches asking the questions.
            </p>
            <img src={affinity} alt="Affinity Diagram" className="zoomable" onClick={zoomimg} /><div className="imgdes">Affinity Diagram</div>

            <p className="mainT">Why do people need advice from the first-hand experience?</p>
            <p><b>1. "Experience" is about the comparison. </b><br />
                From the analogous domain research, I learned that people talk about their experience in a new city by comparing with their previous locations. Related to this, interview participants answered that they are more likely to ask people who have a similar background such as attending the same school or from the same country. </p>

            <p><b>2. People need overarching information rather than chunks of data.</b> <br />
                Although people can have online resources, often the information from those is not enough. It is because data representing one aspect cannot solely be helpful. For example, we can find how often a bus comes, but we cannot tell if it's enough or not unless we know our daily routine or other options. Similarly, people still need overarching insight which can be gained by integrating information. </p>

            <p className="mainT">Why international students?</p>

            <p>
                From the interviews, I learned that different groups of people have different challenges regarding moving to a new city. Among these groups, I paid attention to international students who move to the U.S. for the first time. </p>
            <p>
                The new international students are more likely to find life mentors to get help. There are several reasons why they rely on mentors rather than other sources.</p>
            <p style={{ marginBottom: "30px" }}>
                <b>1. Students don't know where to find information.</b></p>
            <div className="quoterow">
                <p className="quoteInt">"I knew Reddit, but I thought Reddit is not about moving."</p>
                <p className="quoteInt">
                    "I didn't know about Google Maps, so I didn't know how to find a route to get to the building."</p>
            </div>
            <p style={{ marginBottom: "30px", fontWeight: "bold" }}>
                2. Not only the language but also the common ground make students ask questions to students who are already in the USA.</p>
            <div className="quoterow">
                <p className="quoteInt" style={{ width: "1000px" }}>
                    "We don't have any problem searching information using English because we already use it. ... A student got into our program asked me about how I dealt with the culture shift from India to the USA.
                    "I thought it would work because ..."
            </p>
            </div>

            <p className="mainT">Students value different things depending on their level of native language in a new country</p>
            <p>
                From the research, I learned that people value the common ground. To learn what type of common experience people trust more, I conducted card sorting.
            </p>
            <div className="halfwrap" style={{ marginTop: "0" }}>
                <img src={card1} alt="Priority of people less comfortable using the primary language of the new country " className="half" style={{ maxWidth: "350px", marginTop: "0" }} />
                <img src={card2} alt="Priority of People comfortable using the primary language of the new country " className="half" style={{ maxWidth: "350px", marginTop: "0" }} />
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

            <p className="mainT">Reciprocity and self-schema is the key to keep user cycle</p>
            <p>According to the literature review, previous mentoring experience likely reflects the norm of reciprocity  <a href="https://books.google.com/books?hl=en&lr=&id=haVXOcQ3OLQC&oi=fnd&pg=PA123&dq=empathy+experience+mentor&ots=yJKNabH4tH&sig=u4e_MIyLNI-zvX4s9ghyLF_Hw94#v=onepage&q=empathy%20experience%20mentor&f=false" target="_blank" rel="noopener noreferrer">(source).</a> From the interview, I learned that people who struggled to move and settle down are more likely to provide life mentorship to new students. It is said in the paper that empathetic individuals are able to foster the intimacy and trust that is critical to psychosocial mentoring.</p><p>
                Also, providing mentorship can be incorporated into the mentors' sense of self (identity structure). Moreover, the research proved that psychosocial mentoring has longer duration relationship than career-related ones.
In conclusion, it can be expected that once this app has the first mentor-mentee relationship, there would be a continuous cycle of mentor-mentee relationships. </p><p>
                From the research, international student associations of each country in universities provide various information sessions and life mentorships. Therefore, collaborating with international student associations of each school, in the beginning, would make it possible to build the initial cycle. </p>


        </div>,


        "Design": <div>
            <p>Based on the research, I came up with the solution of an app find prospective life mentors based on the shared common ground. I created a lo-fi prototype and conducted Think-Alouds.</p>
            <img src={lofi} className="zoomable" onClick={zoomimg} /><div className="imgdes">Lo-fi Prototype</div>
            <p>From the Think-Alouds, users gave me feedback that it is not clear how this app find mentors. Therefore, I found ways to conveying the rationale of the app. Based on the feedback, I came up with the designs and developed <a href="https://jayolee.github.io/pagurus/" target="_blank" rel="noopener noreferrer">a working prototype using React.</a> Below is the key points of the design.</p>
            <p className="mainT">1. Seamless transition between mentors and mentees.</p>
            <p>
                According to the literature review, reciprocity is one of the key values to keep getting new mentors which will attract new mentees. Therefore, I focused on how a user can be both a mentor and a mentee seamlessly.</p>
            <p>
                To create this seamless interaction, I used autocomplete functions as a key feature. 'Paragus' has many screens where users need to fill out the data. By autocompleting the forms with the data can be expected, it can save the user's time. Also, the feedback the user would provide, which would be fixing the autocompleted value, will provide the data to find a pattern which can lead to better expectations.</p>
            <p className = "mainT">2. Using the words in perspectives that can convey the context.</p>
            <p>
            Different types of forms can be confusing because they collect similar types of data. Also, to improve the app from the feedback I got from Think-Alouds, I used words as a tool to relieve the confusion. Therefore, most of the sentences on the app are written in first-perspective.</p>
            <p className = "mainT">3. Use Google Maps data</p>
           <p>Autocompleting the school name with Google Maps data can shorten the number of text that users need to type. Users can also confirm the schools by the addresses. Also, the app doesn't need to deal with different ways of calling schools (ex. abbreviations).   </p>
          
            <p className="mainT">Why Pagurus?</p>
            <div style={{ textAlign: "center" }}>
                <img src={clrlogo} style={{ width: "100%", maxWidth: "350px", marginBottom: "50px"}} />
               </div>
            <p>
            Pagurus is a type of hermit crab. Hermit crabs move from shells to shells as they grow up. When a crab moves out from a shell, other crabs wait for it to move out and take that abandoned shell. The way a crab take another crab's shell is similar to people's tendency valuing the first-hand experience. 
            </p>
           
        </div>,
        "Next Steps": <div>
            <p className="mainT">Create adaptive algorithms</p>
            <p>Currently, my design uses one algorithm for all users. Once the app collects enough data, the app can have adaptive algorithm depending on the patterns of different users groups. If there's a user have used this app for a long time, it would be possible to find which type of common ground the user values. Similarly, there would be patterns between different schools or groups using different numbers of languages. </p>
            <p className="mainT">Decrease the amount of workload</p>
            <p>Although I used some autocompletes for forms, there are still tons of forms a user need to fill out to get a meaningful recommendation. Therefore, if there's a source of information that can obtain users' school histories such as signing in using social network services, it would be able to decrease more workload. 
Also, by using other activity histories of users, which can convey users' personal preferences, it would be possible to have a better mentor recommendation system.
</p>
        </div>,
    },

}