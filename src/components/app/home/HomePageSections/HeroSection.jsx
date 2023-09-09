import { Link } from 'react-router-dom';
import background from '../../../../assets/background.svg'

const HeroSection = () => {
    return (

        <div style={{ backgroundImage: `url(${background})` }} className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-6xl md:text-8xl font-bold">Crafting a Beer Experience</h1>
                    <p className="py-6 text-2xl md:text-3xl font-bold">Showcasing your skills in React.js, API integration, authentication, routing, styling, and deployment through a beer-related applicatio.</p>
                    <Link to="/beers" className="btn btn-outline">Beers</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;