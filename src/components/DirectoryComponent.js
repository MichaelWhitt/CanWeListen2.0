import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';




class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          accounts: [
            {
                id: 0,
                name: "Michael Whitt",
                image: "/assets/images/i2.jpg",
                description: "Chief Executive Officer",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com",
                github: "https://github.com/MichaelWhitt",
                linkedIn: "https://www.linkedin.com/in/michaeldwhitt/"
            },
            {
                id: 1,
                name: "Jacob Mooney",
                image: "/assets/images/i3.jfif",
                description: "Chief Technology Officer",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com",
                github: "https://github.com/jacobmooney",
                linkedIn: "https://www.linkedin.com/in/jacob-mooney-b6433b211/"
            },
            {
                id: 2,
                name: "Andy McAdams",
                image: "/assets/images/i1.jfif",
                description: "Chief Information Officer",
                phone: 1-233-645-9087,
                featured: true,
                email: "fakeemail@fakesite.com",
                github: "https://github.com/andymcadams-dev",
                linkedIn: "https://www.linkedin.com/in/andy-mcadams-a10192a2/"
            },
            
        ]
        };
    }

      render() {
        const directory = this.state.accounts.map(account => {
            return (
                <div className="row">
                    <div className="col col-sm-4">
                        <img src={account.image} alt={account.name} />
                    </div>
                    <div className="col col-sm-4" style={{"margin-top": 40}}>
                        <h2>{account.name}</h2>
                        <div>{account.description}</div>
                        <div style={{ "margin-top": 10}}>
                            <a href={account.github} target="_blank" style={{"padding-right": 30}}><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                            <a href={account.linkedIn} target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                        </div>
                    </div>
                </div>

            );
        });

        return (
            <div>
                <div className="container">
                        {directory}
                </div>
            </div>
        );
    }
  } 
  

export default Directory;