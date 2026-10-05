import {Link} from "react-router-dom";

function Home() {
    return (
        <section className="here">
            <div className="here-content">
                <h1>Welcome To My Portfolio!</h1>
                <h1>I am Syeda Anamta Aziz.</h1>
                <h2>This is my Portfolio Page. </h2>
                <p className="hero-description">
                I am a Software Engineering Technology - Artificial Intelligence student 
                at Centennial College with an interest in software development, artificial intelligence, machine learning
                and modern web technologies. 
                </p>
                <p className="mission">
               <strong>My Mission</strong>
               To build useful, intelligent and user-focused software solutions while continuously developing my technical and problem-solving skills.
               </p>                    
            <div className="hero-buttons">
                <Link to="/about" className="primary-button">About Me</Link>
                <Link to="/projects"className="secondary-button">View My Projects</Link>
            </div>
       
            </div>  
            <div className="hero-card">
                <div className="hero-logo">
                </div>
                <h3>AI • Software • Full Stack Web Development</h3>
                <p>Building technology with curosity, creativity and purpose.</p>
            </div>
        </section>
    );
}
export default Home;