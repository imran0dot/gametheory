import background from '../../../../assets/background.svg'

const HeroSection = () => {
    console.log(background)
    return (

        <div style={{ backgroundImage: `url(${background})` }} className="hero min-h-[70vh] bg-base-200">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-8xl font-bold">Crafting a Beer Experience</h1>
                    <p className="py-6 text-3xl font-bold">Showcasing your skills in React.js, API integration, authentication, routing, styling, and deployment through a beer-related applicatio.</p>
                    <button className="btn btn-outline">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;