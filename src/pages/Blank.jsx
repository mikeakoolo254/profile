import './Blank.scss'
import profilepic from '../images/Akolo.jpg'
import social_img1 from '../images/follow.jpg'
const Blank = () => {
     
    return <div className='wrapper'>
        <body>
            <section className='s1'>
                <div className="main-container">
                    <div className='greetings-wrapper'>
                    <h1>Hi, I'm Michael Omusundi</h1>
                    </div>

                    <div className='intro-wrapper'>
                        <div className='nav-wrapper'>
                            <div className='dots-wrapper'>
                                <div id="dot-1" className='browser-dot'></div>
                                <div id="dot-2" className='browser-dot'></div>
                                <div id="dot-3" className='browser-dot'></div> 
                            </div>

                            <ul id="navigation">
                            <li><a href='google.com'>Contact</a></li>
                            </ul>
                        </div>
                       
                        <div className='left-column'>
                            <img id='profile_pic' src={profilepic} alt=''/>
                            <h5 style={{lineHeight:'0',textAlign: 'center'}}>Personalize Theme</h5>

                            <div id="theme-options-wrapper">
                                <div id='light-mode' className='theme-dot'></div>
                                <div id='blue-mode' className='theme-dot'></div>
                                <div id='green-mode' className='theme-dot'></div>
                                <div id='purple-mode' className='theme-dot'></div>
                            </div>
                       

                        <p id='settings-note'>
                        *Theme settings will be 
                        saved for your <br/>next visit
                        </p>
                        </div>
                        <div className='right-column'>

                            <div id='preview-shadow'>
                                <div id='preview'>
                                    <div id='corner-tl' className='corner'></div>
                                    <div id='corner-tr' className='corner'></div>
                                    <h3>What I Do</h3>
                                    <p>I was a lead developer in a past life,
                                      now I enjoy teaching courses
                                    </p>
                                    <div id='corner-br' className='corner'></div>
                                    <div id='corner-bl' className='corner'></div>
                                </div>
                            </div>
                        </div>

                    </div> 
                 </div>
            </section>

            <section className='s2'>
                <div className="main-container">
                  <div className='about-wrapper'>
                      <div className='about-me'>
                           <h4>More about me</h4>
                           <p>I build new projects just to tickle my brain and love teaching others how they're made.</p>
                           <p>While I keep busy teaching courses, I still
                               take interviews in search of a great team & projects
                               that interest me.
                           </p>
                      </div>
                      <hr />
                      <h4>TOP EXPERTISE</h4>
                      <p>Fullstack developer with primary focus on Django + React:<a target="_blank" href='resume.pdf'>Download Resume</a> </p>
                      <div id="skills">
                          <ul>
                              <li>Python</li>
                              <li>Django</li>
                              <li>JavaScript</li>
                              <li>React</li>
                              <li>Postgress</li>
                          </ul>

                          <ul>
                              <li>Google Maps API</li>
                              <li>JS Charts</li>
                              <li>AWS (RDS/S3)</li>
                              <li>Heroku</li>
                              <li>HTML/CSS </li>
                          </ul>

                      </div>
              
                      <div className='social-links'>
                          <img id= "social_img" src={social_img1} alt=''/>
                          <h3>Find me on Twitter & Yutube</h3>
                          <a target="_blank" href="#">Youtube: @akoolomichael</a>
                          <br/>
                          <a target="_blank" href="#">twitter: @akoolomichael</a>


                      </div>
                  </div>
                </div>
            </section>

            <section className='s1'>
                <div className="main-container">
                < h3 style={{ textAlign: 'center'}}>Some of my past projects</h3>
               <div className='post-wrapper'>
                    <div className='post'>
                     <img class= "thumbnail" src={social_img1} alt=""/>
                         <div className='post-preview'>
                              <h6 className='post-title'>Post Title</h6>
                              <p className='post-intro'> This is a sentence.
                               Some more text
                              </p>
                         </div>
                    </div> 
                    <div className='post'>
                     <img class= "thumbnail" src={social_img1} alt=''/>
                         <div className='post-preview'>
                              <h6 className='post-title'>Post Title</h6>
                              <p className='post-intro'> This is a sentence.
                               Some more text
                              </p>
                         </div>
                    </div> 
                    <div className='post'>
                     <img class= "thumbnail" src={social_img1} alt=''/>
                         <div className='post-preview'>
                              <h6 className='post-title'>Post Title</h6>
                              <p className='post-intro'> This is a sentence.
                               Some more text
                              </p>
                         </div>
                    </div> 
               </div>
                </div>
            </section>

            <section className='s2'>
                <div className="main-container">
                Contact
                </div>
            </section>    
        </body>
    </div>
}

export default Blank;
