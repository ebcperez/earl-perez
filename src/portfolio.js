import React from 'react';
import MyModal from './components/modal';

class Portfolio extends React.Component {
    constructor () {
        super();

        this.state = {
            projects: []
        };
    }

    componentWillMount () {
        this.setState({
            projects: [
                {
                    title: "timeAdd",
                    modalid: "timeAdd",
                    details: "Web app taht adds time in minutes and seconds format.",
                    img: "timeAdd-ss.png",
                    caption: "Created with Bootstrap and jQuery.",
                    link: {
                        project: "https://ebcperez.github.io/portfolio/timeAdd%20app/",
                        github: "https://github.com/ebcperez/web-projects/tree/master"
                    }
                },
                {
                    title: "Portfolio website template",
                    modalid: "portfoliowebsite",
                    details: "Portfolio website I created with Bootstrap and jQuery. The website is styled using Bootstrap and jQuery is used for smooth-scrolling effect.",
                    img: "portfolio1-ss.png",
                    caption: "Created with Bootstrap and jQuery",
                    link: {
                        project: "https://ebcperez.github.io/earl-perez/",
                        github: "https://github.com/ebcperez/earl-perez"
                    }
                },
                {
                    title: "React-Weather",
                    modalid: "reactweather",
                    details: "Weather app that displays current weather data from several cities. jQuery's ajax function is used to query data from OpenWeatherMap's current weather api for several cities.",
                    img: "bmw-img.jpg",
                    caption: "Created with ReactJS, Bootstrap, and jQuery.",
                    link: {
                        project: "https://ebcperez.github.io/reactjsweather/",
                        github: "https://github.com/ebcperez/reactjsweather"
                    }
                },
            ]
        });
    }

    render () {
        var modals = this.state.projects.map((project, i) => {
            return (
                <MyModal key={i}
                modalId={project.modalid}
                link={project.link} 
                caption={project.caption} 
                modalTitle={project.title} 
                modalDetails={project.details} 
                img={project.img} />
            );
        });
        return (
            <div className="container-fluid">
                <div className="row">
                    {modals}
                </div>
            </div>
        );
    }
}
export default Portfolio;