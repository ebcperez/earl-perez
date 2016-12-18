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
                    title: "ReactWeather",
                    modalid: "reactweather",
                    details: "Weather app that displays current weather data from user input location. Axios is used for the ajax function to query data from Dark Sky's forecast weather api.",
                    img: "ReactWeather-ss.png",
                    caption: "Created with ReactJS, Bootstrap, and Axios.",
                    link: {
                        project: "https://ebcperez.github.io/reactjsweather/",
                        github: "https://github.com/ebcperez/reactjsweather"
                    }
                },
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
                        project: "https://ebcperez.github.io/portfolio/",
                        github: "https://github.com/ebcperez/portfolio"
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