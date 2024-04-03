import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLink } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import img from "./img.jpg";


export default function Resume() {
  return (
    <div style={{margin:200,"border":"1px solid black" ,"padding":40,marginTop:50,marginLeft:50,maxWidth:1100} }>
        <header style={{"margin":"30px"}}>
            <div style={{display: "flex",justifyContent:'space-between',alignItems: 'center'}}>
            <div>
        <h1>VANESSA FORD</h1>
        <p style={{"marginTop": "-25px"
}}>I solve problems and help people overcome obstacles</p>
        <div style={{display: "flex",gap:10}}>
            <p><FaPhoneAlt /> 600-00-000</p>
            <p><MdAlternateEmail />  v-ford@gmail.com</p>
            <p><RiLink /> www.linkedin.com/vanessa-ford</p>
            <p><FaLocationDot /> San Francisco,CA</p>
        </div>
        </div>
        <img src={img} alt="img" height="100px" width="100px" style={{borderRadius:"50px"}}/>
        </div>
        </header>

        <div style={{display:'flex',gap:"40px"}}>
            <div style={{width:'60%'}}>
         
            <h3 style={{"borderBottom":"4px solid black"}}>SUMMARY</h3>
            <p >Result-orientated project team leader with 5 years of experience covering project and product 
                management including developing implementing and supporting complex infrastructures for last 
                growing startups.A fast and eager learner, I am detail oriented and adopt to changing project 
                requirements quickly to meet business goals.Comfortable with ambigulty and thrive in fast-paced 
                environment.
            </p>
           
            <h3 style={{"borderBottom":"4px solid black"}}>PROFRSSIONAL EXPERIENCE</h3>
            <b><h2>Senior IT Product Manager</h2></b>
            <p>Rover Games
                <span style={{"margin":"90px"}}>
            <SlCalender /> &nbsp;2019-Ongoing&nbsp;
                <FaLocationDot />&nbsp; San Francisco,CA&nbsp;
                </span>
            </p>
            <p >Rover Games is a multi-pay mobiloe game app development firm that has
                successful titles such as Drink Something,Trivia Tonight and King's Fight
                <ul style={{"marginTop": "1px"}}>
                    <li>
                        Accelerated outbound sales cycle by 330% by designing and implementing customer 
                        acquisition platform for training and managing  technical sales personnel
                    </li>
                    <li>
                        Established and curated strategic partnerships with 6 out of 10 top state manufacturing 
                        companies which resulted in $20M additional annual revenue 
                    </li>
                    <li>
                        Led re-architect effort of a core SaaS product to reduce the platform deployment time 
                        for clients by 2 months
                    </li>
                </ul>
            </p>
            <br/>
            <h3 style={{"borderBottom":"4px solid black"}}>PROJECT MANAGER</h3>
            <p>Testa
                <span style={{"margin":"130px"}}>
            <SlCalender />&nbsp; 2017-2019 &nbsp;
                <FaLocationDot />&nbsp; Los Angeles,CA
                </span>
            </p>
            <p>Tesla is an electric vehicle manufacturer that is revolutionizing the automobile industry
                <ul style={{"marginTop": "1px"}}>
                    <li>
                        Lead a team of developers to build a proprietary CRM system for enterprise and its 
                        strategic partners,optimizing sales process and increasing sales revenue by 24%
                    </li>
                    <li>
                        Curated a $2M business implementation project that saves-$3.5M on operational 
                        inefficiencies between sales and development departments annually
                    </li>
                    <li>
                        Collaborated with strategic manufacturing partners to develop an effective onboarding 
                        system,reducing the sales cycle by 3 months for global enterprise clients
                    </li>
                </ul>
         
                <table className="project" style={{border: "1px solid black"}}>
                    <tr> <td>Project Name</td>
                       <td>Description</td></tr>
                       <tr > 
                       <td>Bosster CRM</td>
                       <td>The entrie CRM strategy and implementation to increase market engagement</td>
                       </tr>
                       <tr> 
                       <td>Permission System</td>
                       <td>Automatic onboarding and off-boarding of customer,including all rights and permission</td>
                       </tr>
                </table>
            </p>
            <br/>
            <br/>
            <h3 style={{"borderBottom":"4px solid black"}}>EDUCATION</h3>
            <b><h2 >Master of Science,Industrial Engineering</h2></b>
            <p style={{"marginTop": "-20px"}}>University of California,Berkeley
                <span style={{"margin":"50px"}}>
            <SlCalender />&nbsp; 2000-2001 &nbsp;
                <FaLocationDot />&nbsp; Berkeley,CA
                </span>
            </p>
            
            <b><h2 >Bachelor of Science,Industrial Engineering</h2></b>
            <p style={{"marginTop": "-20px"}}>University of California,Berkeley
                <span style={{"margin":"50px"}}>
            <SlCalender />&nbsp; 1997-2000 &nbsp;
                <FaLocationDot />&nbsp; Berkeley,CA
                </span>
            </p>
            </div>
            
            <div style={{width:'50%',"marginRight":"30px"}}>
            <br/>
        <h3 style={{"borderBottom":"4px solid black"}}>KEY ACHIEVEMENTS</h3>
        <p>Cost Saving of $100M</p>
        <p style={{"marginTop": "-10px"}}>Through efficient project management and teamwork,my team saved the division at Tesla over $100 Million in the engine assembly department. The new assembly process is being
            rolled out to other departments to realize further savings.
        </p>
        <p>Exceeded throughput target by 90%</p>
        <p style={{"marginTop": "-10px"}}>Cutting loading time & fixing key security issues Wolf Industries by moving key remote workers successfully online at scale. Managed workflow to continuously create content for remote learning.</p>
        <br/>
        <h3 style={{"borderBottom":"4px solid black"}}>ON THE BOARD OF</h3>
        <p>Certified Scrum Product Owner and Professional</p>
        <h6 style={{"marginTop": "-10px"}}>Scrum Alliance</h6>
        <p>PMI Agile Certified Practitioner(PMI_ACP)</p>
        <h6 style={{"marginTop": "-10px"}}>PMI Project Management Institute</h6>

        <h3 style={{"borderBottom":"4px solid black"}}>PROUD OF</h3>
        <div style={{"display":"flex"}}>
        <p style={{"borderRadius":"100%", "width":"60px", "height":"60px", "backgroundColor":"gray","padding":"10px", "marginTop":"20px","display":"flex"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="4em" viewBox="0 0 24 24"><path fill="currentColor"
         d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 
         1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"/></svg></p>
        
         <div style={{"display":"flex","padding":"35px"}}>
         Craftign</div>
         </div>
         <div style={{"display":"flex"}}>
         <p style={{"borderRadius":"100%", "width":"60px", "height":"60px", "backgroundColor":"gray","padding":"10px", "marginTop":"20px","display":"flex"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.09 11.963l9.274-3.332v5.54a3.825 3.825 0 0 0-1.91-.501c-1.958 0-3.545 1.426-3.545 3.185c0 1.759 1.587 3.185 3.545 3.185c1.959 0 3.546-1.426 3.546-3.185V7.492c0-1.12 0-2.059-.088-2.807a6.724 6.724 0 0 0-.043-.31c-.084-.51-.234-.988-.522-1.386a2.244 2.244 0 0 0-.676-.617l-.009-.005c-.771-.461-1.639-.428-2.532-.224c-.864.198-1.936.6-3.25 1.095l-2.284.859c-.615.231-1.137.427-1.547.63c-.435.216-.81.471-1.092.851c-.281.38-.398.79-.452 1.234c-.05.418-.05.926-.05 1.525v7.794a3.825 3.825 0 0 0-1.91-.501C4.587 15.63 3 17.056 3 18.815C3 20.574 4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185z"/></svg></p>
        
         <div style={{"display":"flex","padding":"35px"}}>
         Composing music</div>
         </div>
         
         <div style={{"display":"flex"}}>
         <p style={{"borderRadius":"100%", "width":"60px", "height":"60px", "backgroundColor":"gray","padding":"10px", "marginTop":"20px","display":"flex"}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="4 em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.06 2.6L11.6 8.7l-1.21-1.04l2.48-1.43a1 1 0 0 0 .21-1.57l-2.95-2.95a.996.996 0 1 0-1.41 1.41l2.03 2.03l-5.4 3.11a.99.99 0 0 0-.46.6l-.96 3.49c-.07.26-.04.53.1.77l1.74 3.02c.28.48.89.64 1.37.37c.48-.28.64-.89.37-1.37l-1.53-2.66l.36-1.29L9.5 13l.44 8c.03.56.49 1 1.05 1s1.02-.44 1.05-1l.45-9l7.87-7.96a.972.972 0 0 0-1.3-1.44"/><circle cx="5" cy="5" r="2" fill="currentColor"/></svg>
         </p>
        
         <div style={{"display":"flex","padding":"35px"}}>
         Adrenaline Sports</div>
         </div>
        
        <h3 style={{"borderBottom":"4px solid black"}}>LANGUAGES</h3>
        
            <div style={{"flex":"1"}}>
                <p style={{"marginBottom":"2px","width":"50"}}>English
                <span style={{"marginLeft":"350px"}}>Native</span>
                </p>
                <div className="custome-progress">
                    <div  >  - </div>
                </div>
            </div>
            <div style={{"flex":"1"}}>
                <p style={{"marginBottom":"5px", "marginTop":"40px"}}>German
                <span style={{"marginLeft":"350px"}}>Advanced</span>
                </p>
                <div className="custome-progress-bar">
                    <div >  - </div>
                </div>
            </div>
        
      


        <h3 style={{"borderBottom":"4px solid black"}}>TECHNICAL SKILLS</h3>

        <p style={{"display":"flex","gap":"15px"}}>
            <p style={{"borderBottom":"1px solid black","width":"","display":"inline"}}>Scrum</p>      
            <p style={{"borderBottom":"1px solid black","width":"","display":"inline"}}>Product Development</p>
            <p style={{"borderBottom":"1px solid black","width":"","display":"inline"}}>SQL</p>
            </p>
            <p style={{"display":"flex","gap":"15px","marginTop": "-30px"}}>
            <p style={{"borderBottom":"1px solid black","width":"","display":"inline"}}>Tableau</p>
            <p style={{"borderBottom":"1px solid black","width":"","display":"inline"}}>JIRA</p>
            <p style={{"borderBottom":"1px solid black","width":"","display":"inline"}}>Python</p>
        </p>
        </div>
        </div>
       
    </div>
     
 
  )
}

